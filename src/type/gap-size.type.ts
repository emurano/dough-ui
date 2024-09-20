export const GapSizes = [
  'none',
  'extra-small',
  'small',
  'medium',
  'large',
  'extra-large',
] as const;

export type GapSize = (typeof GapSizes)[number];
