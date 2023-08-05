import { StyleClassType } from "../../../utils";

export type ref = React.RefObject<HTMLDivElement>;
export type BasicHamburgerProps = {
  prohibitAnimation?: boolean;
  show?: boolean;
  lineType?: "sharp" | "rounded";
  styleClass?: {
    root?: StyleClassType["root"]
  }
  color?: string;
  onConfig?: confOn;
  offConfig?: confOff;
  onClick?: () => void;
};
export type confOn = {
  ease?: string | gsap.EaseFunction;
  duration?: number;
  middleDuration?: number;
  delay?: number;
};

export type confOff = {
  ease?: string | gsap.EaseFunction;
  duration?: number;
  middleDuration?: number;
  delay?: number;
  middleDelay?: number;
  line2Height?: number;
};
