import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BreadcrumbService } from '../../services/breadcrumb.service';
import { Breadcrumb } from '../../models/breadcrumb';

@Component({
  selector: 'dc-breadcrumb',
  template: `
    <ng-container *ngIf="(breadcrumbService.breadcrumbs$ | async) as breadcrumbs">
      <ul class="breadcrumb-list">
        <li 
          *ngFor="let breadcrumb of breadcrumbs; let last = last"
          class="breadcrumb-list__item"
        >
          <a 
            class="breadcrumb-list__item--link"
            [href]="breadcrumb.url"
          >
            {{ breadcrumb.label }}
          </a>
          <span 
            *ngIf="!last"
            class="breadcrumb-list__item--divider"
          >
            >
          </span>
        </li>
      </ul>
      <h2 class="last-breadcrumb">{{ getLastBreadcrumb(breadcrumbs) }}</h2>
    <ng-container>
  `,
  styleUrls: ['breadcrumb.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreadcrumbComponent {
  constructor(public readonly breadcrumbService: BreadcrumbService) {
  }


  public getLastBreadcrumb(breadcrumbs: Breadcrumb[]): string | undefined {
    return breadcrumbs?.length
      ? breadcrumbs[breadcrumbs.length - 1].label
      : undefined;
  }
}
