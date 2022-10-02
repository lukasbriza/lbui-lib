export type ref = React.RefObject<HTMLDivElement>;
export type BasicHamburgerProps = {
  prohibitAnimation?: boolean;
  show?: boolean;
  lineType?: "sharp" | "rounded";
  className?: string;
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
