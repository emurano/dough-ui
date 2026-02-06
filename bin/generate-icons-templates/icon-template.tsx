import { __ICON_GLYPH_NAME__ } from '@fortawesome/free-solid-svg-icons';
import { IconCore } from '@components/icon';
import { BaseComponentProps } from '@type/base-component-props.type';

export type Icon__ICON_NAME_PASCAL_CASE__Props = BaseComponentProps;

export function Icon__ICON_NAME_PASCAL_CASE__({
  testId,
  style,
  className
}: Icon__ICON_NAME_PASCAL_CASE__Props) {
  return (
    <IconCore
      testId={testId}
      style={style}
      className={className}
      iconGlyph={__ICON_GLYPH_NAME__}
    />
  );
}
