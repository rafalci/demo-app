import { NgModule, ModuleWithProviders } from '@angular/core';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { CommonModule } from '@angular/common';
import { LAYOUT_CONFIG } from './models/tokens';
import { RouterModule } from '@angular/router';
import { LayoutConfig } from './models/layout-config';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    TopBarComponent
  ],
  exports: [
    TopBarComponent
  ]
})
export class LayoutModule {
  static forRoot(config: LayoutConfig): ModuleWithProviders<LayoutModule> {
    return {
      ngModule: LayoutModule,
      providers: [
        {
          provide: LAYOUT_CONFIG,
          useValue: config
        }
      ]
    };
  }
}
