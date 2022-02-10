import { ColumnType } from './column-type';

export interface ColumnDefinition<T> {
  name: keyof T,
  label: string,
  columnType: ColumnType
}
