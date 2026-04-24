'use client';

import DataTable from '@/components/common/DataTable';
import AppModal from '@/components/common/AddModal';
import ConfirmModal from '@/components/common/ConfirmModal';
import DynamicForm from '@/components/common/DynamicForm';

import { companyColumns } from '@/components/CompanyListing/companyColumns';
import { companyFields } from '@/components/CompanyListing/companyFields';
import { COMPANY_IMAGE_FIELDS } from '@/components/CompanyListing/constants';

import { useCompanyListing } from './useCompanyListing';
import { CompanyFormValues } from '@/types/companyform';

export default function CompanyListing() {
  const {
    showFormModal,
    showConfirmModal,
    companies,
    companyToDelete,
    formMode,
    defaultValues,

    handleAdd,
    handleCloseFormModal,
    handleSubmit,
    handleEdit,
    handleDelete,
    handleConfirmDelete,
    handleCancelDelete,
    handleRate,
    handleContacts,
    handleLocations,
  } = useCompanyListing();

  return (
    <>
      {/* Table */}
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

      {/* Add / Edit Modal */}
      <AppModal
        show={showFormModal}
        title={
          formMode === 'edit'
            ? 'Edit Insurance Company'
            : 'Add Insurance Company'
        }
        onClose={handleCloseFormModal}
      >
        <DynamicForm<CompanyFormValues>
          fields={companyFields}
          imageFields={COMPANY_IMAGE_FIELDS}
          onSubmit={handleSubmit}
          mode={formMode}
          defaultValues={defaultValues}
        />
      </AppModal>

      {/* Delete Confirm Modal */}
      <ConfirmModal
        show={showConfirmModal}
        companyName={companyToDelete?.company_name ?? ''}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />
    </>
  );
}