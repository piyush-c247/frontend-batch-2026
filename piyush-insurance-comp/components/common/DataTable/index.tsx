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

export default function DataTable<RowData>(
  props: DataTableProps<RowData>
) {
  const {
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
  } = props;

  const hasActions =
    onRate || onContacts || onLocations || onEdit || onDelete;

  /* Handler */

  const handleAdd = () => onAdd && onAdd();
  const handleRate = (row: RowData) => onRate && onRate(row);
  const handleContacts = (row: RowData) =>
    onContacts && onContacts(row);
  const handleLocations = (row: RowData) =>
    onLocations && onLocations(row);
  const handleEdit = (row: RowData) => onEdit && onEdit(row);
  const handleDelete = (row: RowData) => onDelete && onDelete(row);

  /* Render */

  const renderHeader = () => {
    const showButton = buttonText && onAdd;

    return (
      <div className={styles.header}>
        <h3>{title}</h3>

        {showButton && (
          <button className={styles.addBtn} onClick={handleAdd}>
            <span>{buttonText}</span>
            <FaPlus />
          </button>
        )}
      </div>
    );
  };

  const renderHead = () => (
    <thead>
      <tr>
        {columns.map((col) => (
          <th key={String(col.key)}>{col.label}</th>
        ))}
        {hasActions && <th>Actions</th>}
      </tr>
    </thead>
  );

  const renderBody = () => {
    if (!data.length) {
      return (
        <tbody>
          <tr>
            <td colSpan={columns.length + 1} className={styles.empty}>
              No Data Available
            </td>
          </tr>
        </tbody>
      );
    }

    return <tbody>{data.map(renderRow)}</tbody>;
  };

  const renderRow = (row: RowData, index: number) => (
    <tr key={index}>
      {columns.map((col) => renderCell(col, row))}
      {hasActions && renderActions(row)}
    </tr>
  );

  const renderCell = (col: Column<RowData>, row: RowData) => {
    const value = row[col.key];

    const content = col.render
      ? col.render(value, row)
      : (value as ReactNode);

    return <td key={String(col.key)}>{content}</td>;
  };

  const renderActions = (row: RowData) => (
    <td>
      <div className={styles.actions}>
        {onRate && (
          <button
            className={`${styles.actionBtn} ${styles.rate}`}
            onClick={() => handleRate(row)}
          >
            <FaChartBar />
          </button>
        )}

        {onContacts && (
          <button
            className={`${styles.actionBtn} ${styles.contacts}`}
            onClick={() => handleContacts(row)}
          >
            <FaAddressBook />
          </button>
        )}

        {onLocations && (
          <button
            className={`${styles.actionBtn} ${styles.locations}`}
            onClick={() => handleLocations(row)}
          >
            <FaMapMarkerAlt />
          </button>
        )}

        {onEdit && (
          <button
            className={`${styles.actionBtn} ${styles.edit}`}
            onClick={() => handleEdit(row)}
          >
            <FaEdit />
          </button>
        )}

        {onDelete && (
          <button
            className={`${styles.actionBtn} ${styles.delete}`}
            onClick={() => handleDelete(row)}
          >
            <FaTrash />
          </button>
        )}
      </div>
    </td>
  );

  return (
    <div className={styles.container}>
      {renderHeader()}

      <Table striped hover responsive className={styles.table}>
        {renderHead()}
        {renderBody()}
      </Table>
    </div>
  );
}