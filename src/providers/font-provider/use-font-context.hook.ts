import { useContext } from 'react';
import { FontContext } from './font.context';

export function useFontContext() {
  return useContext(FontContext);
}
