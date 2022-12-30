import { BulletType } from "../../../shapes/BulletShape/types/model";
import { Element } from "../../../../utils";

export type BulletTextProps = {
  className?: string;
  bulletClass?: string;
  bulletType?: BulletType;
  bulletSize?: number;
  children: Element;
};
