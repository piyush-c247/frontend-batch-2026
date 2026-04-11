"use client";

import Table from "react-bootstrap/Table";
import styles from "./auditTable.module.scss";

import { auditData } from "@/data/mockData";
import { getAllSections } from "@/utils/normalizeData";
import { formatNumber, formatPercent } from "@/utils/format";

export const AuditTable = () => {
  const sections = getAllSections(auditData);

  return (
    <div className={styles.wrapper}>
      <Table className={styles.table}>
        <thead>
          <tr>
            <th rowSpan={3}>Category</th>
            <th rowSpan={3}>Section</th>
            <th rowSpan={3}>Questions</th>

            <th colSpan={6} className={styles.group}>
              SCORING
            </th>

            <th colSpan={4} className={styles.group}>
              ADJUSTED
            </th>
          </tr>

          <tr>
            <th colSpan={2}>Completion</th>
            <th colSpan={2}>Type Total</th>
            <th colSpan={3}>Section Total</th>

            <th colSpan={2}>Weight</th>
            <th colSpan={2}>Score</th>
          </tr>

          <tr>
            <th>%</th>
            <th>Weight</th>

            <th>Type Total</th>
            <th>% of Total</th>

            <th>Section Total</th>
            <th>Weight</th>
            <th>Total Score</th>

            <th>Type Weight</th>
            <th>Section Weight</th>

            <th>Type Score</th>
            <th>Section Score</th>
          </tr>
        </thead>

        <tbody>
          {sections.map((section) => {
            const isBonus = section.section === "bonus";

            return section.section_type.map((row, rowIndex) => {
              const isStriped = rowIndex % 2 === 0;

              return (
                <tr
                  key={`${section.section}-${rowIndex}`}
                  className={isStriped ? styles.striped : ""}
                >
                  {/* CATEGORY */}
                  {rowIndex === 0 && (
                    <td
                      rowSpan={section.section_type.length}
                      className={styles.category}
                    >
                      {section.section}
                    </td>
                  )}

                  {/* SECTION */}
                  <td className={styles.sectionCell}>
                    {row.question_type}
                  </td>

                  {/* QUESTIONS */}
                  <td>{formatNumber(row.total_question)}</td>

                  {/* SCORING */}
                  <td>
                    {formatPercent(row.completed_question_percentage)}
                  </td>
                  <td>{formatPercent(row.completion_weight)}</td>

                  <td>{formatNumber(row.type_total)}</td>
                  <td>{formatPercent(row.total_percentage)}</td>

                  {/* SECTION TOTAL */}
                  {rowIndex === 0 && (
                    <>
                      <td rowSpan={section.section_type.length}>
                        {formatNumber(section.section_total)}
                      </td>
                      <td rowSpan={section.section_type.length}>
                        {formatPercent(section.section_weight)}
                      </td>
                      <td rowSpan={section.section_type.length}>
                        {formatNumber(section.section_total_score)}
                      </td>
                    </>
                  )}

                  {/* ADJUSTED */}
                  <td>
                    {row.adjustment_weight_type !== undefined
                      ? formatNumber(row.adjustment_weight_type)
                      : "-"}
                  </td>

                  {rowIndex === 0 && (
                    <td rowSpan={section.section_type.length}>
                      {formatNumber(section.adjustment_weight_section)}
                    </td>
                  )}

                  <td>
                    {row.adjustment_score_type !== undefined
                      ? formatNumber(row.adjustment_score_type)
                      : "-"}
                  </td>

                  {/* ✅ FIXED SECTION SCORE */}
                  {rowIndex === 0 && (
                    <td rowSpan={section.section_type.length}>
                      {isBonus
                        ? formatNumber(section.adjustment_score_section)
                        : formatNumber(
                            (Number(section.adjustment_weight_section) /
                              100) *
                              Number(section.section_total_score)
                          )}
                    </td>
                  )}
                </tr>
              );
            });
          })}
        </tbody>

        <tfoot>
          <tr className={styles.footer}>
            <td colSpan={3}>Totals</td>
            <td colSpan={4}></td>

            <td>
              {formatNumber(
                auditData.sections_total.all_score_total
              )}
            </td>

            <td>
              {formatPercent(
                auditData.sections_total
                  .adjustment_weight_section_total
              )}
            </td>

            {/* ✅ FIXED TOTAL SCORE */}
            <td>
              {formatNumber(
                (auditData.sections_total
                  .adjustment_weight_section_total /
                  100) *
                  auditData.sections_total.all_score_total
              )}
            </td>

            <td colSpan={3}></td>
          </tr>

          <tr className={styles.finalScore}>
            <td colSpan={12}>Overall Safety Score</td>
            <td>
              {formatNumber(
                auditData.overall_safety_score_total
              )}
            </td>
          </tr>
        </tfoot>
      </Table>
    </div>
  );
};