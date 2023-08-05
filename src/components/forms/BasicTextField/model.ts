import { Control } from "react-hook-form";
import { DefaultInputProps } from "../../../utils";

export type BasicTextFieldProps = {
  rootFilledClass?: string;
  rootFocusedClass?: string;
  inputFocusClass?: string;
  inputFilledClass?: string;
  errorRootClass?: string;
  password?: boolean;
  value?: string;
} & DefaultInputProps;
