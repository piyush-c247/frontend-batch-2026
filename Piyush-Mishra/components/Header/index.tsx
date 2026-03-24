'use client';

import styles from './Header.module.scss';
import { HEADER_CONSTANTS } from './constants';

export default function Header() {
  const { LOGO_TEXT, USER_ROLE, LABELS, DISPLAY_DATA } = HEADER_CONSTANTS;

  return (
    <header className={styles.header}>
      {/* LEFT */}
      <div className={styles.left}>
        <div className={styles.logo}>{LOGO_TEXT}</div>
      </div>

      {/* RIGHT */}
      <div className={styles.right}>
        <div className={styles.info}>
          <span>{LABELS.DATE_TIME}</span>
          <strong>{DISPLAY_DATA.DATE_TIME}</strong>
        </div>

        <div className={styles.divider} />

        <div className={styles.location}>
          {DISPLAY_DATA.TIMEZONE} <span>{DISPLAY_DATA.GMT_OFFSET}</span>
        </div>

        <div className={styles.divider} />

        <div className={styles.user}>
          <div className={styles.avatar} />
          <span>{USER_ROLE}</span>
        </div>
      </div>
    </header>
  );
}
