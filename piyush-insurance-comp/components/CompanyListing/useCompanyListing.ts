// components/CompanyListing/useCompanyListing.ts

import { useState, useEffect } from 'react';

import { addCompanyToDB, getAllCompanies } from '@/utils/indexedDB';

import { Company } from '@/types';
import { CompanyFormValues } from '@/types/companyform';
import { companyList } from '@/data/mockData';

export function useCompanyListing() {

  /* ---------- State ---------- */

  const [showModal, setShowModal] = useState(false);
  const [companies, setCompanies] = useState<Company[]>(companyList);

  /* ---------- Load from IndexedDB on mount ---------- */

  useEffect(() => {
    const loadCompanies = async () => {
      try {
        const dbCompanies = await getAllCompanies();
        setCompanies((prev) => [...dbCompanies, ...prev]);
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
    logo_web: data.logo_web ?? null,
    logo_print: data.logo_print ?? null,
  });

  /* ---------- Modal handlers ---------- */

  const handleAdd = () => setShowModal(true);

  const handleCloseModal = () => setShowModal(false);

  /* ---------- Form submit ---------- */

  const handleSubmit = async (data: CompanyFormValues) => {
    try {
      const newCompany = await addCompanyToDB(mapFormToCompany(data));
      setCompanies((prev) => [newCompany, ...prev]);
      handleCloseModal();
    } catch (err) {
      console.error('Failed to save company:', err);
    }
  };

  /* ---------- Row action handlers ---------- */

  const handleRate      = (row: Company) => console.log('Open Rate Page', row);
  const handleContacts  = (row: Company) => console.log('Open Contacts Page', row);
  const handleLocations = (row: Company) => console.log('Open Locations Page', row);
  const handleEdit      = (row: Company) => console.log('Open Edit Modal', row);
  const handleDelete    = (row: Company) => console.log('Open Delete Modal', row);

  /* ---------- Return ---------- */

  return {
    // state
    showModal,
    companies,

    // handlers
    handleAdd,
    handleCloseModal,
    handleSubmit,
    handleRate,
    handleContacts,
    handleLocations,
    handleEdit,
    handleDelete,
  };
}