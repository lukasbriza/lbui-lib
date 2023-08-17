
import { Control } from "react-hook-form";
import { CheckboxProps } from "../Checkbox/model";
import { StyleClassType } from "../../../utils";

export type CheckboxSquaredProps = {
  name: string;
  label: string;
  animate?: boolean;
  clickEffect?: boolean;
  styleClass?: {
    root?: StyleClassType["root"],
    input?: StyleClassType["input"]
    checkBox?: StyleClassType["checkBox"],
    text?: StyleClassType["text"]
    click?: StyleClassType["onClick"]
    checker?: StyleClassType["body"]
  }
  checked?: CheckboxProps["checked"]
  labelSensitive?: boolean
}