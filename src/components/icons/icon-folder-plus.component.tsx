import { faFolderPlus } from '@fortawesome/free-solid-svg-icons';
import { IconCore } from '@components/icon';
import { BaseComponentProps } from '@type/base-component-props.type';

export type IconFolderPlusProps = BaseComponentProps;

export function IconFolderPlus({
  testId,
  style,
  className
}: IconFolderPlusProps) {
  return (
    <IconCore
      testId={testId}
      style={style}
      className={className}
      iconGlyph={faFolderPlus}
    />
  );
}
