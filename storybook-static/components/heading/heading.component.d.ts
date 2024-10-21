import { HTMLAttributes } from '../../../node_modules/react';
import { BaseComponentProps } from '../../type/base-component-props.type';
import { SizeMode } from '../../type/size-mode.type';
import { Size } from '../../type/size.type';
export declare const HeadingLevels: readonly ["h1", "h2", "h3", "h4", "h5", "h6"];
export type HeadingLevel = (typeof HeadingLevels)[number];
export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement>, BaseComponentProps {
    /**
     * The type of level to use for the heading with h1 being the most significant
     */
    level?: HeadingLevel;
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
 * A standard heading with levels from h1 to h6
 */
export declare const Heading: import('../../../node_modules/react').ForwardRefExoticComponent<HeadingProps & import('../../../node_modules/react').RefAttributes<HTMLHeadingElement>>;
//# sourceMappingURL=heading.component.d.ts.map