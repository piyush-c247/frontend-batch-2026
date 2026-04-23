// components/common/ToolTipIcon/index.tsx

import styles from './ToolTipIcon.module.scss';

interface ToolTipIconProps {
  text: string;
}

export const ToolTipIcon = ({ text }: ToolTipIconProps) => {
  return (
    <span className={styles.wrapper} data-tooltip={text}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" fill="currentColor" />
        <rect x="11" y="10" width="2" height="6" fill="white" />
        <circle cx="12" cy="7" r="1.5" fill="white" />
      </svg>
    </span>
  );
};