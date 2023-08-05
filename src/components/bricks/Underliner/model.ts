import { Element, StyleClassType } from "../../../utils";
export type UnderlinerProps = {
  children: Element;
  depth?: number;
  color?: string;
  fullWidth?: boolean;
  width?: number;
  styleClass?: {
    root?: StyleClassType["root"]
    underliner?: StyleClassType["underliner"]
  }
};
