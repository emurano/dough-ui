import { BaseComponentProps } from '@type/base-component-props.type';
import { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from './button.module.scss';

export interface ButtonProps
  extends BaseComponentProps,
    ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ children, className, testId, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={classNames(styles.Button, className)}
      data-testid={testId}
    >
      {children}
    </button>
  );
}
