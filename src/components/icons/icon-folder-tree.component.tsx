import { faFolderTree } from '@fortawesome/free-solid-svg-icons';
import { IconCore } from '@components/icon';
import { BaseComponentProps } from '@type/base-component-props.type';

export type IconFolderTreeProps = BaseComponentProps;

export function IconFolderTree({
  testId,
  style,
  className
}: IconFolderTreeProps) {
  return (
    <IconCore
      testId={testId}
      style={style}
      className={className}
      iconGlyph={faFolderTree}
    />
  );
}
