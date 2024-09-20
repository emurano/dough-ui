import { ReactNode, useMemo, useRef } from 'react';
import { FontContext, FontContextType } from './font.context';

export interface FontProviderProps {
  children: ReactNode;
}

export function FontProvider({ children }: FontProviderProps) {
  const uiFontStyleRef = useRef<HTMLStyleElement | null>(null);

  const context = useMemo<FontContextType>(
    () => ({
      uiFontStyleRef,
    }),
    [uiFontStyleRef]
  );

  return (
    <FontContext.Provider value={context}>{children}</FontContext.Provider>
  );
}
