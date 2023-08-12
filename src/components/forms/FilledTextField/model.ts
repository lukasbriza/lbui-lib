import { StyleClassType } from "../../../utils";
import { BasicInputProps } from "../BasicInput/model";

export type FilledTextFieldProps = {
  name: string;
  label: string;
  password?: boolean;
  styleClass?: {
    line?: StyleClassType["line"],
    focusLine?: StyleClassType["line"]
    fillLine?: StyleClassType["line"]
    errorLine?: StyleClassType["line"]
  } & BasicInputProps["styleClass"]
  value?: string;
  lineOrigin?: "center" | "left" | "right";
  autoComplete?: "on" | "off";
  isError?: boolean;
} & Omit<BasicInputProps, "label" | "type" | "children">