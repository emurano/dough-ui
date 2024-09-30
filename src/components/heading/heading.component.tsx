import { forwardRef, HTMLAttributes } from 'react';
import classNames from 'classnames';
import { BaseComponentProps } from '@type/base-component-props.type';
import { SizeMode } from '@type/size-mode.type';
import { Size } from '@type/size.type';
import { useHeadingFont } from '@hooks/use-heading-font';
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
export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  function Heading(
    {
      children,
      level = 'h1',
      className,
      size = 'medium',
      sizeMode = 'globally-relative',
      ...props
    },
    ref
  ) {
    useHeadingFont();

    const finalProps: HTMLAttributes<HTMLHeadingElement> = {
      ...props,
      className: classNames(
        styles.Heading,
        className,
        styles[`Size_${size}`],
        styles[`SizeMode_${sizeMode}`]
      ),
    };

    // prettier-ignore
    {
      if (level === "h1") return <h1 {...finalProps} ref={ref}>{children}</h1>;
      if (level === "h2") return <h2 {...finalProps} ref={ref}>{children}</h2>;
      if (level === "h3") return <h3 {...finalProps} ref={ref}>{children}</h3>;
      if (level === "h4") return <h4 {...finalProps} ref={ref}>{children}</h4>;
      if (level === "h5") return <h5 {...finalProps} ref={ref}>{children}</h5>;
      if (level === "h6") return <h6 {...finalProps} ref={ref}>{children}</h6>;
    }
  }
);
