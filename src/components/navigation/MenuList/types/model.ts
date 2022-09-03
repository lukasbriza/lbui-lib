import { Element } from "../../../../utils/global.model";

export type MenuListProps = {
  children: Element | Element[];
  orientation?: "onWidth" | "onHeight";
  className?: string;
};
