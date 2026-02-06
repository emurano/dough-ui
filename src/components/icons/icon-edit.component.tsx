import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { IconCore } from '@components/icon';
import { BaseComponentProps } from '@type/base-component-props.type';

export type IconEditProps = BaseComponentProps;

export function IconEdit({
  testId,
  style,
  className
}: IconEditProps) {
  return (
    <IconCore
      testId={testId}
      style={style}
      className={className}
      iconGlyph={faPenToSquare}
    />
  );
}
