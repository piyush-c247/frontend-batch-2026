type FormattableValue = number | string | null | undefined;

export const formatNumber = (value: FormattableValue): string => {
  if (value === "N/A") return "N/A";
  if (value === null || value === undefined) return "-";

  const num = Number(value);

  if (Number.isNaN(num)) return String(value);

  return Number.isInteger(num) ? String(num) : num.toFixed(2);
};

export const formatPercent = (value: FormattableValue): string => {
  if (value === "N/A") return "N/A";
  if (value === null || value === undefined) return "-";

  const num = Number(value);

  if (Number.isNaN(num)) return String(value);

  return `${num.toFixed(2)}%`;
};