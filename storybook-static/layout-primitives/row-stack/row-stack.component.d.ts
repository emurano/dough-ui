import { BlockMode } from '../../type/block-mode.type';
import { ReactNode } from '../../../node_modules/react';
import { Alignment } from '../../type/alignment.type';
import { GapSize } from '../../type/gap-size.type';
import { Justify } from '../../type/justify.type';
import { BaseComponentProps } from '../../type/base-component-props.type';
export interface RowStackProps extends BaseComponentProps {
    children?: ReactNode;
    gapSize?: GapSize;
    horizontalJustify?: Justify;
    verticalAlignment?: Alignment;
    blockMode?: BlockMode;
}
export declare function RowStack({ children, testId, className, gapSize, horizontalJustify, verticalAlignment, blockMode, }: RowStackProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=row-stack.component.d.ts.map