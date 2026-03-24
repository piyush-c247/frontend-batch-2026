import { Form } from "react-bootstrap";
import styles from "./FormControls.module.scss";
import { LABELS } from "./constants";

interface Props {
  options: string[];
  value?: string;
  onChange: (value: string) => void;
}

export default function SelectField({ options, value, onChange }: Props) {
  return (
    <Form.Select
      size="sm"
      value={value || ""}
      onChange={(e) => onChange(e.target.value)}
      className={styles.selectField}
    >
      <option value="">{LABELS.SELECT}</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </Form.Select>
  );
}
