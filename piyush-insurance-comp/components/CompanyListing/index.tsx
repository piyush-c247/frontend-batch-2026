'use client';

import { useState, useEffect } from 'react';

import DataTable from '@/components/common/DataTable';
import AppModal from '@/components/common/AddModal';
import DynamicForm from '@/components/common/DynamicForm';

import { companyColumns } from '@/components/CompanyListing/companyColumns';
import { companyFields } from '@/components/CompanyListing/companyFields';
import { addCompanyToDB, getAllCompanies } from '@/utils/indexedDB';

import { Company } from '@/types';
import { CompanyFormValues } from '@/types/companyform';
import { companyList } from '@/data/mockData';

export default function CompanyListing() {

  /* ---------- State ---------- */

  const [showModal, setShowModal] = useState(false);
  const [companies, setCompanies] = useState<Company[]>(companyList);  



 useEffect(() => {
  const loadCompanies = async () => {
    try {
      const dbCompanies = await getAllCompanies();

      setCompanies((prev) => [...dbCompanies, ...prev]);
      // DB data first (new), mock below
    } catch (err) {
      console.error(err);
    }
  };

  loadCompanies();
}, []);

  /* ---------- Map form values → Company shape ---------- */

  const mapFormToCompany = (data: CompanyFormValues): Omit<Company, 'id'> => ({
    company_name: data.company_name,
    am_code: data.am_best_code ?? '',
    ibc_code: data.ibc_code ?? null,
    naic_code: data.naic_code ?? null,
    aiin_code: data.aiin_code ?? null,
    fein_code: data.fein_code ?? null,
    insurance_rate_data: null,
  });

  /* ---------- Handlers ---------- */

  const handleAdd = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleSubmit = async (data: CompanyFormValues) => {
    try {
      const newCompany = await addCompanyToDB(mapFormToCompany(data));
      setCompanies((prev) => [newCompany, ...prev]);   // ← prepend to table instantly
      handleCloseModal();
    } catch (err) {
      console.error('Failed to save company:', err);
    }
  };

  const handleRate = (row: Company) => console.log('Open Rate Page', row);
  const handleContacts = (row: Company) => console.log('Open Contacts Page', row);
  const handleLocations = (row: Company) => console.log('Open Locations Page', row);
  const handleEdit = (row: Company) => console.log('Open Edit Modal', row);
  const handleDelete = (row: Company) => console.log('Open Delete Modal', row);

  /* ---------- Render ---------- */

  return (
    <>
      <DataTable
        title="Insurance Companies"
        buttonText="Add Insurance Company"
        onAdd={handleAdd}
        columns={companyColumns}
        data={companies}                    // ← live state, not static mockData
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