"use client";

import styles from "./TitleBar.module.scss";

export const TitleBar = () => {
  return (
    <div className={styles.titleBar}>
      {/* LEFT: TITLE */}
      <div className={styles.left}>
        <h3 className={styles.title}>View Audit Score</h3>
      </div>

      {/* RIGHT: STATUS */}
      <div className={styles.right}>
        <span className={styles.badge}>
          ✔ Audit Completed
        </span>
      </div>
    </div>
  );
};