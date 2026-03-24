import { useEffect, useRef, useState, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";
import type { Editor as TinyMCEEditor, EditorEvent } from "tinymce";
import {
  SummarySection,
  getSummarySections,
  saveSummarySections,
} from "@/services/IndexedDB/operations";

declare global {
  interface Window {
    tinymce: {
      init: (config: Record<string, unknown>) => void;
      remove: (selector: string) => void;
    };
  }
}

export interface UseSummaryEditorReturn {
  sections: SummarySection[];
  activeId: string | null;
  activeSection: SummarySection | null;
  setActiveId: (id: string) => void;
  handleAdd: () => void;
  handleRename: (id: string, title: string) => void;
  handleDelete: (id: string) => void;
}

export function useSummaryEditor(): UseSummaryEditorReturn {
  const [sections, setSections] = useState<SummarySection[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  const editorRef = useRef<TinyMCEEditor | null>(null);
  const editorReadyRef = useRef(false);
  const activeIdRef = useRef<string | null>(null);
  const sectionsRef = useRef<SummarySection[]>([]);
  const saveTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    sectionsRef.current = sections;
  }, [sections]);

  //Load from IndexedDB on mount 
  useEffect(() => {
    getSummarySections().then((saved) => {
      if (saved.length > 0) {
        setSections(saved);
        sectionsRef.current = saved;
        setActiveId(saved[0].id);
        activeIdRef.current = saved[0].id;
      }
    });
  }, []);

  //Debounced persist 
  const persist = useCallback((updated: SummarySection[]) => {
    if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
    saveTimeoutRef.current = setTimeout(() => {
      saveSummarySections(updated);
    }, 500);
  }, []);

  // TinyMCE init 
  useEffect(() => {
    //  reset refs before every init — critical when remounting after tab switch
    editorRef.current = null;
    editorReadyRef.current = false;

    const initEditor = () => {
      if (!window.tinymce) return;

      // always remove any stale instance on this selector before initing
      window.tinymce.remove("#summary-tinymce-editor");

      window.tinymce.init({
        selector: "#summary-tinymce-editor",
        license_key: "gpl",
        height: 450,
        menubar: false,
        branding: false,
        promotion: false,
        plugins: [
          "advlist", "autolink", "lists", "link",
          "searchreplace", "visualblocks", "code",
          "fullscreen", "table", "wordcount",
        ],
        toolbar:
          "undo redo | bold italic underline | forecolor | " +
          "alignleft aligncenter alignright alignjustify | " +
          "bullist numlist outdent indent | removeformat | code",
        content_style:
          "body { font-family: Inter, Segoe UI, sans-serif; font-size: 14px; }",
        setup: (editor: TinyMCEEditor) => {
          editorRef.current = editor;

          editor.on("init", () => {
            editorReadyRef.current = true;
            // restore content of active section once editor is ready
            const initial = sectionsRef.current.find(
              (s) => s.id === activeIdRef.current
            );
            editor.setContent(initial?.content ?? "");
          });

          editor.on(
            "input keyup Change",
            (_e: EditorEvent<InputEvent | KeyboardEvent>) => {
              const content = editor.getContent();
              const currentId = activeIdRef.current;
              if (!currentId) return;

              const updated = sectionsRef.current.map((s) =>
                s.id === currentId
                  ? {
                      ...s,
                      content,
                      isFilled:
                        content.replace(/<[^>]*>/g, "").trim().length > 0,
                    }
                  : s
              );

              sectionsRef.current = updated;
              setSections(updated);
              persist(updated);
            }
          );
        },
      });
    };

    if (window.tinymce) {
      //tinymce script already loaded — init directly
      initEditor();
    } else {
      const existing = document.querySelector(
        'script[src="/tinymce/tinymce.min.js"]'
      );
      if (existing) {
        existing.addEventListener("load", initEditor);
      } else {
        const script = document.createElement("script");
        script.src = "/tinymce/tinymce.min.js";
        script.referrerPolicy = "origin";
        script.onload = initEditor;
        document.head.appendChild(script);
      }
    }

    return () => {
      if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
      window.tinymce?.remove("#summary-tinymce-editor");
      editorRef.current = null;
      editorReadyRef.current = false;
    };
  }, []); // runs on every mount/unmount cycle

  //Swap editor content when switching sections
  useEffect(() => {
    activeIdRef.current = activeId;
    if (!editorRef.current || !editorReadyRef.current) return;

    const section = sectionsRef.current.find((s) => s.id === activeId);
    editorRef.current.setContent(section?.content ?? "");
  }, [activeId]);

  //Section actions 
  const updateSections = (updated: SummarySection[]) => {
    sectionsRef.current = updated;
    setSections(updated);
    persist(updated);
  };

  const handleAdd = () => {
    const newSection: SummarySection = {
      id: uuidv4(),
      title: "New Section",
      content: "",
      isFilled: false,
      order: sectionsRef.current.length,
    };
    const updated = [...sectionsRef.current, newSection];
    updateSections(updated);
    setActiveId(newSection.id);
  };

  const handleRename = (id: string, title: string) => {
    updateSections(
      sectionsRef.current.map((s) => (s.id === id ? { ...s, title } : s))
    );
  };

  const handleDelete = (id: string) => {
    const updated = sectionsRef.current
      .filter((s) => s.id !== id)
      .map((s, i) => ({ ...s, order: i }));
    updateSections(updated);
    if (activeId === id) {
      setActiveId(updated[0]?.id ?? null);
    }
  };

  const activeSection = sections.find((s) => s.id === activeId) ?? null;

  return {
    sections,
    activeId,
    activeSection,
    setActiveId,
    handleAdd,
    handleRename,
    handleDelete,
  };
}