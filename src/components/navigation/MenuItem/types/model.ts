import { Element } from "../../../../utils/global.model";

export type MenuItemProps = {
  label: string;
  labelClass?: string;
  underliner?: boolean;
  underlinerOrigin?: "left" | "center" | "right";
  underlinerClass?: string;
  className?: string;
  icon?: Element;
  iconPosition?: "left" | "top" | "right" | "bottom";
  iconClass?: string;
  uppercase?: boolean;
  onClick?: (e: React.BaseSyntheticEvent) => void;
  onMouseEnter?: (e: React.BaseSyntheticEvent) => void;
  onMouseLeave?: (e: React.BaseSyntheticEvent) => void;
  onTouchStart?: (e: React.BaseSyntheticEvent) => void;
  onTouchEnd?: (e: React.BaseSyntheticEvent) => void;
  onTouchCancel?: (e: React.BaseSyntheticEvent) => void;
  animationDuration?: number;
  clickClass?: string;
};
