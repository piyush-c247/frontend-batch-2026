'use client';

import { useState } from 'react';

import DataTable from '@/components/common/DataTable';
import AppModal from '@/components/common/AddModal';
import DynamicForm from '@/components/common/DynamicForm';

import { companyList } from '@/data/mockData';
import { companyColumns } from '@/components/CompanyListing/companyColumns';

import { Company } from '@/types';
import { CompanyFormValues } from '@/types/companyform';

import { companyFields } from '@/components/CompanyListing/companyFields';

export default function CompanyListing() {
  /* ---------- State ---------- */

  const [showModal, setShowModal] = useState(false);

  /* ---------- Handlers ---------- */

  const handleAdd = () => setShowModal(true);

  const handleCloseModal = () => setShowModal(false);

  const handleSubmit = (data: CompanyFormValues) => {
    console.log('FORM DATA →', data);

    // save to IndexedDB
    // update table state

    handleCloseModal();
  };

  const handleRate = (row: Company) =>
    console.log('Open Rate Page', row);

  const handleContacts = (row: Company) =>
    console.log('Open Contacts Page', row);

  const handleLocations = (row: Company) =>
    console.log('Open Locations Page', row);

  const handleEdit = (row: Company) =>
    console.log('Open Edit Modal', row);

  const handleDelete = (row: Company) =>
    console.log('Open Delete Modal', row);

  /* ---------- Render ---------- */

  return (
    <>
      <DataTable
        title="Insurance Companies"
        buttonText="Add Insurance Company"
        onAdd={handleAdd}
        columns={companyColumns}
        data={companyList}
        onRate={handleRate}
        onContacts={handleContacts}
        onLocations={handleLocations}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {/* ---------- Modal ---------- */}

      <AppModal
        show={showModal}
        title="Add Insurance Company"
        onClose={handleCloseModal}
      >
        <DynamicForm<CompanyFormValues>
          fields={companyFields}
          imageFields={[
            {
              name: 'logo_web',
              label: 'Company Logo - Web (72 dpi)',
            },
            {
              name: 'logo_print',
              label: 'Company Logo - Print (300 dpi)',
            },
          ]}
          onSubmit={handleSubmit}
        />
      </AppModal>
    </>
  );
}