import { Element } from "../../../../utils/global.model";
export type RoundBadgeProps = {
  defaultNode: Element;
  hoverNode: Element;
  transition?: boolean;
  transitionStyle?: "fade" | "slideTop" | "slideDown" | "slideLeft" | "slideRight";
  className?: string;
  transitionClass?: string;
};
