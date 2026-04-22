'use client';

import { ReactNode } from 'react';
import { Table } from 'react-bootstrap';
import {
  FaPlus,
  FaChartBar,
  FaAddressBook,
  FaMapMarkerAlt,
  FaEdit,
  FaTrash,
} from 'react-icons/fa';

import { Column } from './types';
import styles from './DataTable.module.scss';

interface DataTableProps<RowData> {
  title: string;
  buttonText?: string;
  onAdd?: () => void;

  columns: Column<RowData>[];
  data: RowData[];

  onRate?: (row: RowData) => void;
  onContacts?: (row: RowData) => void;
  onLocations?: (row: RowData) => void;
  onEdit?: (row: RowData) => void;
  onDelete?: (row: RowData) => void;
}

export default function DataTable<RowData>({
  title,
  buttonText,
  onAdd,
  columns,
  data,
  onRate,
  onContacts,
  onLocations,
  onEdit,
  onDelete,
}: DataTableProps<RowData>) {
  const hasActions =
    !!onRate || !!onContacts || !!onLocations || !!onEdit || !!onDelete;

  /* ---------- Handlers ---------- */

  const handleAdd = () => onAdd?.();

  const handleRate = (row: RowData) => () => onRate?.(row);
  const handleContacts = (row: RowData) => () => onContacts?.(row);
  const handleLocations = (row: RowData) => () => onLocations?.(row);
  const handleEdit = (row: RowData) => () => onEdit?.(row);
  const handleDelete = (row: RowData) => () => onDelete?.(row);

  /* ---------- Render ---------- */

  const renderHeader = () => {
    if (!buttonText || !onAdd) {
      return (
        <div className={styles.header}>
          <h3>{title}</h3>
        </div>
      );
    }

    return (
      <div className={styles.header}>
        <h3>{title}</h3>

        <button className={styles.addBtn} onClick={handleAdd}>
          <span>{buttonText}</span>
          <FaPlus />
        </button>
      </div>
    );
  };

  const renderHead = () => {
    return (
      <thead>
        <tr>
          {columns.map(renderColumnHead)}
          {hasActions && <th>Actions</th>}
        </tr>
      </thead>
    );
  };

  const renderColumnHead = (col: Column<RowData>) => {
    return <th key={String(col.key)}>{col.label}</th>;
  };

  const renderBody = () => {
    if (!data.length) return renderEmpty();
    return <tbody>{data.map(renderRow)}</tbody>;
  };

  const renderEmpty = () => {
    return (
      <tbody>
        <tr>
          <td colSpan={columns.length + 1} className={styles.empty}>
            No Data Available
          </td>
        </tr>
      </tbody>
    );
  };

  const renderRow = (row: RowData, index: number) => {
    return (
      <tr key={index}>
        {columns.map((col) => renderCell(col, row))}
        {hasActions && renderActions(row)}
      </tr>
    );
  };

  const renderCell = (col: Column<RowData>, row: RowData) => {
    const value = row[col.key];

    const content = col.render
      ? col.render(value, row)
      : (value as ReactNode);

    return <td key={String(col.key)}>{content}</td>;
  };

  const renderActions = (row: RowData) => {
    return (
      <td>
        <div className={styles.actions}>
          {onRate && renderRateButton(row)}
          {onContacts && renderContactsButton(row)}
          {onLocations && renderLocationsButton(row)}
          {onEdit && renderEditButton(row)}
          {onDelete && renderDeleteButton(row)}
        </div>
      </td>
    );
  };

  /* ---------- Action Buttons ---------- */

  const renderRateButton = (row: RowData) => {
    return (
      <button
        className={`${styles.actionBtn} ${styles.rate}`}
        onClick={handleRate(row)}
      >
        <FaChartBar />
      </button>
    );
  };

  const renderContactsButton = (row: RowData) => {
    return (
      <button
        className={`${styles.actionBtn} ${styles.contacts}`}
        onClick={handleContacts(row)}
      >
        <FaAddressBook />
      </button>
    );
  };

  const renderLocationsButton = (row: RowData) => {
    return (
      <button
        className={`${styles.actionBtn} ${styles.locations}`}
        onClick={handleLocations(row)}
      >
        <FaMapMarkerAlt />
      </button>
    );
  };

  const renderEditButton = (row: RowData) => {
    return (
      <button
        className={`${styles.actionBtn} ${styles.edit}`}
        onClick={handleEdit(row)}
      >
        <FaEdit />
      </button>
    );
  };

  const renderDeleteButton = (row: RowData) => {
    return (
      <button
        className={`${styles.actionBtn} ${styles.delete}`}
        onClick={handleDelete(row)}
      >
        <FaTrash />
      </button>
    );
  };

  return (
    <div className={styles.container}>
      {renderHeader()}

      <Table
        striped
        hover
        responsive
        className={styles.table}
      >
        {renderHead()}
        {renderBody()}
      </Table>
    </div>
  );
}