import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { IconCore } from '@components/icon';
import { BaseComponentProps } from '@type/base-component-props.type';

export type IconMagnifyingGlassProps = BaseComponentProps;

export function IconMagnifyingGlass({
  testId,
  style,
  className
}: IconMagnifyingGlassProps) {
  return (
    <IconCore
      testId={testId}
      style={style}
      className={className}
      iconGlyph={faMagnifyingGlass}
    />
  );
}
