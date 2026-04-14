"use client";

import styles from "./AuditTable.module.scss";
import { AuditTableHeader } from "./AuditTableHeader";
import { AuditTableBody } from "./AuditTableBody";
import { AUDIT_TABLE_FOOTER } from "./constants";
import { useAuditTable } from "./useAuditTable";

export const AuditTable = () => {
    const {
        mainSections,
        bonusSection,
        totalScore,
        totalWeight,
        totalAdjusted,
        overallSafetyScore,
    } = useAuditTable();

    return (
        <div className={styles.outerWrapper}>

            {/* HEADER */}
            <AuditTableHeader />

            {/* MAIN CATEGORY ROWS */}
            <div className={styles.categoriesWrapper}>
                {mainSections.map((section) => (
                    <AuditTableBody
                        key={section.section}
                        section={section}
                        isBonus={false}
                    />
                ))}
            </div>

            {/* TOTALS */}
            <div className={styles.totalsBlock}>
                <div className={styles.totalsInner}>
                    <div className={styles.totalsTitleRow}>
                        {AUDIT_TABLE_FOOTER.TOTALS}
                    </div>
                    <div className={styles.totalsValuesRow}>
                        <span className={styles.totalsCell}>{totalScore}</span>
                        <span className={styles.totalsCell}>{totalWeight}</span>
                        <span className={styles.totalsCell}>{totalAdjusted}</span>
                    </div>
                </div>
            </div>

            {/* BONUS */}
            {bonusSection && (
                <div className={styles.categoriesWrapper}>
                    <AuditTableBody
                        section={bonusSection}
                        isBonus={true}
                    />
                </div>
            )}

            {/* SAFETY SCORE */}
            <div className={styles.safetyScoreBar}>
                <span className={styles.safetyLabel}>
                    {AUDIT_TABLE_FOOTER.OVERALL_SAFETY_SCORE}
                </span>
                <span className={styles.safetyValue}>
                    {overallSafetyScore}
                </span>
            </div>

        </div>
    );
};