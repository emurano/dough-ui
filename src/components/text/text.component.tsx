import classNames from 'classnames';
import { HTMLAttributes } from 'react';
import styles from './text.module.scss';

export type TextProps = HTMLAttributes<HTMLSpanElement>;

export function Text({ children, className, ...props }: TextProps) {
  return (
    <span {...props} className={classNames(styles.Text, className)}>
      {children}
    </span>
  );
}
