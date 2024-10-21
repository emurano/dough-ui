import { Alignment } from '../../type/alignment.type';
import { BlockMode } from '../../type/block-mode.type';
import { Justify } from '../../type/justify.type';
import { ReactNode } from '../../../node_modules/react';
import { GapSize } from '../../type/gap-size.type';
import { BaseComponentProps } from '../../type/base-component-props.type';
export interface ColumnStackProps extends BaseComponentProps {
    children?: ReactNode;
    gapSize?: GapSize;
    horizontalAlignment?: Alignment;
    verticalJustify?: Justify;
    blockMode?: BlockMode;
}
export declare function ColumnStack({ children, testId, className, gapSize, horizontalAlignment, verticalJustify, blockMode, }: ColumnStackProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=column-stack.component.d.ts.map