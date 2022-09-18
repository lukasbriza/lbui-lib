import { Element, TurnToConfig } from "../../../../utils/global.model";

export type TurnProps = {
  on: boolean;
  appear?: boolean;
  className?: string;
  configOn?: TurnToConfig;
  configOff?: TurnToConfig;
  onEnd?: (type: "on" | "off") => void;
  base: number;
  to: number;
  children: Element;
};
