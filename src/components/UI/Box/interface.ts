export interface IBox {
  as?: 'a' | 'aabr' | 'address' | 'area' | 'b' | 'base' | 'bdo' | 'blockquote' |
  'body' | 'br' | 'button' | 'caption' | 'cite' | 'code' | 'col' | 'colgroup' |
  'dd' | 'del' | 'dfn' | 'div' | 'dl' | 'dt' | 'em' | 'fieldset' | 'form' | 'h1'
  | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'head' | 'hr' | 'html' | 'i' | 'iframe' |
  'img' | 'input' | 'ins' | 'kbd' | 'label' | 'legend' | 'li' | 'link' | 'map' |
  'menu' | 'meta' | 'noscript' | 'object' | 'ol' | 'optgroup' | 'option' | 'p' |
  'param' | 'pre' | 'q' | 's' | 'samp' | 'script' | 'select' | 'small' | 'span' |
  'strong' | 'style' | 'sub' | 'sup' | 'table' | 'tbody' | 'td' | 'textarea' | 
  'tfoot' | 'th' | 'thead' | 'title' | 'tr' | 'ul' | 'var ';

  display?: 'inline' | 'block' | 'contents' | 'flex' | 'grid' | 'inline-block' |
  'inline-flex' | 'inline-grid' | 'inline-table' | 'list-item' | 'run-in' | 'table' |
  'table-caption' | 'table-column-group' | 'table-header-group' | 'table-footer-group' |
  'table-row-group' | 'table-cell' | 'table-column' | 'table-row' | 'none' | 'initial' |
  'inherit';

  fontSize?: string | number;
  maxW?: string | number;
  w?: string | number;
  h?: string | number;
  maxH?: string | number;
  p?: string | number;
  pt?: string | number;
  pr?: string | number;
  pb?: string | number;
  pl?: string | number;
  mt?: string | number;
  mr?: string | number;
  mb?: string | number;
  ml?: string | number;
  radius?: string | number;
  borderW?: string | number;
  bg?: string;
  color?: string;
  overflow?: 'visible' | 'hidden' | 'scroll' | 'auto' | 'initial' | 'inherit'
}