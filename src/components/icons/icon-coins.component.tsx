import { faCoins } from '@fortawesome/free-solid-svg-icons';
import { IconCore } from '@components/icon';
import { BaseComponentProps } from '@type/base-component-props.type';

export type IconCoinsProps = BaseComponentProps;

export function IconCoins({
  testId,
  style,
  className
}: IconCoinsProps) {
  return (
    <IconCore
      testId={testId}
      style={style}
      className={className}
      iconGlyph={faCoins}
    />
  );
}
