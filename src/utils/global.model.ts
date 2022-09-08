import { ReactNode } from "react";

export type Element = ReactNode;
export type Sizes = "small" | "medium" | "large";
export type ExtSizes = "small" | "medium" | "large" | number;

export type DefaultButtonProps = {
  label: string;
  size?: ExtSizes;
  onClick: (e: React.BaseSyntheticEvent) => void;
  hoverClass?: string;
  modificationClass?: string;
  modificationClickClass?: string;
  modificationClickClassDelay?: number;
  modificationClickClassDelayRemove?: number;
  disabled?: boolean;
  color?: string;
  textColor?: string;
  startIcon?: Element;
  endIcon?: Element;
};

//ANIMATION TYPES
export type FadeInConfig = {
  delay?: number;
  duration?: number;
  ease?: gsap.EaseFunction;
};

export type FadeOffConfig = FadeInConfig;
