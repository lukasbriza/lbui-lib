import { Control } from "react-hook-form";
import { DefaultInputProps } from "../../../utils/global.model";

export type FilledTextFieldProps = {
  password?: boolean;
  lineClass?: string;
  lineFocusClass?: string;
  lineFilledClass?: string;
  errorLineClass?: string;
  rootFilledClass?: string;
  rootFocusedClass?: string;
  inputFocusClass?: string;
  inputFilledClass?: string;
  errorRootClass?: string;
  lineOrigin?: "center" | "left" | "right";
  value?: string;
} & DefaultInputProps;
