'use client';

import DataTable from '@/components/common/DataTable';
import AppModal from '@/components/common/AddModal';
import DynamicForm from '@/components/common/DynamicForm';
import { COMPANY_IMAGE_FIELDS, COMPANY_LISTING_TEXT } from '@/components/CompanyListing/constants';
import { companyColumns } from '@/components/CompanyListing/companyColumns';
import { companyFields } from '@/components/CompanyListing/companyFields';
import { useCompanyListing } from './useCompanyListing';

import { CompanyFormValues } from '@/types/companyform';

export default function CompanyListing() {
  const {
    showModal,
    companies,
    handleAdd,
    handleCloseModal,
    handleSubmit,
    handleRate,
    handleContacts,
    handleLocations,
    handleEdit,
    handleDelete,
  } = useCompanyListing();

  return (
    <>
      <DataTable
        title={COMPANY_LISTING_TEXT.TITLE}
        buttonText="Add Insurance Company"
        onAdd={handleAdd}
        columns={companyColumns}
        data={companies}
        onRate={handleRate}
        onContacts={handleContacts}
        onLocations={handleLocations}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <AppModal
        show={showModal}
        title={COMPANY_LISTING_TEXT.BUTTON_TEXT}
        onClose={handleCloseModal}
      >
        <DynamicForm<CompanyFormValues>
          fields={companyFields}
          imageFields={COMPANY_IMAGE_FIELDS} 
          onSubmit={handleSubmit}
        />
      </AppModal>
    </>
  );
}