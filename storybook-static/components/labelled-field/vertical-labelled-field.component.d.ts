import { LabelAria, LabelAriaProps } from '@react-aria/label';
import { ReactNode } from '../../../node_modules/react';
import { BaseComponentProps } from '../../type/base-component-props.type';
import { LabelledFieldFieldWidth } from './types';
export interface DoughUiVerticalLabelledFieldProps extends BaseComponentProps, LabelAriaProps {
    children: (fieldProps: LabelAria['fieldProps']) => ReactNode;
    width?: LabelledFieldFieldWidth;
}
export declare function VerticalLabelledField({ children, className, testId, style, width, ...props }: DoughUiVerticalLabelledFieldProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=vertical-labelled-field.component.d.ts.map