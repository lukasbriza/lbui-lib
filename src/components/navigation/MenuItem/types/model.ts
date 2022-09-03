import { Element } from "../../../../utils/global.model";

export type MenuItemProps = {
  label: string;
  underliner?: boolean;
  underlinerOrigin?: "left" | "center" | "right";
  underlinerClass?: string;
  className?: string;
  labelClass?: string;
  icon?: Element;
  iconPosition?: "left" | "top" | "right" | "bottom";
  uppercase?: boolean;
};
