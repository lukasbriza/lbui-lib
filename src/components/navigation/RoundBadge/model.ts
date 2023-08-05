import { Element, StyleClassType } from "../../../utils";
export type RoundBadgeProps = {
  styleClass?: {
    root?: StyleClassType["root"]
    node?: StyleClassType["node"]
    hoverNode?: StyleClassType["hover"]
  }
  onClick?: (e: React.BaseSyntheticEvent) => void;
  onHover?: (e: React.BaseSyntheticEvent) => void;
  onMouseEnter?: (e: React.BaseSyntheticEvent) => void;
  onMouseLeave?: (e: React.BaseSyntheticEvent) => void;
  onTouchStart?: (e: React.BaseSyntheticEvent) => void;
  onTouchEnd?: (e: React.BaseSyntheticEvent) => void;
  onTouchCancel?: (e: React.BaseSyntheticEvent) => void;
  defaultNode: Element;
  hoverNode: Element;
  transition?: boolean;
  transitionStyle?: "fade" | "slideTop" | "slideDown" | "slideLeft" | "slideRight";
  transitionDuration?: number;
};
