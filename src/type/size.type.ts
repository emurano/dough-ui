export const Sizes = [
  'extra-small',
  'small',
  'medium',
  'large',
  'extra-large',
] as const;

export type Size = (typeof Sizes)[number];
