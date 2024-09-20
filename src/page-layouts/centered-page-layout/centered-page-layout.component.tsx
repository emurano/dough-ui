import { CSSProperties, ReactNode } from 'react';
import classNames from 'classnames';
import styles from './centered-page-layout.module.scss';

export interface CenteredPageLayoutProps {
  children?: ReactNode;
  style?: CSSProperties;
  className?: string;
}

export function CenteredPageLayout({
  style,
  className,
  children,
}: CenteredPageLayoutProps) {
  return (
    <div
      className={classNames(className, styles.CenteredPageLayout)}
      style={style}
    >
      {children}
    </div>
  );
}
