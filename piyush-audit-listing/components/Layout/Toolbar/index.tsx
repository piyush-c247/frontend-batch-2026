"use client";

import styles from "./Toolbar.module.scss";

export const Toolbar = () => {
  return (
    <div className={styles.toolbar}>
      {/* LEFT: BACK BUTTON */}
      <div className={styles.left}>
        <button className={styles.backBtn}>
          ← Go Back
        </button>
      </div>

      {/* RIGHT: BREADCRUMB */}
      <div className={styles.right}>
        <span className={styles.link}>Carrier Safety Audit Listing</span>
        <span className={styles.separator}>/</span>
        <span className={styles.active}>View Audit Score</span>
      </div>
    </div>
  );
};