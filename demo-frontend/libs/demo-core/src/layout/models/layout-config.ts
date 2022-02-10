import { NavItem } from './nav-item';

/**
 * Used to provide layout configuration by LAYOUT_CONFIG token
 */
export interface LayoutConfig {
  appTitle: string;
  navItems?: NavItem[];
}
