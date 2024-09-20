import { createContext, createRef, MutableRefObject } from 'react';

export interface FontContextType {
  uiFontStyleRef: MutableRefObject<HTMLStyleElement | null>;
}

export const FontContext = createContext<FontContextType>({
  uiFontStyleRef: createRef<HTMLStyleElement | null>(),
});
