import { ImageField } from '@/components/common/DynamicForm/types';
import { CompanyFormValues } from '@/types/companyform';

export const COMPANY_IMAGE_FIELDS: ImageField<CompanyFormValues>[] = [
  { name: 'logo_web',   label: 'Company Logo - Web (72 dpi)' },
  { name: 'logo_print', label: 'Company Logo - Print (300 dpi)' },
];

export const COMPANY_LISTING_TEXT = {
  TITLE: 'Insurance Companies',
  BUTTON_TEXT: 'Add Insurance Company',
};
