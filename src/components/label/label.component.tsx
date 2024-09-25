import { useTextFont } from '@hooks/use-text-font';
import { BaseComponentProps } from '@type/base-component-props.type';
import {
  LabelProps as ReactAriaLabelProps,
  Label as ReactAriaLabel,
} from 'react-aria-components';
import styles from './label.module.scss';

export interface DoughUiLabelProps
  extends Omit<BaseComponentProps, 'className' | 'style'>,
    ReactAriaLabelProps {}

export function Label({ children, ...props }: DoughUiLabelProps) {
  useTextFont();
  return <ReactAriaLabel {...props} className={styles.Label}>{children}</ReactAriaLabel>;
}
