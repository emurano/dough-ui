export const WrapModes = [
  'wrap',
  'nowrap',
] as const;

export type WrapMode = (typeof WrapModes)[number];
