import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import { IconCore } from '@components/icon';
import { BaseComponentProps } from '@type/base-component-props.type';

export type IconSaveProps = BaseComponentProps;

export function IconSave({
  testId,
  style,
  className
}: IconSaveProps) {
  return (
    <IconCore
      testId={testId}
      style={style}
      className={className}
      iconGlyph={faFloppyDisk}
    />
  );
}
