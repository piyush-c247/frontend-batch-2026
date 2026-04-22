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
import ActionButton from '@/components/common/ActionButton';

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

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <h3>{title}</h3>

        {buttonText && onAdd && (
          <button className={styles.addBtn} onClick={onAdd}>
            <span>{buttonText}</span>
            <FaPlus />
          </button>
        )}
      </div>

      {/* Table */}
      <div className={styles.tableWrapper}>
      <Table striped hover responsive className={styles.table}>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={String(col.key)}>{col.label}</th>
            ))}
            {hasActions && <th>Actions</th>}
          </tr>
        </thead>

        <tbody>
          {!data.length ? (
            <tr>
              <td
                colSpan={columns.length + (hasActions ? 1 : 0)}
                className={styles.empty}
              >
                No Data Available
              </td>
            </tr>
          ) : (
            data.map((row, index) => (
              <tr key={index}>
                {columns.map((col) => {
                  const value = row[col.key];
                  const content = col.render
                    ? col.render(value, row)
                    : (value as ReactNode);

                  return <td key={String(col.key)}>{content}</td>;
                })}

                {hasActions && (
                  <td>
                    <div className={styles.actions}>
                      {onRate && (
                        <ActionButton
                          className={`${styles.actionBtn} ${styles.rate}`}
                          onClick={() => onRate(row)}
                        >
                          <FaChartBar />
                        </ActionButton>
                      )}

                      {onContacts && (
                        <ActionButton
                          className={`${styles.actionBtn} ${styles.contacts}`}
                          onClick={() => onContacts(row)}
                        >
                          <FaAddressBook />
                        </ActionButton>
                      )}

                      {onLocations && (
                        <ActionButton
                          className={`${styles.actionBtn} ${styles.locations}`}
                          onClick={() => onLocations(row)}
                        >
                          <FaMapMarkerAlt />
                        </ActionButton>
                      )}

                      {onEdit && (
                        <ActionButton
                          className={`${styles.actionBtn} ${styles.edit}`}
                          onClick={() => onEdit(row)}
                        >
                          <FaEdit />
                        </ActionButton>
                      )}

                      {onDelete && (
                        <ActionButton
                          className={`${styles.actionBtn} ${styles.delete}`}
                          onClick={() => onDelete(row)}
                        >
                          <FaTrash />
                        </ActionButton>
                      )}
                    </div>
                  </td>
                )}
              </tr>
            ))
          )}
        </tbody>
      </Table>
      <hr/>
      </div>
    </div>
  );
}