import { ReactNode } from 'react';

export type Column<RowData> = {
  key: keyof RowData;
  label: string;
  render?: (value: RowData[keyof RowData], row: RowData) => ReactNode;
};