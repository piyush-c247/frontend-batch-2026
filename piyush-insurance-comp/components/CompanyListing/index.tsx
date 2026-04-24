'use client';

import DataTable from '@/components/common/DataTable';
import AppModal from '@/components/common/AddModal';
import ConfirmModal from '@/components/common/ConfirmModal';
import DynamicForm from '@/components/common/DynamicForm';

import { companyColumns } from '@/components/CompanyListing/companyColumns';
import { companyFields } from '@/components/CompanyListing/companyFields';
import { COMPANY_IMAGE_FIELDS, COMPANY_LISTING_TEXT, COMPANY_SUBMIT_LABELS, MODAL_TITLE } from './constants';

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
      <DataTable
        title={COMPANY_LISTING_TEXT.TITLE}
        buttonText={COMPANY_LISTING_TEXT.BUTTON_TEXT}
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
        show={showFormModal}
        title={formMode === MODAL_TITLE.mode ? MODAL_TITLE.editTitle : MODAL_TITLE.addTitle}
        onClose={handleCloseFormModal}
      >
        <DynamicForm<CompanyFormValues>
          fields={companyFields}
          imageFields={COMPANY_IMAGE_FIELDS}
          onSubmit={handleSubmit}
          mode={formMode}
          submitLabel={COMPANY_SUBMIT_LABELS[formMode]}
          defaultValues={defaultValues}
        />
      </AppModal>

      <ConfirmModal
        show={showConfirmModal}
        companyName={companyToDelete?.company_name ?? ''}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />
    </>
  );
}
