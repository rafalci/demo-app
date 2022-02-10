import { ColumnDefinition } from './column-definition';

export interface TableDefinition<T, R = T> {
  columns: ColumnDefinition<T>[],
  selector: (row: T) => R
}
