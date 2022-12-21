import { CheckboxDefaultProps } from "../../../../utils/global.model";
import { Control } from "react-hook-form";

export type CheckboxSquaredProps = {
  checkerClass?: string;
  animate?: boolean;
  clickEffect?: boolean;
  clickEffectClass?: string;
} & CheckboxDefaultProps;

export type CheckboxSquaredHFProps = {
  control: Control<any, any>;
} & CheckboxSquaredProps;
