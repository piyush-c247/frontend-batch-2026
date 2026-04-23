'use client';

import { Modal } from 'react-bootstrap';
import styles from './AddModal.module.scss';
import { ReactNode } from 'react';

interface AppModalProps {
  show: boolean;
  title: string;
  onClose: () => void;
  children: ReactNode;
}

export default function AppModal({
  show,
  title,
  onClose,
  children,
}: AppModalProps) {
  return (
    <Modal
      show={show}
      onHide={onClose}
      centered
      backdrop="static"
      keyboard={false}
      className={styles.modal}
    >
      <Modal.Header className={styles.header}>
        <Modal.Title>{title}</Modal.Title>
        <button className={styles.closeBtn} onClick={onClose}>
          ✕
        </button>
      </Modal.Header>

      <Modal.Body className={styles.body}>
        {children}
      </Modal.Body>
    </Modal>
  );
}