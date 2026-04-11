"use client";

import styles from "./auditTable.module.scss";
import { auditData } from "@/data/mockData";
import { getAllSections } from "@/utils/normalizeData";
import { formatNumber, formatPercent } from "@/utils/format";
import { Section } from "@/types/auditTable";

/* ── Column width constants (keep in sync with SCSS) ── */
const W_CATEGORY = 100;
const W_SECTION  = 160;
const W_NUM      = 75;

const CategoryRow = ({
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
      <table className={styles.miniTable} style={{ width: W_NUM * 4 }}>
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
            </tr>
          ))}
        </tbody>
      </table>

      {/* TABLE 3 */}
      <table className={styles.miniTable} style={{ width: W_NUM * 3 }}>
        <tbody>
          {section.section_type.map((_, i) => (
            <tr key={i} className={i % 2 !== 0 ? styles.striped : styles.plain}>
              {i === 0 && (
                <>
                  <td rowSpan={rowCount} className={styles.numCell}>
                    {formatNumber(section.section_total)}
                  </td>
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

export const AuditTable = () => {
  const sections = getAllSections(auditData);
  const mainSections = sections.filter((s) => s.section !== "bonus");
  const bonusSection = sections.find((s) => s.section === "bonus");

  const totalScore   = formatNumber(auditData.sections_total.all_score_total);
  const totalWeight  = formatPercent(auditData.sections_total.adjustment_weight_section_total);
  const totalAdjusted = formatNumber(
    (auditData.sections_total.adjustment_weight_section_total / 100) *
      auditData.sections_total.all_score_total
  );

  return (
    <div className={styles.outerWrapper}>

      {/* ✅ NEW HEADER */}
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
              <div style={{ width: W_NUM * 5 }}></div>
            </div>

            <div className={styles.bottomLabels}>
              <div style={{ width: W_NUM }} className={styles.redText}>Questions</div>
              <div style={{ width: W_NUM }} className={styles.redText}>Weight</div>
              <div style={{ width: W_NUM }}>Type Total</div>
              <div style={{ width: W_NUM }}>% of Total</div>
              <div style={{ width: W_NUM }}>Section Total</div>
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

      {/* DATA ROWS */}
      <div className={styles.categoriesWrapper}>
        {mainSections.map((section) => (
          <CategoryRow key={section.section} section={section} isBonus={false} />
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
          <CategoryRow section={bonusSection} isBonus={true} />
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