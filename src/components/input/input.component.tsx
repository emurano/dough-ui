import { useUiFont } from '@hooks/use-ui-font';
import { Size } from '@type/size.type';
import classNames from 'classnames';
import { Input as ReactAriaInput, InputProps } from 'react-aria-components';
import styles from './input.module.scss';

export const InputStyles = ['bordered', 'borderless'] as const;
export type InputStyle = (typeof InputStyles)[number];

export const InputWidths = [
  'extra-small',
  'small',
  'medium',
  'large',
  'extra-large',
  'full'
] as const;

export type InputWidth = (typeof InputWidths)[number];


export interface DoughUiInputProps extends Omit<InputProps, 'size'> {
  size?: Size;
  inputStyle?: InputStyle;
  width?: InputWidth;
}

export function Input({
  size = 'medium',
  className,
  inputStyle = 'bordered',
  width = 'medium',
  ...props
}: DoughUiInputProps) {
  useUiFont();

  const cssClasses = classNames(
    className,
    styles.Input,
    styles[`Size_${size}`],
    styles[`Width_${width}`],
    styles[`Style_${inputStyle}`]
  );

  return <ReactAriaInput {...props} className={cssClasses} />;
}
