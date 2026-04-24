'use client';

import { useRef, useState } from 'react';
import { useDroppable } from '@dnd-kit/core';
import styles from './ImageUpload.module.scss';
import { UploadImageIcon } from '@/components/common/UploadImageIcon';

interface Props {
  id: string;
  label: string;
  onChange: (file: File | null) => void;
}

export default function ImageUpload({ id, label, onChange }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const { setNodeRef } = useDroppable({ id });

  /* ---------- Validation ---------- */

  const validateFile = (file: File) => {
    const validTypes = ['image/png', 'image/jpeg', 'image/svg+xml'];
    const maxSize = 5 * 1024 * 1024;

    if (!validTypes.includes(file.type)) return false;
    if (file.size > maxSize) return false;

    return true;
  };

  const handleFile = (file: File | null) => {
    if (!file) {
      setSelectedFile(null);
      onChange(null);
      return;
    }

    const isValid = validateFile(file);

    if (!isValid) {
      setSelectedFile(null);
      onChange(null);
      return;
    }

    setSelectedFile(file);
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

  const handleRemove = () => {
    setSelectedFile(null);
    onChange(null);
  };

  /* ---------- UI ---------- */

  const renderContent = () => {
    if (selectedFile) {
      return (
        <div className={styles.filePreview}>
          <p className={styles.fileName}>{selectedFile.name}</p>
          <button
            type="button"
            className={styles.removeBtn}
            onClick={(e) => {
              e.stopPropagation();
              handleRemove();
            }}
          >
            Remove
          </button>
        </div>
      );
    }

    return (
      <>
        <div className={styles.icon}>
          <UploadImageIcon />
        </div>

        <button type="button" className={styles.browseBtn}>
          Browse files
        </button>

        <p className={styles.secondaryText}>Or</p>

        <p className={styles.primaryText}>Drag your file here</p>

        <span className={styles.helper}>Maximum file size: 5MB</span>
      </>
    );
  };

  return (
    <div className={styles.wrapper}>
      <label>{label}</label>

      <div
        ref={setNodeRef}
        className={`
          ${styles.dropzone}
          ${isDraggingOver ? styles.dragOver : ''}
          ${selectedFile ? styles.filled : ''}
        `}
        onClick={handleBrowse}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        {renderContent()}

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