// types/index.ts

export type InsuranceRateData = {
  id: number;
  insurance_company_id: number;
  current_rate_version: string;
};

export type Company = {
  id: number;
  company_name: string;
  am_code: string;
  ibc_code: string | null;
  naic_code: string | null;
  aiin_code: string | null;
  fein_code: string | null;
  insurance_rate_data: InsuranceRateData | null;
};