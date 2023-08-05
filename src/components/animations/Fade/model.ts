import { Element, FadeInConfig, FadeOffConfig, StyleClassType } from "../../../utils";

export type FadeProps = {
  onEnd?: (type: "on" | "off") => void;
  styleClass?: {
    root?: StyleClassType["root"]
  }
  on?: boolean;
  appear?: boolean;
  configIn?: FadeInConfig;
  configOff?: FadeOffConfig;
  children: Element;
};
