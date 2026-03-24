"use client";

import { useRef, useState } from "react";
import { SummarySection } from "@/services/IndexedDB/operations";
import { LABELS } from "./constants";
import styles from "./SectionSidebar.module.scss";
import { FiEdit2, FiTrash2 } from 'react-icons/fi';

interface Props {
  sections: SummarySection[];
  activeId: string | null;
  onSelect: (id: string) => void;
  onAdd: () => void;
  onRename: (id: string, title: string) => void;
  onDelete: (id: string) => void;
}

export default function SectionSidebar({
  sections,
  activeId,
  onSelect,
  onAdd,
  onRename,
  onDelete,
}: Props) {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingTitle, setEditingTitle] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const startRename = (section: SummarySection) => {
    setEditingId(section.id);
    setEditingTitle(section.title);
    setTimeout(() => inputRef.current?.select(), 0);
  };

  const commitRename = () => {
    if (editingId) {
      onRename(editingId, editingTitle.trim() || LABELS.SIDEBAR.DEFAULT_TITLE);
      setEditingId(null);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") commitRename();
    if (e.key === "Escape") setEditingId(null);
  };

  return (
    <div className={styles.sidebar}>
      {/* Color indicator */}
      <div className={styles.legend}>
        <span className={styles.legendLabel}>{LABELS.SIDEBAR.LEGEND_TITLE}</span>
        <span className={styles.dot} data-filled="true" />
        <span className={styles.legendText}>{LABELS.SIDEBAR.STATUS_FILLED}</span>
        <span className={styles.dot} data-filled="false" />
        <span className={styles.legendText}>{LABELS.SIDEBAR.STATUS_EMPTY}</span>
        
      </div>

      {/* Section list */}
      <div className={styles.list}>
        {sections.map((section) => (
          <div
            key={section.id}
            className={`${styles.item} ${activeId === section.id ? styles.active : ""}`}
            onClick={() => onSelect(section.id)}
          >
            {/* Color indicator strip */}
            <span
              className={styles.indicator}
              data-filled={section.isFilled}
            />

            {/* Title or rename input */}
            {editingId === section.id ? (
              <input
                ref={inputRef}
                className={styles.renameInput}
                value={editingTitle}
                onChange={(e) => setEditingTitle(e.target.value)}
                onBlur={commitRename}
                onKeyDown={handleKeyDown}
                onClick={(e) => e.stopPropagation()}
                autoFocus
              />
            ) : (
              <span className={styles.title}>{section.title}</span>
            )}

            {editingId !== section.id && (
              <div className={styles.actions}>
                <button
                  className={styles.actionBtn}
                  title={LABELS.SIDEBAR.ACTIONS.RENAME}
                  onClick={(e) => {
                    e.stopPropagation();
                    startRename(section);
                  }}
                >
                  <FiEdit2 />
                </button>
                <button
                  className={styles.actionBtn}
                  title={LABELS.SIDEBAR.ACTIONS.DELETE}
                  onClick={(e) => {
                    e.stopPropagation();
                    onDelete(section.id);
                  }}
                >
                  <FiTrash2 />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Add new section */}
      <button className={styles.addBtn} onClick={onAdd}>
        {LABELS.SIDEBAR.ADD_BUTTON}
      </button>
    </div>
  );
}
