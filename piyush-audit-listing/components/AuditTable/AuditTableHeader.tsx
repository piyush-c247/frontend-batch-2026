"use client";

import styles from "./AuditTable.module.scss";

export const AuditTableHeader = () => {
    return (
        <div className={styles.mainHeaderContainer}>

            {/* OVERVIEW */}
            <div className={`${styles.headerGroup} ${styles.headerOverview}`}>
                <div className={styles.topLabel}>Overview</div>
                <div className={styles.bottomLabels}>
                    <div className={styles.wCat}>Category</div>
                    <div className={styles.wSection}>Section</div>
                    <div className={styles.wNum}>Questions</div>
                </div>
            </div>

            {/* SCORING */}
            <div className={`${styles.headerGroup} ${styles.headerScoring}`}>
                <div className={styles.topLabel}>Scoring</div>

                <div className={styles.scoringSubGrid}>
                    <div className={styles.subHeaderRow}>
                        <div className={styles.wNum2}>Completion %</div>
                        <div className={styles.wNum}>Type Total</div>
                        <div className={styles.wNum}>% of Total</div>
                        <div className={styles.wNum}>Section Total</div>
                        <div className={styles.wGap}></div>
                        <div className={styles.wNum}>Weight</div>
                        <div className={styles.wNum}>Total Score</div>
                    </div>

                    <div className={styles.bottomLabels}>
                        <div className={`${styles.wNum} ${styles.redText}`}>Questions</div>
                        <div className={`${styles.wNum} ${styles.redText}`}>Weight</div>
                        <div className={styles.wNum}></div>
                        <div className={styles.wNum}></div>
                        <div className={styles.wNum}></div>
                        <div className={styles.wGap}></div>
                        <div className={styles.wNum}></div>
                        <div className={styles.wNum}></div>
                    </div>
                </div>
            </div>

            {/* ADJUSTED */}
            <div className={`${styles.headerGroup} ${styles.headerAdjusted}`}>
                <div className={styles.topLabel}>Adjusted</div>

                <div className={styles.adjustedSubGrid}>
                    <div className={styles.subHeaderRow}>
                        <div className={styles.wNum2}>Weight</div>
                        <div className={styles.wNum2}>Score</div>
                    </div>

                    <div className={styles.bottomLabels}>
                        <div className={`${styles.wNum} ${styles.redText}`}>Type</div>
                        <div className={`${styles.wNum} ${styles.redText}`}>Section</div>
                        <div className={`${styles.wNum} ${styles.redText}`}>Type</div>
                        <div className={`${styles.wNum} ${styles.redText}`}>Section</div>
                    </div>
                </div>
            </div>

        </div>
    );
};