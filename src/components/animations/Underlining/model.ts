import { Element, ShrinkConfig, StretchConfig, StyleClassType } from "../../../utils";

export type UnderliningProps = {
  styleClass?: {
    root?: StyleClassType["root"]
    line?: StyleClassType["line"]
  }
  hoverable?: boolean;
  stretchConfig?: StretchConfig;
  shrinkConfig?: ShrinkConfig;
  on?: boolean;
  origin?: "left" | "center" | "right";
  children: Element;
};
