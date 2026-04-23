'use client';

import { useRef } from 'react';
import styles from './ImageUpload.module.scss';

interface Props {
  label: string;
  onChange: (file: File | null) => void;
}

export default function ImageUpload({ label, onChange }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File | null) => {
    if (!file) return;

    const isValidType = ['image/png', 'image/jpeg', 'image/svg+xml'].includes(file.type);
    const isValidSize = file.size <= 5 * 1024 * 1024;

    if (!isValidType || !isValidSize) return;

    onChange(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    handleFile(e.dataTransfer.files[0]);
  };

  const handleBrowse = () => {
    inputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFile(e.target.files?.[0] || null);
  };

  return (
    <div className={styles.wrapper}>
      <label>{label}</label>

      <div
        className={styles.dropzone}
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        <button type="button" onClick={handleBrowse}>
          Browse File
        </button>

        <p>Or</p>
        <p>Drag your file here</p>
        <span>Maximum size limit of 5 MB.</span>

        <input
          ref={inputRef}
          type="file"
          hidden
          onChange={handleChange}
        />
      </div>
    </div>
  );
}