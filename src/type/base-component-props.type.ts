import { CSSProperties } from "react";

/**
 * Props that all components will export
 */
export interface BaseComponentProps {

  /**
   * The string to use as the data-testid attribute for the outermost element
   * of the component, as well as the prefix for sub-elements
   */
  testId?: string;

  className?: string;

  style?: CSSProperties;
}
