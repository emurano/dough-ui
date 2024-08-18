import { BaseComponentProps } from '@type/base-component-props.type.ts';
import { Size } from '@type/size.type';
import classNames from 'classnames';
import { HTMLAttributes } from 'react';
import styles from './paragraph-text.module.scss';

export interface ParagraphTextProps
  extends BaseComponentProps,
    HTMLAttributes<HTMLParagraphElement> {
  /**
   * The preset size of the text
   */
  size?: Size;
}

/**
 * Renders text with the given preset size and preset colour
 */
export function ParagraphText({
   children,
   className,
   testId,
   size = 'medium',
   ...props
 }: ParagraphTextProps) {
  const cssClasses = classNames(className, styles.ParagraphText, styles[`Size_${size}`]);

  return (
    <p {...props} className={cssClasses} data-testid={testId}>
      {children}
    </p>
  );
}
