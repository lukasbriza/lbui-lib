import { StyleClassType } from "../../../utils";

export type ArrowShapeProps = {
  styleClass?: {
    root?: StyleClassType["root"]
  }
  lineWidth?: number;
  lineHeight?: number;
  color?: string;
  rounded?: boolean;
  className?: string;
};
