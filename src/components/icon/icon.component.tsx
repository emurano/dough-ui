import { BaseComponentProps } from '@type/base-component-props.type';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { IconAnimation, IconCore } from './icon-core.component';
import { DoughUiIconName, iconGlyphMap } from './icon-glyph-map';
import { DoughUiIconSize } from './types';

export interface DoughUiIconProps extends BaseComponentProps {
  icon: DoughUiIconName;
  size?: DoughUiIconSize;
  animation?: IconAnimation;
}

export function Icon({
  icon,
  testId,
  style,
  className,
  size,
  animation,
}: DoughUiIconProps) {
  const iconGlyph = iconGlyphMap.get(icon);
  return (
    <IconCore
      iconGlyph={iconGlyph ?? faCircle}
      data-testid={testId}
      style={style}
      className={className}
      size={size}
      animation={animation}
    />
  );
}
