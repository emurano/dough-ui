import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { IconCore } from '@components/icon';
import { BaseComponentProps } from '@type/base-component-props.type';

export type IconFolderOpenProps = BaseComponentProps;

export function IconFolderOpen({
  testId,
  style,
  className
}: IconFolderOpenProps) {
  return (
    <IconCore
      testId={testId}
      style={style}
      className={className}
      iconGlyph={faFolderOpen}
    />
  );
}
