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
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <circle cx="7" cy="7" r="7" fill="rgba(255,255,255,0.3)" />
                        <path d="M4 7l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Audit Completed
                </span>
            </div>
        </div>
    );
};