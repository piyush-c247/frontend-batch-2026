'use client';

import { Modal } from 'react-bootstrap';
import styles from './ConfirmModal.module.scss';

interface ConfirmModalProps {
  show: boolean;
  companyName: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmModal({
  show,
  companyName,
  onConfirm,
  onCancel,
}: ConfirmModalProps) {
  return (
    <Modal
      show={show}
      onHide={onCancel}
      centered
      backdrop="static"
      keyboard={false}
    >
      <Modal.Body className={styles.body}>

        <h5 className={styles.title}>Are you sure?</h5>

        <p className={styles.message}>
          Are you sure you want delete Insurance Company -{' '}
          <strong>{companyName}</strong> ?
        </p>

        <div className={styles.actions}>
          <button className={styles.confirmBtn} onClick={onConfirm}>
            Yes, delete it!
          </button>
          <button className={styles.cancelBtn} onClick={onCancel}>
            No, keep it
          </button>
        </div>

      </Modal.Body>
    </Modal>
  );
}