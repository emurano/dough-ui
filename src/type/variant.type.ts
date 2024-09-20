export const Variants = ['primary', 'secondary', 'warning', 'success', 'danger'] as const;
export type Variant = typeof Variants[number];
