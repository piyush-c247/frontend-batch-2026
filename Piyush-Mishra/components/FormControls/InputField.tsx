import styles from "./FormControls.module.scss";

interface Props {
  type: "text" | "number";
  value: string | number;
  onChange: (value: string | number) => void;
  placeholder?: string;
}

export default function InputField({ type, value, onChange, placeholder }: Props) {
  return (
    <input
      className={styles.inputField}
      type={type}
      value={value ?? ""}
      placeholder={placeholder}
      onChange={(e) =>
        onChange(type === "number" ? Number(e.target.value) : e.target.value)
      }
    />
  );
}
