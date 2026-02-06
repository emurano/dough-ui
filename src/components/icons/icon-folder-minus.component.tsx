import { faFolderMinus } from '@fortawesome/free-solid-svg-icons';
import { IconCore } from '@components/icon';
import { BaseComponentProps } from '@type/base-component-props.type';

export type IconFolderMinusProps = BaseComponentProps;

export function IconFolderMinus({
  testId,
  style,
  className
}: IconFolderMinusProps) {
  return (
    <IconCore
      testId={testId}
      style={style}
      className={className}
      iconGlyph={faFolderMinus}
    />
  );
}
