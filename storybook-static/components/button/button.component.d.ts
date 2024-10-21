import { ButtonProps as ReactAriaButtonProps } from 'react-aria-components';
import { BaseComponentProps, Size, SizeMode, Variant } from 'src/type';
export declare const ButtonStyles: readonly ["button", "link"];
export type ButtonStyle = (typeof ButtonStyles)[number];
export interface DoughUiButtonProps extends Omit<BaseComponentProps, 'className' | 'style'>, ReactAriaButtonProps {
    /**
     * The colour variant the button should be styled with
     *
     * @default primary
     */
    variant?: Variant;
    /**
     * The preset size of the button
     *
     * @default medium
     */
    size?: Size;
    /**
     * Whether the size prop is applied relative to the root font-size or the
     * parent font-size
     *
     * @default globally-relative
     */
    sizeMode?: SizeMode;
    /**
     * The style of button, either button or link
     *
     * @default button
     */
    buttonStyle?: ButtonStyle;
}
export declare const Button: import('../../../node_modules/react').ForwardRefExoticComponent<DoughUiButtonProps & import('../../../node_modules/react').RefAttributes<HTMLButtonElement>>;
//# sourceMappingURL=button.component.d.ts.map