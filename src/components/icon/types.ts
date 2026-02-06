import { SizeProp } from '@fortawesome/fontawesome-svg-core';

export const DoughUiIconSizes = [
  'extra-small',
  'small',
  'standard',
  'large',
  'extra-large',
] as const;

export type DoughUiIconSize = (typeof DoughUiIconSizes)[number];

export const iconSizeMap = new Map<DoughUiIconSize, SizeProp>([
  ['extra-small', 'xs'],
  ['small', 'sm'],
  ['standard', '2x'],
  ['large', '5x'],
  ['extra-large', '10x'],
]);

