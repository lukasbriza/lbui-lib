import { CheckboxDefaultProps } from "../../../../utils/global.model";
import { Control } from "react-hook-form";

export type CheckboxSquaredProps = {
  checkerClass?: string;
  animate?: boolean;
} & CheckboxDefaultProps;

export type CheckboxSquaredHFProps = {
  control: Control<any, any>;
} & CheckboxSquaredProps;
