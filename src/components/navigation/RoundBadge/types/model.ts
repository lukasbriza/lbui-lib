import { Element } from "../../../../utils/global.model";
export type RoundBadgeProps = {
  onClick?: (e: React.BaseSyntheticEvent) => void;
  onHover?: (e: React.BaseSyntheticEvent) => void;
  onMouseEnter?: (e: React.BaseSyntheticEvent) => void;
  onMouseLeave?: (e: React.BaseSyntheticEvent) => void;
  onTouchStart?: (e: React.BaseSyntheticEvent) => void;
  onTouchEnd?: (e: React.BaseSyntheticEvent) => void;
  onTouchCancel?: (e: React.BaseSyntheticEvent) => void;
  defaultNode: Element;
  defaultNodeclass?: string;
  hoverNode: Element;
  hoverNodeClass?: string;
  transition?: boolean;
  transitionStyle?: "fade" | "slideTop" | "slideDown" | "slideLeft" | "slideRight";
  className?: string;
  transitionClass?: string;
  transitionDuration?: number;
};
