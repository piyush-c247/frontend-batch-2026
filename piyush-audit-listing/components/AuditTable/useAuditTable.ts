import { auditData } from "@/data/mockData";
import { getAllSections } from "@/utils/normalizeData";
import { formatNumber, formatPercent } from "@/utils/format";
import { AUDIT_TABLE_FOOTER } from "./constants";

export const useAuditTable = () => {
  const sections = getAllSections(auditData);

  const mainSections = sections.filter(
    (sec) => sec.section !== AUDIT_TABLE_FOOTER.BONUS_KEY
  );

  const bonusSection = sections.find(
    (sec) => sec.section === AUDIT_TABLE_FOOTER.BONUS_KEY
  );

  const totalScore = formatNumber(
    auditData.sections_total.all_score_total
  );

  const totalWeight = formatPercent(
    auditData.sections_total.adjustment_weight_section_total
  );

  const totalAdjusted = formatNumber(
    (auditData.sections_total.adjustment_weight_section_total / 100) *
      auditData.sections_total.all_score_total
  );

  const overallSafetyScore = formatNumber(
    auditData.overall_safety_score_total
  );

  return {
    mainSections,
    bonusSection,
    totalScore,
    totalWeight,
    totalAdjusted,
    overallSafetyScore,
  };
};