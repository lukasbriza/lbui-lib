import { StyleClassType } from "../../../utils";

export type BulletProps = {
  styleClass?: {
    root?: StyleClassType["root"]
  }
  type?: BulletType;
  color?: string;
  size?: number;
};

export type BulletType = "round" | "square" | "diamond";
