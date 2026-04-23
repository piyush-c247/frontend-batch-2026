'use client';

import { ReactNode } from 'react';
import { Table } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';

import { Column } from './types';
import { ACTIONS, TEXTS } from './constants';
import styles from './DataTable.module.scss';
import ActionButton from '@/components/common/ActionButton';
import PaginationBar from '../PaginationBar';

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
  const actionHandlers = {
    rate: onRate,
    contacts: onContacts,
    locations: onLocations,
    edit: onEdit,
    delete: onDelete,
  };

  const hasActions = Object.values(actionHandlers).some(Boolean);

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
              {hasActions && <th>{TEXTS.actions}</th>}
            </tr>
          </thead>

          <tbody>
            {!data.length ? (
              <tr>
                <td
                  colSpan={columns.length + (hasActions ? 1 : 0)}
                  className={styles.empty}
                >
                  {TEXTS.noData}
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
                        {ACTIONS.map(({ key, icon: Icon, styleKey }) => {
                          const handler = actionHandlers[key];

                          if (!handler) return null;

                          return (
                            <ActionButton
                              key={key}
                              className={`${styles.actionBtn} ${styles[styleKey]}`}
                              onClick={() => handler(row)}
                            >
                              <Icon />
                            </ActionButton>
                          );
                        })}
                      </div>
                    </td>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </Table>
        <PaginationBar />
      </div>
    </div>
  );
}