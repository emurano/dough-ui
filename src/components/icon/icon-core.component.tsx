import { FlipProp, IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BaseComponentProps } from '@type/base-component-props.type';
import classNames from 'classnames';
import { DoughUiIconSize, iconSizeMap } from './types';
import styles from './icon-core.module.scss';

export const IconAnimations = [
  'spin',
  'spin-fade',
  'shake',
  'fade',
  'flip',
  'flip-vertical',
  'flip-horizontal',
  'bounce',
  'beat',
  'beat-fade',
] as const;
export type IconAnimation = (typeof IconAnimations)[number];

export interface DoughUiIconCoreProps extends BaseComponentProps {
  iconGlyph: IconProp;
  size?: DoughUiIconSize;
  animation?: IconAnimation;
}

export function IconCore({
  iconGlyph,
  testId,
  style,
  className,
  size = 'standard',
  animation,
}: DoughUiIconCoreProps) {
  const faSize = iconSizeMap.get(size) ?? '1x';
  return (
    <FontAwesomeIcon
      icon={iconGlyph}
      data-testid={testId}
      style={style}
      className={classNames(styles.IconCore, className)}
      size={faSize}
      spin={animation === 'spin'}
      shake={animation === 'shake'}
      bounce={animation === 'bounce'}
      beatFade={animation === 'beat-fade'}
      beat={animation === 'beat'}
      fade={animation === 'fade'}
      flip={getFlipMode(animation)}
    />
  );
}

function getFlipMode(
  animation: IconAnimation | undefined
): FlipProp | undefined {
  if (animation === 'flip-horizontal') return 'horizontal';
  if (animation === 'flip-vertical') return 'vertical';
  if (animation === 'flip') return 'both';
  return undefined;
}
