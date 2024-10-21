import { BaseComponentProps } from '../../type/base-component-props.type';
import { LabelProps as ReactAriaLabelProps } from 'react-aria-components';
export interface DoughUiLabelProps extends Omit<BaseComponentProps, 'className' | 'style'>, ReactAriaLabelProps {
}
export declare const Label: import('../../../node_modules/react').ForwardRefExoticComponent<DoughUiLabelProps & import('../../../node_modules/react').RefAttributes<HTMLLabelElement>>;
//# sourceMappingURL=label.component.d.ts.map