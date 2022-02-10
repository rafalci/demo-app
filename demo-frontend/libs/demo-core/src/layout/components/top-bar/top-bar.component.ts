import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { LAYOUT_CONFIG } from '../../models/tokens';
import { LayoutConfig } from '../../models/layout-config';
import { NavItem } from '../../models/nav-item';

@Component({
  selector: 'dc-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopBarComponent {
  public title: string;
  public navItems: NavItem[];

  constructor(@Inject(LAYOUT_CONFIG) readonly config: LayoutConfig) {
    if (!config) {
      throw Error(`The 'LAYOUT_CONFIG' token has not been provided.`);
    }
    this.title = config.appTitle;
    this.navItems = config.navItems ?? [];    
  }
}
