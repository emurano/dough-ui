import { ColourSchemeColor } from '@styling/types/colour-scheme.type';
import { BaseComponentProps } from '@type/base-component-props.type';
import classNames from 'classnames';
import { ReactNode } from 'react';
import styles from './padded-content.module.scss';

export interface PaddedContentProps extends BaseComponentProps {
  children?: ReactNode;

  paddingOmitTop?: boolean;
  paddingOmitBottom?: boolean;
  paddingOmitSides?: boolean;

  showTopBorder?: boolean;
  showBottomBorder?: boolean;

  colourScheme?: ColourSchemeColor;
}

export function PaddedContent({
  children,
  className,
  testId,
  style,
  paddingOmitTop,
  paddingOmitBottom,
  paddingOmitSides,
  showTopBorder = false,
  showBottomBorder = false,
  colourScheme,
}: PaddedContentProps) {
  const cssClasses = classNames(className, styles.PaddedContent, {
    [styles.WithTopPadding]: !paddingOmitTop,
    [styles.WithBottomPadding]: !paddingOmitBottom,
    [styles.WithSidePadding]: !paddingOmitSides,
    [styles.WithTopBorder]: showTopBorder,
    [styles.WithBottomBorder]: showBottomBorder,
    [styles[`ColourScheme_${colourScheme}`]]: !!colourScheme,
  });

  return (
    <div className={cssClasses} data-testid={testId} style={style}>
      {children}
    </div>
  );
}
