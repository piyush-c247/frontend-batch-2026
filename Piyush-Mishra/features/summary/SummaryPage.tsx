"use client";
import { LABELS } from "./constants";
import { useSummaryEditor } from "@/hooks/useSummaryEditor";
import SectionSidebar from "./SectionSideBar";
import styles from "./Summarypage.module.scss";

export default function SummaryPage() {
  const {
    sections,
    activeId,
    activeSection,
    setActiveId,
    handleAdd,
    handleRename,
    handleDelete,
  } = useSummaryEditor();

  return (
    <div className={styles.container}>
      <SectionSidebar
        sections={sections}
        activeId={activeId}
        onSelect={setActiveId}
        onAdd={handleAdd}
        onRename={handleRename}
        onDelete={handleDelete}
      />

      <div className={styles.editorArea}>
        {activeSection && (
          <h3 className={styles.sectionTitle}>{activeSection.title}</h3>
        )}

        {/* TinyEmc */}
        <div style={{ display: activeSection ? "block" : "none" }}>
          <div id="summary-tinymce-editor" />
        </div>

        {!activeSection && (
          <div className={styles.empty}>
            <p>
              {LABELS.SUMMARYTEXT.NO_SECTION} <strong>{LABELS.SUMMARYTEXT.ADD_NEW}</strong> {LABELS.SUMMARYTEXT.GET_STARTED}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}