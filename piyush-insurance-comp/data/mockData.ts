// data/mockData.ts

import { Company } from '@/types';

export const companyList: Company[] = [
  {
    id: 209,
    company_name: "HDFC Insurance #920222",
    am_code: "920222",
    ibc_code: null,
    naic_code: "322113213#",
    aiin_code: "##232q3232",
    fein_code: null,
    insurance_rate_data: null,
  },
  {
    id: 208,
    company_name: "Transport",
    am_code: "100075",
    ibc_code: "123",
    naic_code: "1234sa",
    aiin_code: "AA-1234567",
    fein_code: "123453435",
    insurance_rate_data: null,
  },
  {
    id: 207,
    company_name: "Paradise Insurance",
    am_code: "233223",
    ibc_code: "235",
    naic_code: "932929",
    aiin_code: "323232",
    fein_code: "326554645",
    insurance_rate_data: null,
  },
  {
    id: 206,
    company_name: "Chapter",
    am_code: "722277",
    ibc_code: null,
    naic_code: null,
    aiin_code: null,
    fein_code: null,
    insurance_rate_data: null,
  },
  {
    id: 205,
    company_name: "newpolicyinsurance",
    am_code: "123211",
    ibc_code: null,
    naic_code: null,
    aiin_code: null,
    fein_code: null,
    insurance_rate_data: {
      id: 2532,
      insurance_company_id: 205,
      current_rate_version: "2026-2",
    },
  },
];