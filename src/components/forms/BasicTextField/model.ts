import { BasicInputProps } from "../BasicInput/model";

export type BasicTextFieldProps = {
  name: string;
  label: string;
  value?: string;
  defaultValue?: string;
  isError?: boolean;
  styleClass: BasicInputProps["styleClass"]
  autoComplete?: "on" | "off";
  password?: boolean;
} & Omit<BasicInputProps, "label" | "type">
