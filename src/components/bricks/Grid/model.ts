import { Element, StyleClassType } from "../../../utils";

export type GridProps = {
  styleClass?: {
    root?: StyleClassType["root"]
  }
  children: Element | Element[];
  justifyItems?: "start" | "center" | "end";
  justifyContent?: "center" | "start" | "end" | "space-between" | "space-around" | "space-evenly";
  gap?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  rowGap?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | number;
  columnGap?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | number;
  colNumber?: number;
  tileWidth?: number;
};
