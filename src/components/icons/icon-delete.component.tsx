import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { IconCore } from '@components/icon';
import { BaseComponentProps } from '@type/base-component-props.type';

export type IconDeleteProps = BaseComponentProps;

export function IconDelete({
  testId,
  style,
  className
}: IconDeleteProps) {
  return (
    <IconCore
      testId={testId}
      style={style}
      className={className}
      iconGlyph={faTrashCan}
    />
  );
}
