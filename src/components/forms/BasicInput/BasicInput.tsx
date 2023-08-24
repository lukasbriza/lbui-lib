import "./BasicInput.scss";

import React, {
  ChangeEvent,
  FocusEvent,
  forwardRef,
  useEffect,
  useState,
} from "react";
import { nextEffectSanitized } from "../../../utils";
import clsx from "clsx";
import { useLibClass } from "../../../hooks";
import { BasicInputProps } from "./model";

const COMP_PREFIX = "BasicInput";
const useClass = (className: string) => {
  return useLibClass(COMP_PREFIX, className);
};

/**
 * BasicInput component
 */

export const BasicInput = forwardRef<HTMLInputElement, BasicInputProps>(
  (props, ref) => {
    const {
      type = "text",
      name,
      label,
      labelProps,
      inputProps,
      rootProps,
      styleClass,
      isError,
      onFocus,
      onChange,
      onBlur,
      onStateChange,
      children,
    } = props;

    const [focused, setFocused] = useState<boolean>(false);
    const [filled, setFilled] = useState<boolean>(false);

    const handleInputFocus = (e: FocusEvent<HTMLInputElement>) => {
      setFocused(true);
      onFocus?.(e);
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      setFilled(Boolean(e.target.value) && e.target.value !== "");
      onChange?.(e);
    };

    const handleInputBlur = (e: FocusEvent<HTMLInputElement>) => {
      setFocused(false);
      onBlur?.(e);
    };

    useEffect(() => {
      if (nextEffectSanitized()) {
        onStateChange?.({ filled, focused });
      }
    }, [filled, focused]);

    useEffect(() => {
      if (nextEffectSanitized()) {
        if (inputProps?.defaultValue) {
          String(inputProps.defaultValue).length > 0 && setFilled(true);
        }
        if (inputProps?.value) {
          String(inputProps.value).length > 0 && setFilled(true);
        }
      }
    }, []);

    return (
      <div
        className={clsx([
          useClass("root"),
          styleClass?.root,
          isError && styleClass?.errorRoot,
          focused && styleClass?.focusRoot,
          filled && styleClass?.fillRoot,
        ])}
        {...rootProps}
      >
        {label && (
          <label
            htmlFor={name}
            className={clsx([
              useClass("label"),
              styleClass?.label,
              isError && styleClass?.errorLabel,
              focused && styleClass?.focusLabel,
              filled && styleClass?.fillLabel,
            ])}
            {...labelProps}
          >
            {label}
          </label>
        )}
        <input
          {...inputProps}
          name={name}
          type={type}
          ref={ref}
          onFocus={handleInputFocus}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          className={clsx([
            useClass("input"),
            styleClass?.input,
            isError && styleClass?.errorInput,
            focused && styleClass?.focusInput,
            filled && styleClass?.fillInput,
          ])}
        />
        {children && children({ filled, isError, focused })}
      </div>
    );
  }
);
