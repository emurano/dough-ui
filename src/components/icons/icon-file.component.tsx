import { faFile } from '@fortawesome/free-solid-svg-icons';
import { IconCore } from '@components/icon';
import { BaseComponentProps } from '@type/base-component-props.type';

export type IconFileProps = BaseComponentProps;

export function IconFile({
  testId,
  style,
  className
}: IconFileProps) {
  return (
    <IconCore
      testId={testId}
      style={style}
      className={className}
      iconGlyph={faFile}
    />
  );
}
