import { LABELS } from './constants';
import styles from './FooterActions.module.scss';

interface Props {
  onSave: () => void;
  onSaveNext: () => void;
}

export default function FooterActions({ onSave, onSaveNext }: Props) {
  return (
    <div className={styles.footer}>
      <button onClick={onSave} className={styles.exit}>
        {LABELS.FOOTER.SAVE_EXIT}
      </button>
      <button onClick={onSaveNext} className={styles.next}>
        {LABELS.FOOTER.SAVE_NEXT}
      </button>
    </div>
  );
}
