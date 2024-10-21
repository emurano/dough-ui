import { InputProps } from 'react-aria-components';
import { SizeMode } from '../../type/size-mode.type';
import { Size } from '../../type/size.type';
export declare const InputStyles: readonly ["bordered", "borderless"];
export type InputStyle = (typeof InputStyles)[number];
export declare const InputWidths: readonly ["extra-small", "small", "medium", "large", "extra-large", "full"];
export type InputWidth = (typeof InputWidths)[number];
export interface DoughUiInputProps extends Omit<InputProps, 'size'> {
    /**
     * The preset size of the input field
     *
     * @default medium
     */
    size?: Size;
    /**
     * Whether the size prop is applied relative to the root font-size or the
     * parent font-size
     */
    sizeMode?: SizeMode;
    /**
     * The broader style of the input, bordered or borderless
     *
     * @default bordered
     */
    inputStyle?: InputStyle;
    /**
     * The standard width of the input
     *
     * @default medium
     */
    width?: InputWidth;
}
export declare const Input: import('../../../node_modules/react').ForwardRefExoticComponent<DoughUiInputProps & import('../../../node_modules/react').RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=input.component.d.ts.map