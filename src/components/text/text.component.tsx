import { BaseComponentProps } from '@type/base-component-props.type.ts';
import { Size } from '@type/size.type';
import classNames from 'classnames';
import { HTMLAttributes } from 'react';
import styles from './text.module.scss';

export interface TextProps
  extends BaseComponentProps,
    HTMLAttributes<HTMLSpanElement> {
  /**
   * The preset size of the text
   */
  size?: Size;
}

/**
 * Renders text with the given preset size and preset colour
 */
export function Text({
  children,
  className,
  testId,
  size = 'medium',
  ...props
}: TextProps) {
  const cssClasses = classNames(className, styles.Text, styles[`Size_${size}`]);

  return (
    <span {...props} className={cssClasses} data-testid={testId}>
      {children}
    </span>
  );
}
