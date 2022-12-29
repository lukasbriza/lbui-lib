import { TypographyTag, Sizes, Variants, Element, TypographyType } from "../../../../utils/global.model";

export type TypographyContextProps = {
  [key in TypographyType]: { class: string; component: TypographyTag };
} &
  CustomClassesType;
export type TypographyProviderProps = {
  children: Element;
  fonts?: Array<string>;
} & CustomClassesType;

export type CustomClassesType = {
  settings?: {
    type?: {
      [key in TypographyType]?: {
        [key in Sizes]?: string;
      } & { baseClass?: string };
    };
    variants?: { [key in Variants]?: string };
  };
};

export type TypographyProps = {
  type: TypographyType;
  component?: TypographyTag;
  size?: Sizes;
  variant?: Variants[];
  className?: string;
};
