import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { IconCore } from '@components/icon';
import { BaseComponentProps } from '@type/base-component-props.type';

export type IconXMarkProps = BaseComponentProps;

export function IconXMark({
  testId,
  style,
  className
}: IconXMarkProps) {
  return (
    <IconCore
      testId={testId}
      style={style}
      className={className}
      iconGlyph={faXmark}
    />
  );
}
