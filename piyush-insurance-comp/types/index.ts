// types/index.ts

export type InsuranceRateData = {
  id: number;
  insurance_company_id: number;
  current_rate_version: string;
};

export type Company = {
  id: number;

  // Basic Info
  company_name: string;
  location_name: string;
  address_1: string;
  address_2?: string | null;
  country: string;
  state: string;
  city: string;
  postal_code: string;

  // Codes
  am_code: string;
  am_best_rating: string;
  am_best_profile_link?: string | null;
  ibc_code?: string | null;
  fein_code?: string | null;
  naic_code?: string | null;
  company_profile_link?: string | null;
  aiin_code?: string | null;
  aiin_profile_link?: string | null;

  // Logos
  logo_web?: File | null;
  logo_print?: File | null;

  // Relations
  insurance_rate_data: InsuranceRateData | null;
};
