import React, {
  ChangeEvent,
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { MaskInputProps } from "./model";
import { BasicInput } from "../BasicInput/BasicInput";
import { Masked, createMask } from "imask/esm/index";

export const MaskInput = forwardRef<HTMLInputElement, MaskInputProps>(
  (props, ref) => {
    const { maskOptions, inputProps, onChange, ...otherProps } = props;
    const { defaultValue, value, ...otherInputProps } = inputProps ?? {};

    const mask = useMemo(
      () => createMask<Masked>({ ...maskOptions }),
      [maskOptions]
    );

    const [innerValue, setInnerValue] = useState<string>(mask.value);

    useEffect(() => {
      mask.resolve(defaultValue ? String(defaultValue) : "");
    }, [defaultValue]);

    const handleChange = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        mask.resolve(e.target.value);
        setInnerValue(mask.value);
        e.target.value = mask.value;
        onChange?.(e);
      },
      [onChange, mask, innerValue]
    );

    return (
      <BasicInput
        ref={ref}
        onChange={handleChange}
        inputProps={{
          ...otherInputProps,
          value: innerValue,
        }}
        {...otherProps}
      />
    );
  }
);
