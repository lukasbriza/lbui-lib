import React from "react";
import "./scss/Button.scss";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <button>{props.label}</button>;
};

export { Button };
