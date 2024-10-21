import { LabelAria, LabelAriaProps } from '@react-aria/label';
import classNames from 'classnames';
import { ReactNode } from 'react';
import { useLabel } from 'react-aria';
import { Label } from '@components/label';
import { BaseComponentProps } from '@type/base-component-props.type';
import { LabelledFieldFieldWidth } from './types';
import styles from './vertical-labelled-field.module.scss';

export interface DoughUiVerticalLabelledFieldProps
  extends BaseComponentProps,
    LabelAriaProps {
  children: (fieldProps: LabelAria['fieldProps']) => ReactNode;

  width?: LabelledFieldFieldWidth;
}

export function VerticalLabelledField({
  children,
  className,
  testId,
  style,
  width = 'medium',
  ...props
}: DoughUiVerticalLabelledFieldProps) {
  const { labelProps, fieldProps } = useLabel(props);
  const { label } = props;

  const containerCssClasses = classNames(
    className,
    styles.VerticalLabelledField,
    styles[`Width_${width}`]
  );

  const labelCssClasses = classNames(
    styles.Label,
    styles[`Width_${width}`]
  );

  const fieldCssClasses = classNames(
    styles.FieldContainer,
    styles[`Width_${width}`]
  );

  return (
    <div style={style} data-testid={testId} className={containerCssClasses}>
      <Label {...labelProps} className={labelCssClasses}>
        {label}
      </Label>
      <div className={fieldCssClasses}>
        {children(fieldProps)}
      </div>
    </div>
  );
}
