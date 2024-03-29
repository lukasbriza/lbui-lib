import React from "react";
import { Element, StyleClassType } from "../../../utils";

export type ModalProviderProps = {
  children: Element;
};

export type ModalProps = {
  styleClass?: {
    root?: StyleClassType["root"]
    modal?: StyleClassType["modal"]
    header?: StyleClassType["header"]
    text?: StyleClassType["text"]
    button?: StyleClassType["button"]
  }
  header?: string;
  text?: string;
  buttonText?: string;
  button?: boolean;
  timeout?: number;
  headerComponent?: Element;
  textComponent?: Element;
  buttonComponent?: Element;
  rounded?: boolean;
  transition?: boolean;
  closeOnOutsideClick?: boolean;
  onClick?: (e: React.BaseSyntheticEvent) => void;
};

export type ModalCompProps = Omit<ModalProps, "timeout">;

export type ModalContextProps = {
  show: (props?: ModalProps) => void;
  close: () => void;
  setComponent: React.Dispatch<React.SetStateAction<Element | undefined>>;
  component?: Element | undefined;
  isActive: boolean;
};
