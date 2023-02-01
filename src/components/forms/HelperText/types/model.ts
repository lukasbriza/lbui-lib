import { Element } from "../../../../utils/global.model";

export type HelperTextProps = {
  children: Element;
  text: string;
  errorText?: string;
  show?: boolean;
  showTextOnError?: boolean;
  showWithanimation?: boolean;
  className?: string;
  helperClass?: string;
  position?: "left" | "top" | "right" | "bottom";
  error?: boolean;
  errorClass?: string;
};
