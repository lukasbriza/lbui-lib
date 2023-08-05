import { Element } from "../../../utils";

export type HelperTextProps = {
  children: Element;
  text: string;
  errorText?: string;
  show?: boolean;
  showWithanimation?: boolean;
  className?: string;
  helperClass?: string;
  position?: "left" | "top" | "right" | "bottom";
  error?: boolean;
  errorClass?: string;
};
