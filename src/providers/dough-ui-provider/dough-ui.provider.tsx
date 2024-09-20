import { ReactNode } from 'react';

export interface DoughUiProviderProps {
  children?: ReactNode;
}


export function DoughUiProvider({ children }: DoughUiProviderProps) {
  return <>{children}</>;
}
