import { BlockMode } from '../../type/block-mode.type';
import { ReactNode } from 'react';
import classNames from 'classnames';
import { Alignment } from '../../type/alignment.type';
import { GapSize } from '../../type/gap-size.type';
import { Justify } from '../../type/justify.type';
import { BaseComponentProps } from '../../type/base-component-props.type';
import styles from './row-stack.module.scss';

export interface RowStackProps extends BaseComponentProps {
  children?: ReactNode;
  gapSize?: GapSize;
  horizontalJustify?: Justify;
  verticalAlignment?: Alignment;
  blockMode?: BlockMode;
}

export function RowStack({
  children,
  testId,
  className,
  gapSize = 'medium',
  horizontalJustify = 'stretch',
  verticalAlignment = 'center',
  blockMode = 'block',
}: RowStackProps) {
  const containerClassNames = classNames(
    styles.RowStack,
    className,
    styles[`GapSize_${gapSize}`],
    styles[`HorizontalJustify_${horizontalJustify}`],
    styles[`VerticalAlignment_${verticalAlignment}`],
    styles[`BlockMode_${blockMode}`],
  );

  return (
    <div data-testid={testId} className={containerClassNames}>
      {children}
    </div>
  );
}
