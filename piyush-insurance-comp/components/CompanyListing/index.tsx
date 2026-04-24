'use client';

import DataTable from '@/components/common/DataTable';
import AppModal from '@/components/common/AddModal';
import DynamicForm from '@/components/common/DynamicForm';

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
        title="Insurance Companies"
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
        title="Add Insurance Company"
        onClose={handleCloseModal}
      >
        <DynamicForm<CompanyFormValues>
          fields={companyFields}
          imageFields={[
            { name: 'logo_web', label: 'Company Logo - Web (72 dpi)' },
            { name: 'logo_print', label: 'Company Logo - Print (300 dpi)' },
          ]}
          onSubmit={handleSubmit}
        />
      </AppModal>
    </>
  );
}