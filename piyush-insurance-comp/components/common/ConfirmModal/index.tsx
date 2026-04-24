'use client';

import { Modal } from 'react-bootstrap';
import styles from './ConfirmModal.module.scss';
import { CONFIRM_DELETE_MODAL } from './constants';

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

        <h5 className={styles.title}>{CONFIRM_DELETE_MODAL.TITLE}</h5>

        <p className={styles.message}>
          {CONFIRM_DELETE_MODAL.MESSAGE_PREFIX}
          <strong>{companyName}</strong> ?
        </p>

        <div className={styles.actions}>
          <button className={styles.confirmBtn} onClick={onConfirm}>
            {CONFIRM_DELETE_MODAL.CONFIRM_TEXT}
          </button>
          <button className={styles.cancelBtn} onClick={onCancel}>
            {CONFIRM_DELETE_MODAL.CANCEL_TEXT}
          </button>
        </div>

      </Modal.Body>
    </Modal>
  );
}
