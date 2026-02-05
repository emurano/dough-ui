import { IconPrefix, IconName } from '@fortawesome/fontawesome-common-types';

// Extend IconPrefix with your custom prefix
declare module '@fortawesome/fontawesome-common-types' {
  export type IconPrefix = 'fas' | 'fab' | 'far' | 'fac'; // Add 'fac' here

  // Extend IconName with your custom icon names
  export interface IconLookup {
    prefix: IconPrefix;
    iconName: IconName;
  }

  export type IconName = 'dough-dollar' | IconName; // Add custom icon names here
}
