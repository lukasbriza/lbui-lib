import { CheckboxDefaultProps, Element } from "../../../../utils/global.model";

export type CheckboxProps = {
  checker: Element;
  clickEffect?: boolean;
  clickEffectClass?: string;
} & CheckboxDefaultProps;
