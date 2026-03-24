export type FieldType =
  | 'yesNo'
  | 'frequency'
  | 'percentage'
  | 'text'
  | 'number';

export interface AnswerConfig {
  id: string;
  type: FieldType;
  helperText?: string;
  placeholder?: string;
}

export interface QuestionConfig {
  id: string;
  label: string;
  answers: AnswerConfig[];
}

export interface AccordionConfig {
  id: string;
  title: string;
  questions: QuestionConfig[];
}

export type AnswerValue = string | number;

export interface QuestionValue {
  answers: Record<string, AnswerValue>;
  comment: string;
}

export type FormValues = Record<string, QuestionValue>;