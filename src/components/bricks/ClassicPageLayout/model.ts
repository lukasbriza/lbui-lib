import { Element, StyleClassType } from "../../../utils";

export type ClassicPageLayoutProps = {
  styleClass?: {
    root?: StyleClassType["root"]
    menu?: StyleClassType["menu"]
    body?: StyleClassType["body"]
    footer?: StyleClassType["footer"]
  }
  children: Element;
  menu?: Element;
  footer?: Element;
  maxWidth?: number;
  options?: {
    stickyMenu?: boolean;
    hideMenuOnScroll?: boolean;
  };
};
