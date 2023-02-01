import { Control } from "react-hook-form";
import { DefaultInputProps } from "../../../../utils/global.model";

export type BasicTextFieldProps = {
  rootFilledClass?: string;
  rootFocusedClass?: string;
  inputFocusClass?: string;
  inputFilledClass?: string;
  errorRootClass?: string;
  password?: boolean;
} & DefaultInputProps;

export type BasicTextFieldHRProps = {
  password?: boolean;
  control: Control<any, any>;
} & BasicTextFieldProps;
