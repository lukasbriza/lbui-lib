import { Control } from "react-hook-form";
import { DefaultInputProps } from "../../../../utils/global.model";

export type FilledTextFieldProps = {
  lineClass?: string;
  lineFocusClass?: string;
  lineFilledClass?: string;
  errorLineClass?: string;
  lineOrigin?: "center" | "left" | "right";
} & DefaultInputProps;

export type FilledTextFieldHRProps = {
  control: Control<any, any>;
  defaultValue?: unknown;
} & FilledTextFieldProps;
