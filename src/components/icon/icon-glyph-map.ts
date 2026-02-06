import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faFloppyDisk,
  faXmark,
  faTrashCan,
  faPenToSquare,
  faMagnifyingGlass,
  faFolder,
  faFolderOpen,
  faFolderPlus,
  faFolderMinus,
  faFolderTree,
  faFile,
  faFileImport,
  faSpinner,
  faCoins
} from '@fortawesome/free-solid-svg-icons';

export type DoughUiIconName = 
  | 'save'
  | 'x-mark'
  | 'delete'
  | 'edit'
  | 'magnifying-glass'
  | 'folder'
  | 'folder-open'
  | 'folder-plus'
  | 'folder-minus'
  | 'folder-tree'
  | 'file'
  | 'file-import'
  | 'spinner'
  | 'coins'
;

export const iconGlyphMap = new Map<DoughUiIconName, IconProp>([
   ['save', faFloppyDisk],
   ['x-mark', faXmark],
   ['delete', faTrashCan],
   ['edit', faPenToSquare],
   ['magnifying-glass', faMagnifyingGlass],
   ['folder', faFolder],
   ['folder-open', faFolderOpen],
   ['folder-plus', faFolderPlus],
   ['folder-minus', faFolderMinus],
   ['folder-tree', faFolderTree],
   ['file', faFile],
   ['file-import', faFileImport],
   ['spinner', faSpinner],
   ['coins', faCoins],
]);

export const IconNames = [
  'save',
  'x-mark',
  'delete',
  'edit',
  'magnifying-glass',
  'folder',
  'folder-open',
  'folder-plus',
  'folder-minus',
  'folder-tree',
  'file',
  'file-import',
  'spinner',
  'coins'
];
