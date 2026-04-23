import {
  RegisterOptions,
  FieldValues,
  Path,
} from 'react-hook-form';

export type FieldType = 'text' | 'select';

export interface FieldConfig<FormValues extends FieldValues> {
  name: Path<FormValues>;
  label: string;
  type: FieldType;
  required?: boolean;
  options?: { label: string; value: string }[];
  validation?: RegisterOptions<FormValues, Path<FormValues>>;
  tooltip?: string;
  uppercase?: boolean;
  placeholder?: string;   
  fullWidth?: boolean; 
  dependsOn?: Path<FormValues>;
}

export interface ImageField<FormValues extends FieldValues> {
  name: Path<FormValues>; 
  label: string;
}