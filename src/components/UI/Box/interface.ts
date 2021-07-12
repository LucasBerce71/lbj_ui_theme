export interface IBox {
  display?: 'inline' | 
  'block' | 
  'contents' | 
  'flex' | 
  'grid' | 
  'inline-block' |
  'inline-flex' |
  'inline-grid' |
  'inline-table' |
  'list-item' |
  'run-in' |
  'table' |
  'table-caption' |
  'table-column-group' |
  'table-header-group' |
  'table-footer-group' |
  'table-row-group' |
  'table-cell' |
  'table-column';
  maxW?: string | number;
  w?: string | number;
  h?: string | number;
  maxH?: string | number;
  p?: string | number;
  py?: string | number;
  px?: string | number;
  radius?: string | number;
  borderW?: string | number;
  bg?: string;
  color?: string;
  overflow?: 'visible' | 'hidden' | 'scroll' | 'auto' | 'initial' | 'inherit'
}