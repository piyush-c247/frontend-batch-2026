export interface CompanyFormValues {
  company_name: string;
  location_name: string;
  address_1: string;
  address_2?: string;
  country: string;
  state: string;
  city: string;
  postal_code: string;

  am_best_code?: string;
  ibc_code?: string;
  fein_code?: string;
  naic_code?: string;
  aiin_code?: string;

  am_best_rating: string;

  logo_web?: File;
  logo_print?: File;

  logo?: File;
  secondary_logo?: File;
}