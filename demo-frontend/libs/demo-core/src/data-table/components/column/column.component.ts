import { Component, Input } from '@angular/core';
import { ColumnType } from '../../models/column-type';

@Component({
  selector: 'dc-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.sass']
})
export class ColumnComponent<T> {
  public textColumnType = ColumnType.PLAIN_TEXT;
  public numberColumnType = ColumnType.NUMBER;
  public dateColumnType = ColumnType.DATE;
  public booleanColumnType = ColumnType.BOOLEAN;

  @Input()
  public columnName!: keyof T;

  @Input()
  public columnType!: ColumnType;

  @Input()
  public row!: T;

  public get columnValue(): any {
    return this.row[this.columnName];
  }
}
