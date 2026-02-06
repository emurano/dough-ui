import { faFileImport } from '@fortawesome/free-solid-svg-icons';
import { IconCore } from '@components/icon';
import { BaseComponentProps } from '@type/base-component-props.type';

export type IconFileImportProps = BaseComponentProps;

export function IconFileImport({
  testId,
  style,
  className
}: IconFileImportProps) {
  return (
    <IconCore
      testId={testId}
      style={style}
      className={className}
      iconGlyph={faFileImport}
    />
  );
}
