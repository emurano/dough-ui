import { faFolder } from '@fortawesome/free-solid-svg-icons';
import { IconCore } from '@components/icon';
import { BaseComponentProps } from '@type/base-component-props.type';

export type IconFolderProps = BaseComponentProps;

export function IconFolder({
  testId,
  style,
  className
}: IconFolderProps) {
  return (
    <IconCore
      testId={testId}
      style={style}
      className={className}
      iconGlyph={faFolder}
    />
  );
}
