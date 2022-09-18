import React, { ReactNode } from "react";

export type GsapSelector = string | HTMLElement;

export type Element = ReactNode;
export type Sizes = "small" | "medium" | "large";
export type ExtSizes = "small" | "medium" | "large" | number;
export type Variants = "bold" | "italic" | "underline" | "default";
export type TypographyTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body" | "span" | "p";
export type TypographyType =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "subtitle1"
  | "subtitle2"
  | "body1"
  | "body2"
  | "buttonText";
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
  ease?: gsap.EaseFunction;
};

export type FadeOffConfig = FadeInConfig;

export type StretchConfig = {
  duration?: number;
  ease?: gsap.EaseFunction;
  width?: string;
};
export type ShrinkConfig = StretchConfig;
