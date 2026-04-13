"use client";
import styles from "./TitleBar.module.scss";

export const TitleBar = () => {
    return (
        <div className={styles.titleBar}>
            <div className={styles.left}>
                <h3 className={styles.title}>View Audit Score</h3>
            </div>

            <div className={styles.right}>
                <div className={styles.statusLabel}>
                    <span className={styles.statusIcon}>
                        <i className="bi bi-check"></i>
                    </span>
                    Audit Completed
                </div>

            </div>
        </div>
    );
};
