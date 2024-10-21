import { ReactNode } from '../../../node_modules/react';
import { LabelAria, LabelAriaProps } from '@react-aria/label';
import { BaseComponentProps } from '../../type/base-component-props.type';
import { LabelledFieldFieldWidth, LabelledFieldLabelWidth } from './types';
export interface DoughUiHorizontalLabelledFieldProps extends BaseComponentProps, LabelAriaProps {
    children: (fieldProps: LabelAria['fieldProps']) => ReactNode;
    labelWidth?: LabelledFieldLabelWidth;
    fieldWidth?: LabelledFieldFieldWidth;
}
export declare function HorizontalLabelledField({ children, className, testId, style, labelWidth, fieldWidth, ...props }: DoughUiHorizontalLabelledFieldProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=horizontal-labelled-field.component.d.ts.map