import { useEffect } from 'react';
import { useFontContext } from '@providers/font-provider';
import styles from './use-heading-font.module.scss?inline';

export function useHeadingFont() {
  const { headingFontStyleRef } = useFontContext();

  useEffect(() => {
    if (!headingFontStyleRef.current) {
      headingFontStyleRef.current = document.createElement('style');
      headingFontStyleRef.current.innerHTML = styles;
      document.head.appendChild(headingFontStyleRef.current);
    }
  }, [headingFontStyleRef]);
}
