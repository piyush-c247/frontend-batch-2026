"use client";

import Table from "react-bootstrap/Table";
import styles from "./auditTable.module.scss";

import { auditData } from "@/data/mockData";
import { getAllSections } from "@/utils/normalizeData";
import { formatNumber, formatPercent } from "@/utils/format";
import { Section } from "@/types/auditTable";

const COL_COUNT = 13;

const ColGroup = () => (
    <colgroup>
        <col className={styles.colCategory} />
        <col className={styles.colSection} />
        <col className={styles.colNum} />
        <col className={styles.colNum} />
        <col className={styles.colNum} />
        <col className={styles.colNum} />
        <col className={styles.colNum} />
        <col className={styles.colNum} />
        <col className={styles.colNum} />
        <col className={styles.colNum} />
        <col className={styles.colNum} />
        <col className={styles.colNum} />
        <col className={styles.colNum} />
    </colgroup>
);

const CategoryTable = ({
    section,
    isBonus = false,
}: {
    section: Section;
    isBonus?: boolean;
}) => (
    <Table className={styles.table} bordered>
        <ColGroup />
        <tbody>
            {section.section_type.map((row, rowIndex) => {
                const isFirstRow = rowIndex === 0;
                const isStriped = rowIndex % 2 !== 0;

                return (
                    <tr
                        key={`${section.section}-${rowIndex}`}
                        className={isStriped ? styles.striped : styles.plain}
                    >
                        {/* CATEGORY */}
                        {isFirstRow && (
                            <td
                                rowSpan={section.section_type.length}
                                className={styles.category}
                            >
                                {section.section}
                            </td>
                        )}

                        {/* SECTION NAME */}
                        <td className={styles.sectionCell}>{row.question_type}</td>

                        {/* QUESTIONS */}
                        <td className={styles.numCell}>
                            {formatNumber(row.total_question)}
                        </td>

                        {/* COMPLETION % — Questions */}
                        <td className={styles.numCell}>
                            {formatPercent(row.completed_question_percentage)}
                        </td>

                        {/* COMPLETION % — Weight */}
                        <td className={styles.numCell}>
                            {formatPercent(row.completion_weight)}
                        </td>

                        {/* TYPE TOTAL */}
                        <td className={styles.numCell}>
                            {formatNumber(row.type_total)}
                        </td>

                        {/* % OF TOTAL */}
                        <td className={styles.numCell}>
                            {isBonus ? "N/A" : formatPercent(row.total_percentage)}
                        </td>

                        {/* SECTION TOTAL — rowSpan */}
                        {isFirstRow && (
                            <td
                                rowSpan={section.section_type.length}
                                className={`${styles.numCell} ${styles.sectionSpan}`}
                            >
                                {formatNumber(section.section_total)}
                            </td>
                        )}

                        {/* WEIGHT — rowSpan */}
                        {isFirstRow && (
                            <td
                                rowSpan={section.section_type.length}
                                className={`${styles.numCell} ${styles.sectionSpan}`}
                            >
                                {formatPercent(section.section_weight)}
                            </td>
                        )}

                        {/* TOTAL SCORE — rowSpan */}
                        {isFirstRow && (
                            <td
                                rowSpan={section.section_type.length}
                                className={`${styles.numCell} ${styles.sectionSpan}`}
                            >
                                {formatNumber(section.section_total_score)}
                            </td>
                        )}

                        {/* ADJUSTED — Type Weight */}
                        <td className={styles.numCell}>
                            {formatNumber(row.adjustment_weight_type)}
                        </td>

                        {/* ADJUSTED — Section Weight — rowSpan */}
                        {isFirstRow && (
                            <td
                                rowSpan={section.section_type.length}
                                className={`${styles.numCell} ${styles.sectionSpan}`}
                            >
                                {formatNumber(section.adjustment_weight_section)}
                            </td>
                        )}

                        {/* ADJUSTED — Type Score */}
                        <td className={styles.numCell}>
                            {formatNumber(row.adjustment_score_type)}
                        </td>

                        {/* ADJUSTED — Section Score — rowSpan */}
                        {isFirstRow && (
                            <td
                                rowSpan={section.section_type.length}
                                className={`${styles.numCell} ${styles.sectionSpan}`}
                            >
                                {isBonus
                                    ? formatNumber(section.adjustment_score_section)
                                    : formatNumber(
                                        (Number(section.adjustment_weight_section) / 100) *
                                        Number(section.section_total_score)
                                    )}
                            </td>
                        )}
                    </tr>
                );
            })}
        </tbody>
    </Table>
);

export const AuditTable = () => {
    const sections = getAllSections(auditData);
    const mainSections = sections.filter((s) => s.section !== "bonus");
    const bonusSection = sections.find((s) => s.section === "bonus");

    const totalScore = formatNumber(auditData.sections_total.all_score_total);
    const totalWeight = formatPercent(
        auditData.sections_total.adjustment_weight_section_total
    );
    const totalAdjusted = formatNumber(
        (auditData.sections_total.adjustment_weight_section_total / 100) *
        auditData.sections_total.all_score_total
    );

    return (
        <div className={styles.outerWrapper}>

            {/* ── HEADER TABLE (column labels only, no data) ── */}
            <div className={styles.headerWrapper}>
                <Table className={styles.table} bordered>
                    <ColGroup />
                    <thead>
                        <tr>
                            <th rowSpan={3} className={styles.overviewHeader}>Category</th>
                            <th rowSpan={3} className={styles.overviewHeader}>Section</th>
                            <th rowSpan={3} className={styles.overviewHeader}>Questions</th>
                            <th colSpan={6} className={styles.groupHeader}>Scoring</th>
                            <th colSpan={4} className={styles.groupHeader}>Adjusted</th>
                        </tr>
                        <tr>
                            <th colSpan={2} className={styles.subGroupHeader}>Completion %</th>
                            <th rowSpan={2} className={styles.subHeader}>Type Total</th>
                            <th rowSpan={2} className={styles.subHeader}>% of Total</th>
                            <th rowSpan={2} className={styles.subHeader}>Section Total</th>
                            <th rowSpan={2} className={styles.subHeader}>Weight</th>
                            <th rowSpan={2} className={styles.subHeader}>Total Score</th>
                            <th colSpan={2} className={styles.subGroupHeader}>Weight</th>
                            <th colSpan={2} className={styles.subGroupHeader}>Score</th>
                        </tr>
                        <tr>
                            <th className={styles.redHeader}>Questions</th>
                            <th className={styles.redHeader}>Weight</th>
                            <th className={styles.subHeader}>Type</th>
                            <th className={styles.subHeader}>Section</th>
                            <th className={styles.subHeader}>Type</th>
                            <th className={styles.subHeader}>Section</th>
                        </tr>
                    </thead>
                </Table>
            </div>

            {/* ── ONE TABLE PER MAIN CATEGORY ── */}
            <div className={styles.categoriesWrapper}>
                {mainSections.map((section) => (
                    <div key={section.section} className={styles.categoryBlock}>
                        <CategoryTable section={section} isBonus={false} />
                    </div>
                ))}
            </div>

            {/* ── TOTALS BLOCK ── */}
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

            {/* ── BONUS TABLE ── */}
            {bonusSection && (
                <div className={styles.categoryBlock}>
                    <CategoryTable section={bonusSection} isBonus={true} />
                </div>
            )}

            {/* ── OVERALL SAFETY SCORE BAR ── */}
            <div className={styles.safetyScoreBar}>
                <span className={styles.safetyLabel}>Overall Safety Score :</span>
                <span className={styles.safetyValue}>
                    {formatNumber(auditData.overall_safety_score_total)}
                </span>
            </div>

        </div>
    );
};