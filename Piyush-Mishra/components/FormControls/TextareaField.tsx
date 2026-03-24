import styles from "./FormControls.module.scss";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function TextareaField({ value, onChange }: Props) {
  return (
    <textarea
      className={styles.textareaField}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      rows={1} 
    />
  );
}
