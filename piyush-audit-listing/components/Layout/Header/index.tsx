"use client";

import styles from "./header.module.scss";
import { HEADER } from "./constants";

export const Header = () => {
  return (
    <header className={styles.header}>
      {/* LEFT: LOGO */}
      <div className={styles.left}>
        <span className={styles.logo}>
          {HEADER.LOGO}
        </span>
      </div>

      {/* RIGHT: INFO */}
      <div className={styles.right}>
        <div className={styles.infoBlock}>
          <span className={styles.label}>
            {HEADER.DATE_TIME.LABEL}
          </span>
          <span className={styles.value}>
            {HEADER.DATE_TIME.VALUE}
          </span>
        </div>

        <div className={styles.infoBlock}>
          <span className={styles.label}>
            {HEADER.TIMEZONE.LABEL}
          </span>
          <span className={styles.value}>
            {HEADER.TIMEZONE.VALUE}
          </span>
        </div>

        <div className={styles.profile}>
          <span>{HEADER.USER.NAME}</span>
        </div>
      </div>
    </header>
  );
};