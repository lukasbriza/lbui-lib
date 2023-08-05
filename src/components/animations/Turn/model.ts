import { Element, StyleClassType, TurnToConfig } from "../../../utils";

export type TurnProps = {
  on: boolean;
  base: number;
  to: number;
  children: Element;
  appear?: boolean;
  configOn?: TurnToConfig;
  configOff?: TurnToConfig;
  onEnd?: (type: "on" | "off") => void;
  styleClass?: {
    root: StyleClassType["root"]
  }
};
