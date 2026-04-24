'use client';

import { useState, useEffect } from 'react';

import {
  addCompanyToDB,
  getAllCompanies,
  updateCompanyInDB,
  deleteCompanyFromDB,
} from '@/utils/indexedDB';

import { toastSuccess, toastError } from '@/utils/toast';

import { Company } from '@/types';
import { CompanyFormValues } from '@/types/companyform';
import { companyList } from '@/data/mockData';

export function useCompanyListing() {
  /* ---------- State ---------- */

  const [showFormModal, setShowFormModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [companies, setCompanies] = useState<Company[]>(companyList);
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [companyToDelete, setCompanyToDelete] = useState<Company | null>(null);
  const [formMode, setFormMode] = useState<'create' | 'edit'>('create');

  /* ---------- Load from IndexedDB ---------- */

  useEffect(() => {
    const load = async () => {
      try {
        const dbCompanies = await getAllCompanies();
        setCompanies((prev) => [...dbCompanies, ...prev]);
      } catch (err) {
        console.error(err);
      }
    };
    load();
  }, []);

  /* ---------- Mapping: Company → Form ---------- */

  const mapCompanyToForm = (company: Company): CompanyFormValues => ({
    company_name: company.company_name,
    location_name: company.location_name,
    address_1: company.address_1,
    address_2: company.address_2 ?? '',
    country: company.country,
    state: company.state,
    city: company.city,
    postal_code: company.postal_code,

    am_best_code: company.am_code,
    am_best_rating: company.am_best_rating,
    am_best_profile_link: company.am_best_profile_link ?? '',

    ibc_code: company.ibc_code ?? '',
    fein_code: company.fein_code ?? '',
    naic_code: company.naic_code ?? '',

    company_profile_link: company.company_profile_link ?? '',

    aiin_code: company.aiin_code ?? '',
    aiin_profile_link: company.aiin_profile_link ?? '',

    // file fields should not prefill
    logo_web: undefined,
    logo_print: undefined,
  });

  /* ---------- Mapping: Form → Company ---------- */

  const mapFormToCompany = (
    data: CompanyFormValues
  ): Omit<Company, 'id'> => ({
    company_name: data.company_name,
    location_name: data.location_name,
    address_1: data.address_1,
    address_2: data.address_2 ?? null,
    country: data.country,
    state: data.state,
    city: data.city,
    postal_code: data.postal_code,

    am_code: data.am_best_code ?? '',
    am_best_rating: data.am_best_rating,
    am_best_profile_link: data.am_best_profile_link ?? null,

    ibc_code: data.ibc_code ?? null,
    fein_code: data.fein_code ?? null,
    naic_code: data.naic_code ?? null,

    company_profile_link: data.company_profile_link ?? null,

    aiin_code: data.aiin_code ?? null,
    aiin_profile_link: data.aiin_profile_link ?? null,

    logo_web: data.logo_web ?? null,
    logo_print: data.logo_print ?? null,

    insurance_rate_data: null,
  });

  /* ---------- Derived ---------- */

  const defaultValues = selectedCompany
    ? mapCompanyToForm(selectedCompany)
    : undefined;

  /* ---------- Modal Handlers ---------- */

  const handleAdd = () => {
    setSelectedCompany(null);
    setFormMode('create');
    setShowFormModal(true);
  };

  const handleCloseFormModal = () => {
    setShowFormModal(false);
    setSelectedCompany(null);
  };

  /* ---------- Create ---------- */

  const handleCreate = async (data: CompanyFormValues) => {
    try {
      const newCompany = await addCompanyToDB(mapFormToCompany(data));
      setCompanies((prev) => [newCompany, ...prev]);

      toastSuccess.companyCreated();
      handleCloseFormModal();
    } catch {
      toastError.companyCreate();
    }
  };

  /* ---------- Edit ---------- */

  const handleEdit = (row: Company) => {
    setSelectedCompany(row);
    setFormMode('edit');
    setShowFormModal(true);
  };

  const handleUpdate = async (data: CompanyFormValues) => {
    if (!selectedCompany) return;

    try {
      const updated: Company = {
        ...mapFormToCompany(data),
        id: selectedCompany.id,
        insurance_rate_data: selectedCompany.insurance_rate_data,
      };

      await updateCompanyInDB(updated);

      setCompanies((prev) =>
        prev.map((c) => (c.id === updated.id ? updated : c))
      );

      toastSuccess.companyUpdated();
      handleCloseFormModal();
    } catch {
      toastError.companyUpdate();
    }
  };

  /* ---------- Submit Router ---------- */

  const handleSubmit = (data: CompanyFormValues) => {
    if (formMode === 'edit') return handleUpdate(data);
    return handleCreate(data);
  };

  /* ---------- Delete ---------- */

  const handleDelete = (row: Company) => {
    setCompanyToDelete(row);
    setShowConfirmModal(true);
  };

  const handleConfirmDelete = async () => {
    if (!companyToDelete) return;

    try {
      await deleteCompanyFromDB(companyToDelete.id);

      setCompanies((prev) =>
        prev.filter((c) => c.id !== companyToDelete.id)
      );

      toastSuccess.companyDeleted();
    } catch {
      toastError.companyDelete();
    } finally {
      setCompanyToDelete(null);
      setShowConfirmModal(false);
    }
  };

  const handleCancelDelete = () => {
    setCompanyToDelete(null);
    setShowConfirmModal(false);
  };

  /* ---------- Other Actions ---------- */

  const handleRate = (row: Company) =>
    console.log('Open Rate Page', row);

  const handleContacts = (row: Company) =>
    console.log('Open Contacts Page', row);

  const handleLocations = (row: Company) =>
    console.log('Open Locations Page', row);

  /* ---------- Return ---------- */

  return {
    // state
    showFormModal,
    showConfirmModal,
    companies,
    selectedCompany,
    companyToDelete,
    formMode,
    defaultValues,

    // handlers
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
  };
}