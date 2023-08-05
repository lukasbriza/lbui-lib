import { BulletType } from "../../shapes/BulletShape/model";
import { Element, StyleClassType } from "../../../utils";

export type BulletTextProps = {
  styleClass?: {
    root?: StyleClassType["root"];
    bullet?: StyleClassType["bullet"]
  }
  bulletType?: BulletType;
  bulletSize?: number;
  children: Element;
};
