import { Component, Input } from '@angular/core';

@Component({
  selector: 'dc-card',
  template: `
    <mat-card>
      <mat-card-title>{{ title }}</mat-card-title>
      <ng-content></ng-content>
    </mat-card>
  `,
  styleUrls: ['./card.component.sass']
})
export class CardComponent {
  @Input()
  public title?: string;
}
