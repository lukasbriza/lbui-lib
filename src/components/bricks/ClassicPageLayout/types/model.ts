import { Element } from "../../../../utils/global.model";

export type ClassicPageLayoutProps = {
  children: Element;
  menu?: Element;
  footer?: Element;
  menuClass?: string;
  bodyClass?: string;
  footerClass?: string;
  maxWidth?: number;
  options?: {
    stickyMenu?: boolean;
    hideMenuOnScroll?: boolean;
  };
};
