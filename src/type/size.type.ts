export const Sizes = ['small', 'medium', 'large'] as const;

export type Size = typeof Sizes[number];

