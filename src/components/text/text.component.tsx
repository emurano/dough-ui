import { HTMLAttributes } from 'react';
import classNames from 'classnames';
import { useTextFont } from '@hooks/use-text-font';
import { BaseComponentProps } from '@type/base-component-props.type';
import { SizeMode } from '@type/size-mode.type';
import { Size } from '@type/size.type';

import styles from './text.module.scss';

export interface TextProps
  extends BaseComponentProps,
    HTMLAttributes<HTMLSpanElement> {
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
export function Text({
  children,
  className,
  testId,
  size = 'medium',
  sizeMode = 'globally-relative',
  ...props
}: TextProps) {
  useTextFont();

  const cssClasses = classNames(
    className,
    styles.Text,
    styles[`Size_${size}`],
    styles[`SizeMode_${sizeMode}`]
  );

  return (
    <span {...props} className={cssClasses} data-testid={testId}>
      {children}
    </span>
  );
}
