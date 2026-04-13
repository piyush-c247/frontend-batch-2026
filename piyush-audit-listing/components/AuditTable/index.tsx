"use client";

import styles from "./AuditTable.module.scss";
import { auditData } from "@/data/mockData";
import { getAllSections } from "@/utils/normalizeData";
import { formatNumber, formatPercent } from "@/utils/format";
import { AuditTableHeader } from "./AuditTableHeader";
import { AuditTableBody } from "./AuditTableBody";

export const AuditTable = () => {
    const sections = getAllSections(auditData);
    const mainSections = sections.filter((s) => s.section !== "bonus");
    const bonusSection = sections.find((s) => s.section === "bonus");

    const totalScore    = formatNumber(auditData.sections_total.all_score_total);
    const totalWeight   = formatPercent(auditData.sections_total.adjustment_weight_section_total);
    const totalAdjusted = formatNumber(
        (auditData.sections_total.adjustment_weight_section_total / 100) *
        auditData.sections_total.all_score_total
    );

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
                    <div className={styles.totalsTitleRow}>Totals</div>
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
                <span className={styles.safetyLabel}>Overall Safety Score :</span>
                <span className={styles.safetyValue}>
                    {formatNumber(auditData.overall_safety_score_total)}
                </span>
            </div>

        </div>
    );
};