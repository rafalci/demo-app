import { Input, Component, ChangeDetectionStrategy } from '@angular/core';
import { TableDefinition } from '../../models/table-definition';
import { ColumnDefinition } from '../../models/column-definition';

@Component({
  selector: 'dc-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTableComponent<T, R> {
  @Input()
  public data: T[];

  @Input()
  public isDataLoading: boolean;

  @Input()
  public tableDefinition!: TableDefinition<T, R>;

  constructor() {
    this.data = [];
    this.isDataLoading = false;
  }

  public get displayedColumns(): string[] {
    return this.tableDefinition.columns.map(
      column => column.name.toString()
    )
  }

  public getColumnName(column: ColumnDefinition<T>): string {
    return column.name.toString();
  }
}
