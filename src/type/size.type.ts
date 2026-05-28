export const Sizes = [
  'extra-small',
  'small',
  'standard',
  'large',
  'extra-large',
] as const;

export type Size = (typeof Sizes)[number];
