import { BaseComponentProps } from '@type/base-component-props.type';
import classNames from 'classnames';
import { ReactNode } from 'react';
import styles from './sidebar-page-layout.module.scss';

export interface SidebarPageLayoutProps extends BaseComponentProps {
  children?: ReactNode;

  /**
   * Whether to exclude the surrounding padding from the layout
   */
  noPadding?: boolean;
}

export function SidebarPageLayout({
  children,
  className,
  testId,
  style,
  noPadding = false,
}: SidebarPageLayoutProps) {
  const cssClasses = classNames(className, styles.SidebarPageLayout, {
    [styles.WithPadding]: !noPadding,
  });
  return (
    <div data-testid={testId} className={cssClasses} style={style}>
      {children}
    </div>
  );
}
