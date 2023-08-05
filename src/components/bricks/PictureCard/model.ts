import { Element, StyleClassType } from "../../../utils";

export type PictureCardProps = {
  styleClass?: {
    root?: StyleClassType["root"]
    layer?: StyleClassType["layer"]
    image?: StyleClassType["image"]
  }
  elevation?:
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24;
  square?: boolean;
  src: any;
  body: Element;
  imgComponent?: Element;
};

export type BackgroundTypes = {
  src: string;
  className?: string;
  layerClass?: string;
  children?: Element;
  imgComponent?: Element;
};
