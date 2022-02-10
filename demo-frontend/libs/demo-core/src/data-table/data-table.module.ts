import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DataTableComponent } from './components/data-table/data-table.component';
import { ColumnComponent } from './components/column/column.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    MatTableModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    CommonModule
  ],
  declarations: [
    DataTableComponent,
    ColumnComponent
  ],
  exports: [
    DataTableComponent,
  ]
})
export class DataTableModule { }
