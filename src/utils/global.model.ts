import React, { DetailedHTMLProps, HTMLAttributes, InputHTMLAttributes, LabelHTMLAttributes, ReactNode } from "react";

export type Directions = "up" | "bottom" | "left" | "right";
export type Element = ReactNode;
export type Sizes = "small" | "medium" | "large";
export type ExtSizes = Sizes | number;
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

export type Option = { key: string; value: string; }
export type StyleClassType = {
  root?: string;
  line?: string;
  bullet?: string;
  childrenWrapper?: string;
  footer?: string;
  menu?: string;
  body?: string;
  modal?: string;
  header?: string;
  text?: string;
  button?: string;
  layer?: string;
  image?: string;
  portal?: string;
  cross?: string;
  content?: string;
  underliner?: string;
  hover?: string;
  onClick?: string;
  label?: string;
  icon?: string;
  node?: string;
  error?: string;
  input?: string;
  focus?: string;
  fill?: string;
  blur?: string;
  checkBox?: string;
  option?: string;
  select?: string;
}
export type Props<T> = React.HTMLAttributes<T>;

//BUTTON
export type DefaultButtonProps = {
  label: string;
  size?: ExtSizes;
  onClick: (e: React.BaseSyntheticEvent) => void;
  styleClass?: {
    root?: StyleClassType["root"]
    label?: StyleClassType["label"]
    hover?: StyleClassType["hover"]
    onClick?: StyleClassType["onClick"]
  }
  modificationClickClassDelay?: number;
  modificationClickClassDelayRemove?: number;
  disabled?: boolean;
  color?: string;
  textColor?: string;
  startIcon?: Element;
  endIcon?: Element;
};



//ANIMATION TYPES
type easeType = gsap.EaseFunction | string;

export type FadeInConfig = {
  delay?: number;
  duration?: number;
  ease?: easeType;
};

export type FadeOffConfig = FadeInConfig;

export type StretchConfig = {
  duration?: number;
  ease?: easeType;
  width?: string;
};
export type ShrinkConfig = StretchConfig;

export type TurnToConfig = {
  duration?: number;
  ease?: easeType;
};

export type SlideFromConfig = {
  duration?: number;
  ease?: easeType;
  fromLocation?: string;
};

export type SlideToConfig = {
  toLocation?: string;
} & Pick<SlideFromConfig, "duration" | "ease">;

//UNIFORM DETAILED PROPS
export type DetailedInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
export type DetailedLabelProps = DetailedHTMLProps<
  LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
>;
export type DetailedDivElement = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;
