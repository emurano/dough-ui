import { useTextFont } from '@hooks/use-text-font';
import { BaseComponentProps } from '@type/base-component-props.type';
import { forwardRef } from 'react';
import {
  LabelProps as ReactAriaLabelProps,
  Label as ReactAriaLabel,
} from 'react-aria-components';
import styles from './label.module.scss';

export interface DoughUiLabelProps
  extends Omit<BaseComponentProps, 'className' | 'style'>,
    ReactAriaLabelProps {}

export const Label = forwardRef<HTMLLabelElement, DoughUiLabelProps>(
  function Label({ children, ...props }, ref) {
    useTextFont();
    return (
      <ReactAriaLabel {...props} className={styles.Label} ref={ref}>
        {children}
      </ReactAriaLabel>
    );
  }
);
