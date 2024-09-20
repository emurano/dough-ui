import { useUiFont } from '@hooks/use-ui-font';
import classNames from 'classnames';
import {
  Button as ReactAriaButton,
  ButtonProps as ReactAriaButtonProps,
} from 'react-aria-components';
import { BaseComponentProps, Size, Variant } from 'src/type';
import styles from './button.module.scss';

export const ButtonStyles = ['button', 'link'] as const;
export type ButtonStyle = (typeof ButtonStyles)[number];

export interface DoughUiButtonProps
  extends Omit<BaseComponentProps, 'className' | 'style'>,
    ReactAriaButtonProps {
  variant?: Variant;
  size?: Size;
  buttonStyle?: ButtonStyle;
}

export function Button({
  children,
  className,
  testId,
  variant = 'primary',
  size = 'medium',
  buttonStyle = 'button',
  ...props
}: DoughUiButtonProps) {
  useUiFont();

  const buttonCssClasses = classNames(
    className,
    styles.Button,
    styles[`Size_${size}`],
    styles[`Style_${buttonStyle}`],
    {
      [styles[`Variant_${variant}`]]: !!variant,
    }
  );

  return (
    <ReactAriaButton
      {...props}
      className={buttonCssClasses}
      data-testid={testId}
    >
      {children}
    </ReactAriaButton>
  );
}
