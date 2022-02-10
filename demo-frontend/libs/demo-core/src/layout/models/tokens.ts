import { InjectionToken } from '@angular/core';
import { LayoutConfig } from './layout-config';

/**
 * Layout configration injection token
 */
export const LAYOUT_CONFIG = new InjectionToken<LayoutConfig>(
  'Layout configuration token'
)
