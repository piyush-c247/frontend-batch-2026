export interface SectionType {
  question_type: string;
  total_question: number;
  completed_question_percentage: number;
  completion_weight: number;
  type_total: number | string;
  total_percentage: number | string;
  adjustment_weight_type?: number;
  adjustment_score_type?: number;
}

export interface Section {
  section: string;
  section_type: SectionType[];
  section_total: number;
  section_weight: string | number;
  section_total_score: number;
  adjustment_weight_section?: number;
  adjustment_score_section?: number;
}

export interface BonusSection extends Section {
  section: "bonus";
}

export interface AuditData {
  data: Section[];
  bonus: BonusSection;
  sections_total: {
    all_score_total: number;
    adjustment_weight_section_total: number;
    adjustment_score_section_total: number;
  };
  overall_safety_score_total: number;
  audit_status: string;
  is_locked: number;
  locked_by_has_role_id: number | null;
  locked_in_user: string | null;
}