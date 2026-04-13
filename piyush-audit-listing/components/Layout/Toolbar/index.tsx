"use client";

import styles from "./Toolbar.module.scss";
import { TOOLBAR } from "./constants";

export const Toolbar = () => {
  return (
    <div className={styles.toolbar}>
      {/* LEFT: BACK BUTTON */}
      <div className={styles.left}>
        <button className={styles.backBtn}>
          {TOOLBAR.BACK_BUTTON_TEXT}
        </button>
      </div>

      {/* RIGHT: BREADCRUMB */}
      <div className={styles.right}>
        <span className={styles.link}>
          {TOOLBAR.BREADCRUMB.LISTING}
        </span>
        <span className={styles.separator}>
          {TOOLBAR.BREADCRUMB.SEPARATOR}
        </span>
        <span className={styles.active}>
          {TOOLBAR.BREADCRUMB.CURRENT}
        </span>
      </div>
    </div>
  );
};