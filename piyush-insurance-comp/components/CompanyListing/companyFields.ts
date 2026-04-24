// components/CompanyListing/companyFields.ts

import { FieldConfig } from "@/components/common/DynamicForm/types";
import { CompanyFormValues } from "@/types/companyform";

import { validations } from "@/utils/validation";
import { fieldTooltips } from "@/data/tooltips";
import { countryOptions } from "@/data/location";
import { amBestRatingOptions } from "@/data/amBestRatings";

export const companyFields: FieldConfig<CompanyFormValues>[] = [
  /* Row 1 */
  {
    name: "company_name",
    label: "Company Name",
    type: "text",
    required: true,
    validation: validations.company_name,
  },
  {
    name: "location_name",
    label: "Location Name",
    type: "text",
    required: true,
    validation: validations.location_name,
    tooltip: fieldTooltips.location_name,
  },

  /* Row 2 */
  {
    name: "address_1",
    label: "Address 1",
    type: "text",
    required: true,
    validation: validations.address_1,
  },
  {
    name: "address_2",
    label: "Address 2",
    type: "text",
  },

  /* Row 3 */
  {
    name: "country",
    label: "Country",
    type: "select",
    required: true,
    options: countryOptions,
    placeholder: "Select Country",
    validation: { required: "Country is required" },
  },
  {
    name: "state",
    label: "Province / State",
    type: "select",
    required: true,
    dependsOn: "country",
    placeholder: "Select Province/State",
    validation: { required: "State is required" },
  },

  /* Row 4 */
  {
    name: "city",
    label: "City",
    type: "text",
    required: true,
    validation: validations.city,
  },
  {
    name: "postal_code",
    label: "Postal / Zip Code",
    type: "text",
    required: true,
    validation: validations.postal_code,
  },

  /* Row 5 */
  {
    name: "am_best_code",
    label: "AM Best Code",
    type: "text",
    required: true,
    validation: validations.am_best_code,
    tooltip: fieldTooltips.am_best_code,
    uppercase: true,
  },
  {
    name: "am_best_profile_link",
    label: "AM Best Profile Link",
    type: "text",
  },

  /* Row 6 */
  {
    name: "ibc_code",
    label: "IBC Code",
    type: "text",
    validation: validations.ibc_code,
    tooltip: fieldTooltips.ibc_code,
    uppercase: true,
  },
  {
    name: "fein_code",
    label: "FEIN / EIN Code",
    type: "text",
    validation: validations.fein_code,
    tooltip: fieldTooltips.fein_code,
    uppercase: true,
  },

  /* Row 7 */
  {
    name: "naic_code",
    label: "NAIC Code",
    type: "text",
    validation: validations.naic_code,
    tooltip: fieldTooltips.naic_code,
    uppercase: true,
  },
  {
    name: "company_profile_link",
    label: "Company Profile Link",
    type: "text",
  },

  /* Row 8 */
  {
    name: "aiin_code",
    label: "AIIN Code",
    type: "text",
    validation: validations.aiin_code,
    tooltip: fieldTooltips.aiin_code,
    uppercase: true,
  },
  {
    name: "aiin_profile_link",
    label: "AIIN Profile Link",
    type: "text",
  },

  /* Row 9 — full width */
  {
    name: "am_best_rating",
    label: "AM Best Rating",
    type: "select",
    required: true,
    options: amBestRatingOptions,
    placeholder: "Select AM Best Rating",
    validation: validations.am_best_rating,
    fullWidth: true, // ← spans both columns
  },
];
