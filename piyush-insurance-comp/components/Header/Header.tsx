'use client';

import styles from './Header.module.scss';
import { HEADER_CONSTANTS } from './constants';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <span className={styles.menuIcon}>{HEADER_CONSTANTS.MENU_ICON}</span>
      </div>

      <div className={styles.right}>
        <div className={styles.timeBlock}>
          <div className={styles.label}>{HEADER_CONSTANTS.LABEL_DATE_TIME}</div>
          <div className={styles.value}>{HEADER_CONSTANTS.CURRENT_TIME}</div>
        </div>

        <div className={styles.timezone}>
          {HEADER_CONSTANTS.TIMEZONE_NAME} <br />
          <span>{HEADER_CONSTANTS.TIMEZONE_DETAILS}</span>
        </div>

        <div className={styles.user}>
          <span className={styles.avatar}>{HEADER_CONSTANTS.USER_AVATAR}</span>
          <span>{HEADER_CONSTANTS.USER_NAME}</span>
        </div>
      </div>
    </header>
  );
}
