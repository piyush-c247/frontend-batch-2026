import { Company } from "@/types";
import { Column } from "@/components/common/DataTable/types";

export const companyColumns: Column<Company>[] = [
  {
    key: "company_name",
    label: "Company Name",
  },
  {
    key: "am_code",
    label: "AM Code",
  },
  {
    key: "ibc_code",
    label: "IBC Code",
    render: (value) => (value ?? "-") as string,
  },
  {
    key: "naic_code",
    label: "NAIC Code",
    render: (value) => (value ?? "-") as string,
  },

  {
    key: "fein_code",
    label: "FEIN Code",
    render: (value) => (value ?? "-") as string,
  },
  {
    key: "insurance_rate_data",
    label: "Rate Version",
    render: (value) => {
      const rateData = value as Company["insurance_rate_data"];
      return rateData?.current_rate_version ?? "-";
    },
  },
];
