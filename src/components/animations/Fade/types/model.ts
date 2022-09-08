import { Element, FadeInConfig, FadeOffConfig } from "../../../../utils/global.model";

export type FadeProps = {
  onEnd?: (type: "on" | "off") => void;
  className?: string;
  on?: boolean;
  appear?: boolean;
  configIn?: FadeInConfig;
  configOff?: FadeOffConfig;
  children: Element;
};
