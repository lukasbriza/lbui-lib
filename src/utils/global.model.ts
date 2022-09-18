import React, { ReactNode, MutableRefObject } from "react";

export type GsapSelector = string | HTMLElement;

export type Element = ReactNode;
export type Sizes = "small" | "medium" | "large";
export type ExtSizes = "small" | "medium" | "large" | number;
export type Props<T> = React.HTMLAttributes<T>;

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
  ease?: gsap.EaseFunction | "linear";
};

export type FadeOffConfig = FadeInConfig;

export type StretchConfig = {
  duration?: number;
  ease?: gsap.EaseFunction | "linear";
  width?: string;
};
export type ShrinkConfig = StretchConfig;

export type TurnToConfig = {
  duration?: number;
  ease?: gsap.EaseFunction | "linear";
};
