"use client";

import styles from "./AuditTable.module.scss";
import { AUDIT_TABLE_HEADER } from "./constants";

export const AuditTableHeader = () => {
    return (
        <div className={styles.mainHeaderContainer}>

            {/* OVERVIEW */}
            <div className={`${styles.headerGroup} ${styles.headerOverview}`}>
                <div className={styles.topLabel}>{AUDIT_TABLE_HEADER.OVERVIEW}</div>
                <div className={styles.bottomLabels}>
                    <div className={styles.wCat}>{AUDIT_TABLE_HEADER.OVERVIEW_COLUMNS.CATEGORY}</div>
                    <div className={styles.wSection}>{AUDIT_TABLE_HEADER.OVERVIEW_COLUMNS.SECTION}</div>
                    <div className={styles.wNum}>{AUDIT_TABLE_HEADER.OVERVIEW_COLUMNS.QUESTIONS}</div>
                </div>
            </div>

            {/* SCORING */}
            <div className={`${styles.headerGroup} ${styles.headerScoring}`}>
                <div className={styles.topLabel}>{AUDIT_TABLE_HEADER.SCORING}</div>

                <div className={styles.scoringSubGrid}>
                    <div className={styles.subHeaderRow}>
                        <div className={styles.wNum2}>{AUDIT_TABLE_HEADER.SCORING_COLUMNS.COMPLETION}</div>
                        <div className={styles.wNum}>{AUDIT_TABLE_HEADER.SCORING_COLUMNS.TYPE_TOTAL}</div>
                        <div className={styles.wNum}>{AUDIT_TABLE_HEADER.SCORING_COLUMNS.PERCENT_TOTAL}</div>
                        <div className={styles.wNum}>{AUDIT_TABLE_HEADER.SCORING_COLUMNS.SECTION_TOTAL}</div>
                        <div className={styles.wGap}></div>
                        <div className={styles.wNum}>{AUDIT_TABLE_HEADER.SCORING_COLUMNS.WEIGHT}</div>
                        <div className={styles.wNum}>{AUDIT_TABLE_HEADER.SCORING_COLUMNS.TOTAL_SCORE}</div>
                    </div>

                    <div className={styles.bottomLabels}>
                        <div className={`${styles.wNum} ${styles.redText}`}>
                            {AUDIT_TABLE_HEADER.SCORING_SUB.QUESTIONS}
                        </div>
                        <div className={`${styles.wNum} ${styles.redText}`}>
                            {AUDIT_TABLE_HEADER.SCORING_SUB.WEIGHT}
                        </div>
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
                <div className={styles.topLabel}>{AUDIT_TABLE_HEADER.ADJUSTED}</div>

                <div className={styles.adjustedSubGrid}>
                    <div className={styles.subHeaderRow}>
                        <div className={styles.wNum2}>{AUDIT_TABLE_HEADER.ADJUSTED_COLUMNS.WEIGHT}</div>
                        <div className={styles.wNum2}>{AUDIT_TABLE_HEADER.ADJUSTED_COLUMNS.SCORE}</div>
                    </div>

                    <div className={styles.bottomLabels}>
                        <div className={`${styles.wNum} ${styles.redText}`}>
                            {AUDIT_TABLE_HEADER.ADJUSTED_SUB.TYPE}
                        </div>
                        <div className={`${styles.wNum} ${styles.redText}`}>
                            {AUDIT_TABLE_HEADER.ADJUSTED_SUB.SECTION}
                        </div>
                        <div className={`${styles.wNum} ${styles.redText}`}>
                            {AUDIT_TABLE_HEADER.ADJUSTED_SUB.TYPE}
                        </div>
                        <div className={`${styles.wNum} ${styles.redText}`}>
                            {AUDIT_TABLE_HEADER.ADJUSTED_SUB.SECTION}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};