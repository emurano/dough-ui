import { Alignment } from '../../type/alignment.type';
import { BlockMode } from '../../type/block-mode.type';
import { Justify } from '../../type/justify.type';
import { ReactNode } from 'react';
import classNames from 'classnames';
import { GapSize } from '../../type/gap-size.type';
import { BaseComponentProps } from '../../type/base-component-props.type';
import styles from './column-stack.module.scss';

export interface ColumnStackProps extends BaseComponentProps {
  children?: ReactNode;
  gapSize?: GapSize;
  horizontalAlignment?: Alignment;
  verticalJustify?: Justify;
  blockMode?: BlockMode;
}

export function ColumnStack({
  children,
  testId,
  className,
  gapSize = 'medium',
  horizontalAlignment = 'center',
  verticalJustify = 'center',
  blockMode = 'block',
}: ColumnStackProps) {
  const containerClassNames = classNames(
    styles.ColumnStack,
    className,
    styles[`GapSize_${gapSize}`],
    styles[`HorizontalAlignment_${horizontalAlignment}`],
    styles[`VerticalJustify_${verticalJustify}`],
    styles[`BlockMode_${blockMode}`],
  );

  return (
    <div data-testid={testId} className={containerClassNames}>
      {children}
    </div>
  );
}
