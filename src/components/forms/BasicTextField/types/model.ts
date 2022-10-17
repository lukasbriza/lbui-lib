import { Control } from "react-hook-form";
import { DefaultInputProps } from "../../../../utils/global.model";

export type BasicTextFieldProps = DefaultInputProps;

export type BasicTextFieldHRProps = {
  control: Control<any, any>;
  defaultValue?: unknown;
} & BasicTextFieldProps;
