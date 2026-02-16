import { BaseComponentProps } from '@type/base-component-props.type';
import classNames from 'classnames';
import { ReactNode } from 'react';
import styles from './standard-page-layout.module.scss';

export interface StandardPageLayoutProps extends BaseComponentProps {
  children?: ReactNode;

  /**
   * Whether to exclude the surrounding padding from the layout
   */
  noPadding?: boolean;
}

export function StandardPageLayout({
  children,
  testId,
  style,
  className,
  noPadding = false,
}: StandardPageLayoutProps) {
  const cssClasses = classNames(className, styles.StandardPageLayout, {
    [styles.WithPadding]: !noPadding,
  });
  return (
    <div data-testid={testId} className={cssClasses} style={style}>
      {children}
    </div>
  );
}
