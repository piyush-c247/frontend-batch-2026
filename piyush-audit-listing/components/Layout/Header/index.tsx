"use client";

import styles from "./header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      {/* LEFT: LOGO */}
      <div className={styles.left}>
        <span className={styles.logo}>YATARA</span>
      </div>

      {/* RIGHT: INFO */}
      <div className={styles.right}>
        <div className={styles.infoBlock}>
          <span className={styles.label}>Current Date & Time</span>
          <span className={styles.value}>Mar 18, 2026 - 04:06:25 AM</span>
        </div>

        <div className={styles.infoBlock}>
          <span className={styles.label}>America/St_Johns</span>
          <span className={styles.value}>(GMT -3:30)</span>
        </div>

        <div className={styles.profile}>
          <span>Admin</span>
        </div>
      </div>
    </header>
  );
};




