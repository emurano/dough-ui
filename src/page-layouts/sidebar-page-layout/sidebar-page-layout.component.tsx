import { subTestId } from '@helpers/sub-test-id.function';
import { BaseComponentProps } from '@type/base-component-props.type';
import classNames from 'classnames';
import { CSSProperties, ReactNode } from 'react';
import styles from './sidebar-page-layout.module.scss';

export interface SidebarPageLayoutProps extends BaseComponentProps {
  children?: ReactNode;

  leftSidebarContent?: ReactNode;
  leftSidebarClassName?: string;
  leftSidebarIsOpen?: boolean;
  leftSidebarWidth?: number;
  leftSidebarShadow?: boolean;

  rightSidebarContent?: ReactNode;
  rightSidebarClassName?: string;
  rightSidebarIsOpen?: boolean;
  rightSidebarWidth?: number;
  rightSidebarShadow?: boolean;
}

export function SidebarPageLayout({
  children,
  className,
  testId,
  style,
  leftSidebarContent,
  leftSidebarClassName,
  leftSidebarIsOpen = false,
  leftSidebarWidth = 400,
  leftSidebarShadow = false,
  rightSidebarContent,
  rightSidebarClassName,
  rightSidebarIsOpen = false,
  rightSidebarWidth = 400,
  rightSidebarShadow = false,
}: SidebarPageLayoutProps) {
  const leftIsVisible = leftSidebarIsOpen && leftSidebarContent !== undefined;
  const rightIsVisible =
    rightSidebarIsOpen && rightSidebarContent !== undefined;

  const cssClasses = classNames(className, styles.SidebarPageLayout, {
    [styles.LeftSidebarOpen]: leftIsVisible,
    [styles.RightSidebarOpen]: rightIsVisible,
  });

  const contentCssClasses = classNames(styles.Content, {
    [styles.SidebarOpen]: leftSidebarIsOpen,
  });

  const leftSidebarContentCssClasses = classNames(
    styles.LeftSidebar,
    leftSidebarClassName,
    {
      [styles.Hidden]: !leftIsVisible,
      [styles.WithShadow]: leftSidebarShadow,
    }
  );

  const leftSidebarStyle: CSSProperties = {};
  if (leftIsVisible) {
    leftSidebarStyle.width = `${leftSidebarWidth}px`;
  } else {
    leftSidebarStyle.width = '0';
  }

  const rightSidebarContentCssClasses = classNames(
    styles.RightSidebar,
    rightSidebarClassName,
    {
      [styles.Hidden]: !rightIsVisible,
      [styles.WithShadow]: rightSidebarShadow,
    }
  );

  const rightSidebarStyle: CSSProperties = {};
  if (rightIsVisible) {
    rightSidebarStyle.width = `${rightSidebarWidth}px`;
  } else {
    rightSidebarStyle.width = '0';
  }

  return (
    <div data-testid={testId} className={cssClasses} style={style}>
      {leftSidebarContent && (
        <aside
          data-testid={subTestId(testId, 'left-sidebar')}
          className={leftSidebarContentCssClasses}
          style={leftSidebarStyle}
        >
          <div
            className={styles.ConstantWidthContainer}
            style={{ width: `${leftSidebarWidth}px` }}
          >
            {leftSidebarContent}
          </div>
        </aside>
      )}

      <div
        data-testid={subTestId(testId, 'content')}
        className={contentCssClasses}
      >
        {children}
      </div>

      {rightSidebarContent && (
        <aside
          data-testid={subTestId(testId, 'right-sidebar')}
          className={rightSidebarContentCssClasses}
          style={rightSidebarStyle}
        >
          <div
            className={styles.ConstantWidthContainer}
            style={{ width: `${rightSidebarWidth}px` }}
          >
            {rightSidebarContent}
          </div>
        </aside>
      )}
    </div>
  );
}
