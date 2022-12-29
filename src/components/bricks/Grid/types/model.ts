import { Element } from "../../../../utils/global.model";

export type GridProps = {
  children: Element | Element[];
  className?: string;
  justifyItems?: "start" | "center" | "end";
  justifyContent?: "center" | "start" | "end" | "space-between" | "space-around" | "space-evenly";
  gap?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  rowGap?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  columnGap?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  colNumber?: number;
  tileWidth?: number;
};
