import { MutableRefObject } from '../../../node_modules/react';
export interface FontContextType {
    uiFontStyleRef: MutableRefObject<HTMLStyleElement | null>;
    textFontStyleRef: MutableRefObject<HTMLStyleElement | null>;
    headingFontStyleRef: MutableRefObject<HTMLStyleElement | null>;
}
export declare const FontContext: import('../../../node_modules/react').Context<FontContextType>;
//# sourceMappingURL=font.context.d.ts.map