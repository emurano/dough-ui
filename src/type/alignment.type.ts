export const Alignments = [
  'center',
  'start',
  'end',
  'stretch',
  'baseline',
] as const;

export type Alignment = (typeof Alignments)[number];
