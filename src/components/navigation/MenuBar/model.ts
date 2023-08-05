import { ReactNode } from "react";
import { StyleClassType } from "../../../utils";

export type MenuBarProps = {
  styleClass?: {
    root?: StyleClassType["root"]
  }
  children: ReactNode | ReactNode[];
};
