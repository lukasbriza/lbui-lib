import React from "react";
import { Element } from "../../../../utils/global.model";
export type ModalProviderProps = {
  children: Element;
};

export type ModalProps = {
  header?: string;
  text?: string;
  buttonText?: string;
  button?: boolean;
  timeout?: number;
  headerComponent?: Element;
  textComponent?: Element;
  buttonComponent?: Element;
  rootClass?: string;
  modalClass?: string;
  buttonClass?: string;
  textClass?: string;
  headerClass?: string;
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
