import { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from './button.module.scss';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button {...props} className={classNames(styles.Button, className)}>
      {children}
    </button>
  );
}
