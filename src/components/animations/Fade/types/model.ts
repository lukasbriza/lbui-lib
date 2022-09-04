import { Element, FadeInConfig, FadeOffConfig } from "../../../../utils/global.model";

export type FadeProps = {
  on?: boolean;
  appear?: boolean;
  configIn?: FadeInConfig;
  configOff?: FadeOffConfig;
  children: Element;
};
