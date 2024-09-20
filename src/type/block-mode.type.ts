export const BlockModes = [
  'block',
  'inline',
  'inline-block',
] as const;

export type BlockMode = (typeof BlockModes)[number];
