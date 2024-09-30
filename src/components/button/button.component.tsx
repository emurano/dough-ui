import { useUiFont } from '@hooks/use-ui-font';
import classNames from 'classnames';
import { forwardRef } from 'react';
import {
  Button as ReactAriaButton,
  ButtonProps as ReactAriaButtonProps,
} from 'react-aria-components';
import { BaseComponentProps, Size, SizeMode, Variant } from 'src/type';
import styles from './button.module.scss';

export const ButtonStyles = ['button', 'link'] as const;
export type ButtonStyle = (typeof ButtonStyles)[number];

export interface DoughUiButtonProps
  extends Omit<BaseComponentProps, 'className' | 'style'>,
    ReactAriaButtonProps {
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

export const Button = forwardRef<HTMLButtonElement, DoughUiButtonProps>(
  function Button(
    {
      children,
      className,
      testId,
      variant = 'primary',
      size = 'medium',
      buttonStyle = 'button',
      sizeMode = 'globally-relative',
      ...props
    },
    ref
  ) {
    useUiFont();

    const buttonCssClasses = classNames(
      className,
      styles.Button,
      styles[`Size_${size}`],
      styles[`SizeMode_${sizeMode}`],
      styles[`Style_${buttonStyle}`],
      styles[`Variant_${variant}`]
    );

    return (
      <ReactAriaButton
        {...props}
        className={buttonCssClasses}
        data-testid={testId}
        ref={ref}
      >
        {children}
      </ReactAriaButton>
    );
  }
);
