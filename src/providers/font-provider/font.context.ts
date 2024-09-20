import { createContext, createRef, MutableRefObject } from 'react';

export interface FontContextType {
  uiFontStyleRef: MutableRefObject<HTMLStyleElement | null>;
  textFontStyleRef: MutableRefObject<HTMLStyleElement | null>;
  headingFontStyleRef: MutableRefObject<HTMLStyleElement | null>;
}

export const FontContext = createContext<FontContextType>({
  uiFontStyleRef: createRef<HTMLStyleElement | null>(),
  textFontStyleRef: createRef<HTMLStyleElement | null>(),
  headingFontStyleRef: createRef<HTMLStyleElement | null>(),
});
