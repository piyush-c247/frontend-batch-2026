'use client';

import { useRef } from 'react';
import styles from './ImageUpload.module.scss';
import { UploadImageIcon } from '@/components/common/UploadImageIcon';

interface Props {
  label: string;
  onChange: (file: File | null) => void;
}

export default function ImageUpload({ label, onChange }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  /* ---------- Validation ---------- */

  const handleFile = (file: File | null) => {
    if (!file) {
      onChange(null);
      return;
    }

    const validTypes = ['image/png', 'image/jpeg', 'image/svg+xml'];
    const maxSize = 5 * 1024 * 1024;

    const isValidType = validTypes.includes(file.type);
    const isValidSize = file.size <= maxSize;

    if (!isValidType || !isValidSize) {
      onChange(null);
      return;
    }

    onChange(file);
  };

  /* ---------- Events ---------- */

  const handleBrowse = () => inputRef.current?.click();

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    handleFile(e.dataTransfer.files?.[0] || null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFile(e.target.files?.[0] || null);
    e.target.value = ''; // allow re-upload same file
  };

  /* ---------- UI ---------- */

  return (
  <div className={styles.wrapper}>
    <label>{label}</label>

    <div
      className={styles.dropzone}
      onClick={handleBrowse}
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      {/* 1. ICON */}
      <div className={styles.icon}>
        <UploadImageIcon />
      </div>

      {/* 2. BUTTON */}
      <button type="button" className={styles.browseBtn}>
        Browse files
      </button>

      {/* 3. SECONDARY TEXT (OR) */}
      <p className={styles.secondaryText}>Or</p>

      {/* 4. PRIMARY TEXT */}
      <p className={styles.primaryText}>
        Drag your file here
      </p>

      {/* HELP TEXT (Optional: kept at bottom for UI clarity) */}
      <span className={styles.helper}>
        Maximum file size: 5MB
      </span>

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