import { HTMLAttributes } from '../../../node_modules/react';
import { BaseComponentProps } from '../../type/base-component-props.type';
import { SizeMode } from '../../type/size-mode.type';
import { Size } from '../../type/size.type';
export interface ParagraphTextProps extends BaseComponentProps, HTMLAttributes<HTMLParagraphElement> {
    /**
     * The preset size of the text
     */
    size?: Size;
    /**
     * Whether the size prop is applied relative to the root font-size or the
     * parent font-size
     */
    sizeMode?: SizeMode;
}
/**
 * Renders text with the given preset size and preset colour
 */
export declare function ParagraphText({ children, className, testId, size, sizeMode, ...props }: ParagraphTextProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=paragraph-text.component.d.ts.map