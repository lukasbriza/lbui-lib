import { Element, ShrinkConfig, StretchConfig } from "../../../../utils/global.model";

export type UnderliningProps = {
  className?: string;
  lineClass?: string;
  hoverable?: boolean;
  stretchConfig?: StretchConfig;
  shrinkConfig?: ShrinkConfig;
  on?: boolean;
  origin?: "left" | "center" | "right";
  children: Element;
};
