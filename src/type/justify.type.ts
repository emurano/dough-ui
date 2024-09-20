export const Justifies = [
  'center',
  'start',
  'end',
  'stretch',
  'space-around',
  'space-evenly'
] as const;

export type Justify = (typeof Justifies)[number];
