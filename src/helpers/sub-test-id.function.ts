export function subTestId(id: string | undefined, suffix: string): string | undefined {
  if (!id) return undefined;
  return `${id}-${suffix}`;
}