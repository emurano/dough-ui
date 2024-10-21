import { HTMLAttributes } from '../../../node_modules/react';
import { BaseComponentProps } from '../../type/base-component-props.type';
import { SizeMode } from '../../type/size-mode.type';
import { Size } from '../../type/size.type';
export interface TextProps extends BaseComponentProps, HTMLAttributes<HTMLSpanElement> {
    /**
     * The preset size of the text
     *
     * @default medium
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
export declare function Text({ children, className, testId, size, sizeMode, ...props }: TextProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=text.component.d.ts.map