import { TypographyTag, Sizes, Variants, Element, TypographyType } from "../../../../utils/global.model";

export type TypographyContextProps = {
  [key in TypographyType]: { class: string; component: TypographyTag };
};
export type TypographyChildren = { children: Element };
export type TypographyProps = {
  type: TypographyType;
  component?: TypographyTag;
  size?: Sizes;
  variant?: Variants[];
  className?: string;
};
