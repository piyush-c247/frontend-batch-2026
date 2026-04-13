"use client";

import styles from "./TitleBar.module.scss";
import { TITLE_BAR } from "./constants";

export const TitleBar = () => {
  return (
    <div className={styles.titleBar}>
      <div className={styles.left}>
        <h3 className={styles.title}>
          {TITLE_BAR.TITLE}
        </h3>
      </div>

      <div className={styles.right}>
        <div className={styles.statusLabel}>
          <span className={styles.statusIcon}>
            <i className={TITLE_BAR.STATUS.ICON_CLASS}></i>
          </span>
          {TITLE_BAR.STATUS.TEXT}
        </div>
      </div>
    </div>
  );
};