import { useEffect } from 'react';
import { useFontContext } from '@providers/font-provider';
import styles from './use-text-font.module.scss?inline';

export function useTextFont() {
  const { textFontStyleRef } = useFontContext();

  useEffect(() => {
    if (!textFontStyleRef.current) {
      textFontStyleRef.current = document.createElement('style');
      textFontStyleRef.current.innerHTML = styles;
      document.head.appendChild(textFontStyleRef.current);
    }
  }, [textFontStyleRef]);
}
