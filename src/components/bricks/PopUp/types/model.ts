import React from "react";
import { Directions, Element, GsapSelector, Props } from "../../../../utils";

export enum PopUpType {
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
  INFO = "INFO",
  WARNING = "WARNING",
}

export type PopUpProviderProps = {
  portalPosition?: ["center" | "left" | "right", "center" | "up" | "bottom"];
  children: Element;
  OwnComponent?: OwncomponentType;
  portalClass?: string;
};

export type ShowPopUpProps = Omit<PopUpProps, "hookId" | "unMount" | "portalPosition">;

export type PopUpContextProps = {
  show: (props?: ShowPopUpProps) => void;
  unMount: (id: string) => void;
  ids: string[];
};

export type OwncomponentType =
  | React.FC<PopUpProps>
  | React.JSXElementConstructor<PopUpProps>
  | React.ForwardRefExoticComponent<PopUpProps & React.RefAttributes<any>>;

export type PopUpProps = {
  header?: string;
  text?: string;
  className?: string;
  leaveAnimation?: (selector: GsapSelector, from: Directions) => gsap.core.Tween;
  enterAnimation?: (selector: GsapSelector, from: Directions) => gsap.core.Tween;
  type?: PopUpType;
  typeClassOption?: {
    [PopUpType.SUCCESS]?: string;
    [PopUpType.ERROR]?: string;
    [PopUpType.INFO]?: string;
    [PopUpType.WARNING]?: string;
  };
  typeIcon?: {
    [PopUpType.SUCCESS]?: Element;
    [PopUpType.ERROR]?: Element;
    [PopUpType.INFO]?: Element;
    [PopUpType.WARNING]?: Element;
  };
  enterDirection?: Directions;
  leaveDirection?: Directions;
  timeoutOption?: {
    enable?: boolean;
    timeout?: number;
    timeoutLine?: boolean;
    timeoutLineClass?: string;
  };
  closeOnClick?: boolean;
  cross?: boolean;
  crossClass?: string;
  onClose?: () => void;
  onClick?: (e?: React.SyntheticEvent) => void;
  portalPosition: ["center" | "left" | "right", "center" | "up" | "bottom"];
  hookId: string;
} & Pick<PopUpContextProps, "unMount"> &
  Props<HTMLElement>;
