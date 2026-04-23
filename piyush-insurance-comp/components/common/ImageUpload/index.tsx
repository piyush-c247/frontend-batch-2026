'use client';

import { useRef, useState } from 'react';
import { useDroppable } from '@dnd-kit/core';
import styles from './ImageUpload.module.scss';
import { UploadImageIcon } from '@/components/common/UploadImageIcon';

interface Props {
  id: string;           // ← ADD: unique id for dnd-kit droppable
  label: string;
  onChange: (file: File | null) => void;
}

export default function ImageUpload({ id, label, onChange }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDraggingOver, setIsDraggingOver] = useState(false);

  /* ---------- dnd-kit droppable ---------- */

  const { setNodeRef } = useDroppable({ id });

  /* ---------- Validation ---------- */

  const handleFile = (file: File | null) => {
    if (!file) { onChange(null); return; }

    const validTypes = ['image/png', 'image/jpeg', 'image/svg+xml'];
    if (!validTypes.includes(file.type)) { onChange(null); return; }

    onChange(file);
  };

  /* ---------- Events ---------- */

  const handleBrowse = () => inputRef.current?.click();

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDraggingOver(false);
    handleFile(e.dataTransfer.files?.[0] || null);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDraggingOver(true);
  };

  const handleDragLeave = () => setIsDraggingOver(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFile(e.target.files?.[0] || null);
    e.target.value = '';
  };

  /* ---------- UI ---------- */

  return (
    <div className={styles.wrapper}>
      <label>{label}</label>

      <div
        ref={setNodeRef}
        className={`${styles.dropzone} ${isDraggingOver ? styles.dragOver : ''}`}
        onClick={handleBrowse}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <div className={styles.icon}>
          <UploadImageIcon />
        </div>

        <button type="button" className={styles.browseBtn}>
          Browse files
        </button>

        <p className={styles.secondaryText}>Or</p>

        <p className={styles.primaryText}>Drag your file here</p>

        <span className={styles.helper}>Maximum file size: 5MB</span>

        <input
          ref={inputRef}
          type="file"
          hidden
          accept=".png,.jpg,.jpeg,.svg"
          onChange={handleChange}
        />
      </div>
    </div>
  );
}