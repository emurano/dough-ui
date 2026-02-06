import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { IconCore } from '@components/icon';
import { BaseComponentProps } from '@type/base-component-props.type';

export type IconSpinnerProps = BaseComponentProps;

export function IconSpinner({
  testId,
  style,
  className
}: IconSpinnerProps) {
  return (
    <IconCore
      testId={testId}
      style={style}
      className={className}
      iconGlyph={faSpinner}
    />
  );
}
