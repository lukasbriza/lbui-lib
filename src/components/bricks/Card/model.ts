import { Element, StyleClassType } from "../../../utils";

export type CardProps = {
  body: Element;
  description?: Element;
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
  styleClass?: {
    root?: StyleClassType["root"];
    childrenWrapper?: StyleClassType["childrenWrapper"]
  }
};
