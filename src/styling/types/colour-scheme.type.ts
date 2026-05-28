export const ColourSchemeColors = [
  'light',
  'accented',
  'dark'
] as const;

export type ColourSchemeColor = (typeof ColourSchemeColors)[number];