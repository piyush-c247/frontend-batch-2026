"use client";

import styles from "./AuditTable.module.scss";
import { formatNumber, formatPercent } from "@/utils/format";
import { Section } from "@/types/auditTable";
import { W_CATEGORY, W_SECTION, W_NUM } from "./constants";

export const AuditTableBody = ({
    section,
    isBonus = false,
}: {
    section: Section;
    isBonus?: boolean;
}) => {
    const rowCount = section.section_type.length;

    return (
        <div className={styles.categoryRow}>

            {/* TABLE 1 */}
            <table className={styles.miniTable} style={{ width: W_CATEGORY + W_SECTION + W_NUM }}>
                <colgroup>
                    <col style={{ width: W_CATEGORY }} />
                    <col style={{ width: W_SECTION }} />
                    <col style={{ width: W_NUM }} />
                </colgroup>
                <tbody>
                    {section.section_type.map((row, i) => (
                        <tr key={i} className={i % 2 !== 0 ? styles.striped : styles.plain}>
                            {i === 0 && (
                                <td rowSpan={rowCount} className={styles.category}>
                                    {section.section}
                                </td>
                            )}
                            <td className={styles.sectionCell}>{row.question_type}</td>
                            <td className={styles.numCell}>{formatNumber(row.total_question)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* TABLE 2 */}
            <table className={styles.miniTable} data-cols="5" style={{ width: W_NUM * 5 }}>
                <tbody>
                    {section.section_type.map((row, i) => (
                        <tr key={i} className={i % 2 !== 0 ? styles.striped : styles.plain}>
                            <td className={`${styles.numCell} ${styles.redCol}`}>
                                {formatPercent(row.completed_question_percentage)}
                            </td>
                            <td className={`${styles.numCell} ${styles.redCol}`}>
                                {formatPercent(row.completion_weight)}
                            </td>
                            <td className={styles.numCell}>{formatNumber(row.type_total)}</td>
                            <td className={styles.numCell}>
                                {isBonus ? "N/A" : formatPercent(row.total_percentage)}
                            </td>
                            {i === 0 && (
                                <td rowSpan={rowCount} className={styles.numCell}>
                                    {formatNumber(section.section_total)}
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* TABLE 3 */}
            <table className={styles.miniTable} style={{ width: W_NUM * 2 }}>
                <tbody>
                    {section.section_type.map((_, i) => (
                        <tr key={i} className={i % 2 !== 0 ? styles.striped : styles.plain}>
                            {i === 0 && (
                                <>
                                    <td rowSpan={rowCount} className={styles.numCell}>
                                        {formatPercent(section.section_weight)}
                                    </td>
                                    <td rowSpan={rowCount} className={styles.numCell}>
                                        {formatNumber(section.section_total_score)}
                                    </td>
                                </>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* TABLE 4 */}
            <table className={styles.miniTable} style={{ width: W_NUM * 2 }}>
                <tbody>
                    {section.section_type.map((row, i) => (
                        <tr key={i} className={i % 2 !== 0 ? styles.striped : styles.plain}>
                            <td className={styles.numCell}>
                                {formatNumber(row.adjustment_weight_type)}
                            </td>
                            {i === 0 && (
                                <td rowSpan={rowCount} className={styles.numCell}>
                                    {formatNumber(section.adjustment_weight_section)}
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* TABLE 5 */}
            <table className={styles.miniTable} style={{ width: W_NUM * 2 }}>
                <tbody>
                    {section.section_type.map((row, i) => (
                        <tr key={i} className={i % 2 !== 0 ? styles.striped : styles.plain}>
                            <td className={styles.numCell}>
                                {formatNumber(row.adjustment_score_type)}
                            </td>
                            {i === 0 && (
                                <td rowSpan={rowCount} className={styles.numCell}>
                                    {isBonus
                                        ? formatNumber(section.adjustment_score_section)
                                        : formatNumber(
                                            (Number(section.adjustment_weight_section) / 100) *
                                            Number(section.section_total_score)
                                        )}
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
};