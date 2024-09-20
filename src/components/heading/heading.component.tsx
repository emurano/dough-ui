import { SizeMode } from '../../type/size-mode.type.ts';
import { HTMLAttributes } from 'react';
import classNames from 'classnames';
import { BaseComponentProps } from '../../type/base-component-props.type';
import { Size } from '../../type/size.type';
import styles from './heading.module.scss';

export const HeadingLevels = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;
export type HeadingLevel = (typeof HeadingLevels)[number];

export interface HeadingProps
  extends HTMLAttributes<HTMLHeadingElement>,
    BaseComponentProps {
  /**
   * The type of level to use for the heading with h1 being the most significant
   */
  level?: HeadingLevel;

  /**
   * The preset size of the text
   */
  size?: Size;

  /**
   * Whether the size prop is applied relative to the root font-size or the
   * parent font-size
   */
  sizeMode?: SizeMode;
}

/**
 * A standard heading with levels from h1 to h6
 */
export function Heading({
  children,
  level = 'h1',
  className,
  size = 'medium',
  sizeMode = 'globally-relative',
  ...props
}: HeadingProps) {
  const finalProps: HTMLAttributes<HTMLHeadingElement> = {
    ...props,
    className: classNames(
      styles.Heading,
      className,
      styles[`Size_${size}`],
      styles[`SizeMode_${sizeMode}`]
    ),
  };

  if (level === 'h1') return <h1 {...finalProps}>{children}</h1>;
  if (level === 'h2') return <h2 {...finalProps}>{children}</h2>;
  if (level === 'h3') return <h3 {...finalProps}>{children}</h3>;
  if (level === 'h4') return <h4 {...finalProps}>{children}</h4>;
  if (level === 'h5') return <h5 {...finalProps}>{children}</h5>;
  if (level === 'h6') return <h6 {...finalProps}>{children}</h6>;
}
