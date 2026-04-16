'use client';

import DataTable from '@/components/common/DataTable';
import { companyList } from '@/data/mockData';
import { companyColumns } from '@/components/CompanyListing/companyColumns';
import { Company } from '@/types';

export default function CompanyListing() {
  const handleAdd = () => console.log('Add Company');

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

  return (
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
  );
}