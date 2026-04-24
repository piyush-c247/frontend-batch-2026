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
    selectedCompany,
    companyToDelete,
    formMode,
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
        title={formMode === 'edit' ? 'Edit Insurance Company' : 'Add Insurance Company'}
        onClose={handleCloseFormModal}
      >
        <DynamicForm<CompanyFormValues>
          fields={companyFields}
          imageFields={COMPANY_IMAGE_FIELDS}
          onSubmit={handleSubmit}
          mode={formMode}
          defaultValues={
            selectedCompany
              ? {
                company_name: selectedCompany.company_name,
                location_name: selectedCompany.location_name,
                address_1: selectedCompany.address_1,
                address_2: selectedCompany.address_2 ?? '',
                country: selectedCompany.country,
                state: selectedCompany.state,
                city: selectedCompany.city,
                postal_code: selectedCompany.postal_code,
                am_best_code: selectedCompany.am_code,
                am_best_rating: selectedCompany.am_best_rating,
                am_best_profile_link: selectedCompany.am_best_profile_link ?? '',
                ibc_code: selectedCompany.ibc_code ?? '',
                fein_code: selectedCompany.fein_code ?? '',
                naic_code: selectedCompany.naic_code ?? '',
                company_profile_link: selectedCompany.company_profile_link ?? '',
                aiin_code: selectedCompany.aiin_code ?? '',
                aiin_profile_link: selectedCompany.aiin_profile_link ?? '',
              }
              : undefined
          }
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