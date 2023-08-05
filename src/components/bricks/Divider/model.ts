import { StyleClassType } from "../../../utils";

export type DividerProps = {
  styleClass?: {
    root?: StyleClassType["root"]
  }
  depth?: number;
  fullWidth?: boolean;
  width?: number;
  color?: string;
};
