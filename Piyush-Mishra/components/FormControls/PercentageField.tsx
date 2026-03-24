import styles from "./FormControls.module.scss";

interface Props {
  value: number | "";
  onChange: (value: number | "") => void;
}

export default function PercentageField({ value, onChange }: Props) {
  return (
    <div className={styles.percentageWrapper}>
      <input
        className={styles.percentageField}
        type="number"
        value={value}
        onChange={(e) => {
          const raw = e.target.value;
          onChange(raw === "" ? "" : Math.min(100, Math.max(0, Number(raw))));
        }}
        min={0}
        max={100}
      />
      <span className={styles.percentageSymbol}>%</span>
    </div>
  );
}