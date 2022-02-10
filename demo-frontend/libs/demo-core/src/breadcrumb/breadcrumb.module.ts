import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { BrowserModule } from '@angular/platform-browser';
import { BreadcrumbService } from './services/breadcrumb.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule
  ],
  declarations: [BreadcrumbComponent],
  exports: [BreadcrumbComponent],
  providers: [BreadcrumbService]
})
export class BreadcrumbModule { }
