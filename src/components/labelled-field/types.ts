export const LabelledFieldLabelWidths = [
  'extra-small',
  'small',
  'medium',
  'large',
  'extra-large',
  'auto',
  // 'full',
] as const;

export type LabelledFieldLabelWidth = (typeof LabelledFieldLabelWidths)[number];

export const LabelledFieldFieldWidths = [
  'extra-small',
  'small',
  'medium',
  'large',
  'extra-large',
  'auto',
  // 'full',
] as const;

export type LabelledFieldFieldWidth = (typeof LabelledFieldFieldWidths)[number];
