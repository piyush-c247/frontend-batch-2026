"use client";

import styles from "./AuditTable.module.scss";
import { formatNumber, formatPercent } from "@/utils/format";
import { Section } from "@/types/auditTable";
import { AUDIT_TABLE } from "./constants";
import { ReactNode } from "react";

export const AuditTableBody = ({
    section,
    isBonus = false,
}: {
    section: Section;
    isBonus?: boolean;
}) => {
    const rows = section.section_type;
    const rowCount = rows.length;

    const getRowClass = (i: number) =>
        i % 2 !== 0 ? styles.striped : styles.plain;

    const cell = (content: ReactNode, className = styles.numCell) => (
        <td className={className}>{content}</td>
    );

    const rowSpanCell = (
        content: ReactNode,
        span = rowCount,
        colSpan?: number
    ) => (
        <td rowSpan={span} colSpan={colSpan} className={styles.numCell}>
            {content}
        </td>
    );

    return (
        <div className={styles.categoryRow}>

            {/* TABLE 1 */}
            <table className={`${styles.miniTable} ${styles.table1}`}>
                <colgroup>
                    <col className={styles.colCategory} />
                    <col className={styles.colSection} />
                    <col className={styles.colNum} />
                </colgroup>
                <tbody>
                    {rows.map((row, i) => (
                        <tr key={i} className={getRowClass(i)}>
                            {i === 0 && (
                                <td rowSpan={rowCount} className={styles.category}>
                                    {section.section}
                                </td>
                            )}
                            <td className={styles.sectionCell}>{row.question_type}</td>
                            {cell(formatNumber(row.total_question))}
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* TABLE 2 */}
            <table className={`${styles.miniTable} ${styles.table2}`}>
                <tbody>
                    {rows.map((row, i) => (
                        <tr key={i} className={getRowClass(i)}>
                            {cell(formatPercent(row.completed_question_percentage), `${styles.numCell} ${styles.redCol}`)}
                            {cell(formatPercent(row.completion_weight), `${styles.numCell} ${styles.redCol}`)}
                            {cell(formatNumber(row.type_total))}
                            {cell(
                                isBonus
                                    ? AUDIT_TABLE.NA
                                    : formatPercent(row.total_percentage)
                            )}
                            {i === 0 &&
                                rowSpanCell(formatNumber(section.section_total))}
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* TABLE 3 */}
            <table className={`${styles.miniTable} ${styles.table3}`}>
                <tbody>
                    {rows.map((_, i) => (
                        <tr key={i} className={getRowClass(i)}>
                            {i === 0 && (
                                <>
                                    {rowSpanCell(formatPercent(section.section_weight))}
                                    {rowSpanCell(formatNumber(section.section_total_score))}
                                </>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* TABLE 4 */}
            <table
                className={`${styles.miniTable} ${styles.table3} ${
                    isBonus ? styles.emptyTable : ""
                }`}
            >
                <tbody>
                    {rows.map((row, i) => (
                        <tr key={i} className={getRowClass(i)}>
                            {cell(
                                isBonus ? "" : formatNumber(row.adjustment_weight_type)
                            )}
                            {i === 0 &&
                                rowSpanCell(
                                    isBonus
                                        ? ""
                                        : formatNumber(section.adjustment_weight_section)
                                )}
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* TABLE 5 */}
            <table className={`${styles.miniTable} ${styles.table3}`}>
                <tbody>
                    {rows.map((row, i) => (
                        <tr key={i} className={getRowClass(i)}>
                            {!isBonus &&
                                cell(formatNumber(row.adjustment_score_type))}

                            {i === 0 &&
                                rowSpanCell(
                                    formatNumber(section.adjustment_score_section), 
                                    rowCount,
                                    isBonus ? 2 : 1
                                )}
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
};