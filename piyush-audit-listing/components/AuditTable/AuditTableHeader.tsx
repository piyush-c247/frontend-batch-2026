"use client";

import styles from "./AuditTable.module.scss";
import { W_CATEGORY, W_SECTION, W_NUM } from "./constants";

export const AuditTableHeader = () => {
    return (
        <div className={styles.mainHeaderContainer}>

            {/* OVERVIEW */}
            <div className={styles.headerGroup} style={{ width: W_CATEGORY + W_SECTION + W_NUM }}>
                <div className={styles.topLabel}>Overview</div>
                <div className={styles.bottomLabels}>
                    <div style={{ width: W_CATEGORY }}>Category</div>
                    <div style={{ width: W_SECTION }}>Section</div>
                    <div style={{ width: W_NUM }}>Questions</div>
                </div>
            </div>

            {/* SCORING */}
            <div className={styles.headerGroup} style={{ width: (W_NUM * 7) + 8 }}>
                <div className={styles.topLabel}>Scoring</div>

                <div className={styles.scoringSubGrid}>
                    <div className={styles.subHeaderRow}>
                        <div style={{ width: W_NUM * 2 }}>Completion %</div>
                        <div style={{ width: W_NUM }}>Type Total</div>
                        <div style={{ width: W_NUM }}>% of Total</div>
                        <div style={{ width: W_NUM }}>Section Total</div>
                        <div style={{ width: 8 }}></div>
                        <div style={{ width: W_NUM * 2 }}></div>
                    </div>

                    <div className={styles.bottomLabels}>
                        <div style={{ width: W_NUM }} className={styles.redText}>Questions</div>
                        <div style={{ width: W_NUM }} className={styles.redText}>Weight</div>
                        <div style={{ width: W_NUM }}></div>
                        <div style={{ width: W_NUM }}></div>
                        <div style={{ width: W_NUM }}></div>
                        <div style={{ width: 8 }}></div>
                        <div style={{ width: W_NUM }}>Weight</div>
                        <div style={{ width: W_NUM }}>Total Score</div>
                    </div>
                </div>
            </div>

            {/* ADJUSTED */}
            <div className={styles.headerGroup} style={{ width: (W_NUM * 4) + 8 }}>
                <div className={styles.topLabel}>Adjusted</div>

                <div className={styles.adjustedSubGrid}>
                    <div className={styles.subHeaderRow}>
                        <div style={{ width: W_NUM * 2 }}>Weight</div>
                        <div style={{ width: W_NUM * 2 }}>Score</div>
                    </div>

                    <div className={styles.bottomLabels}>
                        <div style={{ width: W_NUM }} className={styles.redText}>Type</div>
                        <div style={{ width: W_NUM }} className={styles.redText}>Section</div>
                        <div style={{ width: W_NUM }} className={styles.redText}>Type</div>
                        <div style={{ width: W_NUM }} className={styles.redText}>Section</div>
                    </div>
                </div>
            </div>

        </div>
    );
};