'use client';

import { useRef, useState } from 'react';
import { useDroppable } from '@dnd-kit/core';
import styles from './ImageUpload.module.scss';
import { UploadImageIcon } from '@/components/common/UploadImageIcon';
import { IMAGE_UPLOAD_CONSTANTS } from './constants';

interface Props {
  id: string;
  label: string;
  onChange: (file: File | null) => void;
}

export default function ImageUpload({ id, label, onChange }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const { setNodeRef } = useDroppable({ id });

  /* Validation */

  const validateFile = (file: File): string | null => {
    const { ALLOWED_TYPES, MAX_SIZE_BYTES, TYPE_ERROR, SIZE_ERROR } = IMAGE_UPLOAD_CONSTANTS.VALIDATION;

    if (!ALLOWED_TYPES.includes(file.type))
      return TYPE_ERROR;
    if (file.size > MAX_SIZE_BYTES)
      return SIZE_ERROR;

    return null;
  };

  const handleFile = (file: File | null) => {
    if (!file) {
      clearFile();
      return;
    }

    const validationError = validateFile(file);

    if (validationError) {
      clearFile();
      setError(validationError);
      return;
    }

    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    setSelectedFile(file);
    setError(null);
    onChange(file);
  };

  const clearFile = () => {
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setSelectedFile(null);
    setPreviewUrl(null);
    setError(null);
    onChange(null);
  };

  /* Events */

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

  /* UI */

  const renderContent = () => {
    if (selectedFile && previewUrl) {
      return (
        <div className={styles.preview}>

          {/* Thumbnail */}
          <div className={styles.thumbnail}>
            <img src={previewUrl} alt={selectedFile.name} />
          </div>

          {/* File info */}
          <div className={styles.fileInfo}>
            <p className={styles.fileName}>{selectedFile.name}</p>
            <p className={styles.fileSize}>
              {(selectedFile.size / 1024).toFixed(1)} KB
            </p>
          </div>

          {/* Remove */}
          <button
            type="button"
            className={styles.removeBtn}
            onClick={(e) => {
              e.stopPropagation();
              clearFile();
            }}
          >
            ✕
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
          {IMAGE_UPLOAD_CONSTANTS.UI.BROWSE_BTN}
        </button>

        <p className={styles.secondaryText}>{IMAGE_UPLOAD_CONSTANTS.UI.OR_TEXT}</p>
        <p className={styles.primaryText}>{IMAGE_UPLOAD_CONSTANTS.UI.DRAG_TEXT}</p>
        <span className={styles.helper}>{IMAGE_UPLOAD_CONSTANTS.UI.MAX_SIZE_LABEL}</span>
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
          ${error ? styles.hasError : ''}
        `}
        onClick={!selectedFile ? handleBrowse : undefined}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        {renderContent()}

        <input
          ref={inputRef}
          type="file"
          hidden
          accept=".png,.jpg,.jpeg"
          onChange={handleChange}
        />
      </div>

      {/* Validation error */}
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}