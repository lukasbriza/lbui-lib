import { Element, StyleClassType } from "../../../utils";

export type MenuListProps = {
  children: Element | Element[];
  styleClass?: {
    root?: StyleClassType["root"]
  }
  orientation?: "onWidth" | "onHeight";
};
