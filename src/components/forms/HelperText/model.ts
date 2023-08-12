import { Element, StyleClassType } from "../../../utils";

export type HelperTextProps = {
  styleClass?: {
    root: StyleClassType["root"],
    text: StyleClassType["text"],
    errorText: StyleClassType["text"]
  }
  options?: {
    animation?: boolean;
  }
  children: Element;
  text: string;
  errorText?: string;
  show?: boolean;
  position?: "left" | "top" | "right" | "bottom";
  isError?: boolean;
};
