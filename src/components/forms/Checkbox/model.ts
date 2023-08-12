import { DetailedHTMLProps, LabelHTMLAttributes } from "react";
import { Element, StyleClassType } from "../../../utils";

type DetailedLabelProps = DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>

export type CheckboxProps = {
  styleClass?: {
    root?: StyleClassType["root"],
    input?: StyleClassType["input"]
    checkBox?: StyleClassType["checkBox"],
    text?: StyleClassType["text"]
    click?: StyleClassType["onClick"]
  }
  checked: boolean
  name: string;
  label: Element;
  checker: Element;
  clickEffect?: boolean;
  labelProps?: Omit<DetailedLabelProps, "htmlFor" | "className">
} 
