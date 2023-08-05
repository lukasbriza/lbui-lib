import { Element, StyleClassType } from "../../../utils";

export type MenuItemProps = {
  styleClass?: {
    root?: StyleClassType["root"]
    label?: StyleClassType["label"]
    icon?: StyleClassType["icon"]
    undeliner?: StyleClassType["underliner"]
    onClick?: StyleClassType["onClick"]
  }
  label: string;
  underliner?: boolean;
  underlinerOrigin?: "left" | "center" | "right";
  icon?: Element;
  iconPosition?: "left" | "top" | "right" | "bottom";
  uppercase?: boolean;
  onClick?: (e: React.BaseSyntheticEvent) => void;
  onMouseEnter?: (e: React.BaseSyntheticEvent) => void;
  onMouseLeave?: (e: React.BaseSyntheticEvent) => void;
  onTouchStart?: (e: React.BaseSyntheticEvent) => void;
  onTouchEnd?: (e: React.BaseSyntheticEvent) => void;
  onTouchCancel?: (e: React.BaseSyntheticEvent) => void;
  animationDuration?: number;
};
