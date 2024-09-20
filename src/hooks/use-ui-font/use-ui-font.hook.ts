import { useFontContext } from '@providers/font-provider';
import { useEffect } from 'react';
import styles from './use-ui-font.module.scss?inline';

export function useUiFont() {
  const { uiFontStyleRef } = useFontContext();

  useEffect(() => {
    if (!uiFontStyleRef.current) {
      uiFontStyleRef.current = document.createElement('style');
      uiFontStyleRef.current.innerHTML = styles;
      document.head.appendChild(uiFontStyleRef.current);
    }

    // return () => {
    //   if (uiFontStyleRef.current) {
    //     document.head.removeChild(uiFontStyleRef.current);
    //     uiFontStyleRef.current = null;
    //   }
    // };
  }, [uiFontStyleRef]);
}
