import { ReactNode } from 'react';
import classNames from 'classnames';
import { useLabel } from 'react-aria';
import { LabelAria, LabelAriaProps } from '@react-aria/label';
import { BaseComponentProps } from '@type/base-component-props.type';
import { Label } from '@components/label';
import { LabelledFieldFieldWidth, LabelledFieldLabelWidth } from './types';
import styles from './horizontal-labelled-field.module.scss';

export interface DoughUiHorizontalLabelledFieldProps
  extends BaseComponentProps,
    LabelAriaProps {
  children: (fieldProps: LabelAria['fieldProps']) => ReactNode;
  labelWidth?: LabelledFieldLabelWidth;
  fieldWidth?: LabelledFieldFieldWidth;
}

export function HorizontalLabelledField({
  children,
  className,
  testId,
  style,
  labelWidth = 'medium',
  fieldWidth = 'extra-small',
  ...props
}: DoughUiHorizontalLabelledFieldProps) {
  const { labelProps, fieldProps } = useLabel(props);
  const { label } = props;

  const containerCssClasses = classNames(
    className,
    styles.HorizontalLabelledField
  );

  const labelCssClasses = classNames(
    styles.LabelContainer,
    styles[`Width_${labelWidth}`]
  );

  const fieldCssClasses = classNames(
    styles.FieldContainer,
    styles[`Width_${fieldWidth}`]
  );

  return (
    <div style={style} data-testid={testId} className={containerCssClasses}>
      <Label {...labelProps} className={labelCssClasses}>
        {label}
      </Label>
      <div className={fieldCssClasses}>{children(fieldProps)}</div>
    </div>
  );
}
