import { FieldConfig } from '@/components/common/DynamicForm/types';
import { CompanyFormValues } from '@/types/companyform';

import { validations } from '@/utils/validation';
import { fieldTooltips } from '@/data/tooltips';
import { countryOptions } from '@/data/location';
import { amBestRatingOptions } from '@/data/amBestRatings';

export const companyFields: FieldConfig<CompanyFormValues>[] = [
  {
    name: 'company_name',
    label: 'Company Name',
    type: 'text',
    required: true,
    validation: validations.company_name,
  },
  {
    name: 'location_name',
    label: 'Location Name',
    type: 'text',
    required: true,
    validation: validations.location_name,
  },
  {
    name: 'address_1',
    label: 'Address',
    type: 'text',
    required: true,
    validation: validations.address_1,
  },
  {
    name: 'country',
    label: 'Country',
    type: 'select',
    required: true,
    options: countryOptions,
    validation: {
      required: 'Country is required',
    },
  },
  {
    name: 'state',
    label: 'Province / State',
    type: 'select',
    required: true,
    options: [], // ⚠️ will be filled dynamically
    validation: {
      required: 'State is required',
    },
  },
  {
    name: 'city',
    label: 'City',
    type: 'text',
    required: true,
    validation: validations.city,
  },
  {
    name: 'postal_code',
    label: 'Postal / Zip Code',
    type: 'text',
    required: true,
    validation: validations.postal_code,
  },

  /* ---------- Codes Section ---------- */

  {
    name: 'am_best_code',
    label: 'AM Best Code',
    type: 'text',
    validation: validations.am_best_code,
    tooltip: fieldTooltips.am_best_code,
    uppercase: true,
  },
  {
    name: 'am_best_rating',
    label: 'AM Best Rating',
    type: 'select',
    required: true,
    options: amBestRatingOptions,
    validation: validations.am_best_rating,
  },
  {
    name: 'ibc_code',
    label: 'IBC Code',
    type: 'text',
    validation: validations.ibc_code,
    tooltip: fieldTooltips.ibc_code,
    uppercase: true,
  },
  {
    name: 'fein_code',
    label: 'FEIN / CIN Code',
    type: 'text',
    validation: validations.fein_code,
    tooltip: fieldTooltips.fein_code,
    uppercase: true,
  },
  {
    name: 'naic_code',
    label: 'NAIC Code',
    type: 'text',
    validation: validations.naic_code,
    tooltip: fieldTooltips.naic_code,
    uppercase: true,
  },
  {
    name: 'aiin_code',
    label: 'AIIN Code',
    type: 'text',
    validation: validations.aiin_code,
    tooltip: fieldTooltips.aiin_code,
    uppercase: true,
  },
];