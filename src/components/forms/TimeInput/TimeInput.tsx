import "./TimeInput.scss";

import React, {
  FC,
  forwardRef,
  useImperativeHandle,
  useState,
  FocusEvent,
  useEffect,
  ChangeEvent,
  useRef,
} from "react";
import clsx from "clsx";
import { useLibClass } from "../../../hooks";
import { TimeInputForwardedref, TimeInputProps } from "./model";
import { BasicInput } from "../BasicInput/BasicInput";
import { OptionScroller } from "../../bricks/OptionScroller/OptionScroller";
import { Option, mergeRefs } from "../../../utils";

import IMask, { InputMask, MaskedRange } from "imask/esm/index";

const COMP_PREFIX = "TimeInput";
const useClass = (className: string) => {
  return useLibClass(COMP_PREFIX, className);
};

/*
export const TimeInput: FC<TimeInputProps> = forwardRef<
  TimeInputForwardedref,
  TimeInputProps
>((props, ref) => {
  const {
    name,
    label,
    defaultValue,
    styleClass,
    minutes,
    hours,
    options,
    icon,
    isError,
    onBlur,
    onFocus,
    onChange,
    inputProps,
    ...otherProps
  } = props;
  const { showOptionsOnfocus = false, closeOnOutsideClick = false } =
    options ?? {};
  const {
    scroller,
    option,
    column,
    errorScroller,
    icon: iconClass,
    ...restStyleClasses
  } = styleClass ?? {};

  const hoursFrom = hours?.from ?? 1;
  const hoursTo = hours?.to ?? 23;
  const minutesFrom = minutes?.from ?? 0;
  const minutesTo = minutes?.to ?? 59;

  const minutesOptions = new Array(Math.abs(minutesTo - minutesFrom) + 1)
    .fill(0)
    .map((_, index) => ({
      key: String(index),
      value: String(minutesFrom + index),
    }));
  const hoursOptinons = new Array(Math.abs(hoursFrom - hoursTo) + 1)
    .fill(0)
    .map((_, index) => ({
      key: String(index),
      value: String(hoursFrom + index),
    }));

  const [show, setShow] = useState<boolean>(false);
  //const [value,setValue] = useState<string>(defaultValue)

  const {
    ref: maskReference,
    value,
    setValue,
    setTypedValue,
  } = useIMask(
    {
      mask: "HH:MM",
      blocks: {
        HH: {
          mask: IMask.MaskedRange,
          from: hoursFrom,
          to: hoursTo,
        },
        MM: {
          mask: IMask.MaskedRange,
          from: minutesFrom,
          to: minutesTo,
        },
      },
    },
    {
      onAccept(value, _, e) {
        console.log(e);
        e && onChange?.(e as unknown as ChangeEvent<HTMLInputElement>);
      },
    }
  );
  const scrollerOptions = [hoursOptinons, minutesOptions];

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    e.preventDefault();
    onBlur?.(e);
    setShow(false);
  };
  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    e.preventDefault();
    onFocus?.(e);
    showOptionsOnfocus && setShow(true);
  };

  const handleIconclick = (e: React.BaseSyntheticEvent) => {
    e.preventDefault();
    setShow((value) => !value);
  };

  const handleClickOutside = () => {
    closeOnOutsideClick && setShow(false);
  };

  const handleSelect = (option: Option) => {
    const column = Number(option.key.split("-")[1]);
    const injectValue =
      Number(option.value) <= 9
        ? `0${Number(option.value)}`
        : Number(option.value).toString();
    const actualValue = value
      .split(":")
      .map((val, i) => (val ? val : i === 0 ? "01" : "00"));
    setValue(
      `${column === 0 ? injectValue : actualValue[0]}:${
        column === 1 ? injectValue : actualValue[1]
      }`
    );
  };

  useImperativeHandle(
    ref,
    () => {
      return {
        current: maskReference.current,
      };
    },
    [maskReference]
  );

  useEffect(() => {
    setTypedValue(defaultValue ?? "01:00");
  }, []);

  return (
    <>
      <BasicInput
        label={label}
        name={name}
        isError={isError}
        ref={(node) => (maskReference.current = node)}
        type="text"
        styleClass={{
          ...restStyleClasses,
          root: clsx([useClass("root"), styleClass?.root]),
          input: clsx([useClass("input")], styleClass?.input),
        }}
        onFocus={handleFocus}
        onBlur={handleBlur}
        inputProps={{
          ...inputProps,
          autoComplete: "off",
        }}
        {...otherProps}
      >
        {() => (
          <div
            onClick={handleIconclick}
            className={clsx([useClass("icon"), iconClass])}
          >
            {icon ? icon : <Icon />}
          </div>
        )}
      </BasicInput>
      <OptionScroller
        onClickOutside={handleClickOutside}
        onSelect={handleSelect}
        show={show}
        hook={
          (maskReference?.current as HTMLElement | null)
            ?.parentNode as HTMLElement | null
        }
        options={scrollerOptions}
        styleClass={{
          root: scroller,
          option: option,
          columnSection: column,
          error: clsx([isError && errorScroller]),
        }}
      />
    </>
  );
});
*/

type MaskType = InputMask<{
  mask: string;
  blocks: {
    HH: {
      mask: typeof MaskedRange;
      from: number;
      to: number;
    };
    MM: {
      mask: typeof MaskedRange;
      from: number;
      to: number;
    };
  };
}> | null;

export const TimeInput = forwardRef<HTMLInputElement, TimeInputProps>(
  (props, ref) => {
    const {
      name,
      label,
      defaultValue,
      styleClass,
      minutes,
      hours,
      options,
      icon,
      isError,
      onBlur,
      onFocus,
      onChange,
      inputProps,
      ...otherProps
    } = props;
    const { showOptionsOnfocus = false, closeOnOutsideClick = false } =
      options ?? {};
    const {
      scroller,
      option,
      column,
      errorScroller,
      icon: iconClass,
      ...restStyleClasses
    } = styleClass ?? {};

    const [show, setShow] = useState<boolean>(false);

    const element = useRef<HTMLInputElement>(null);
    const mask = useRef<MaskType>(null);

    const hoursFrom = hours?.from ?? 1;
    const hoursTo = hours?.to ?? 23;
    const minutesFrom = minutes?.from ?? 0;
    const minutesTo = minutes?.to ?? 59;

    const minutesOptions = new Array(Math.abs(minutesTo - minutesFrom) + 1)
      .fill(0)
      .map((_, index) => ({
        key: String(index),
        value: String(minutesFrom + index),
      }));
    const hoursOptinons = new Array(Math.abs(hoursFrom - hoursTo) + 1)
      .fill(0)
      .map((_, index) => ({
        key: String(index),
        value: String(hoursFrom + index),
      }));

    const scrollerOptions = [hoursOptinons, minutesOptions];

    const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
      e.preventDefault();
      onBlur?.(e);
      setShow(false);
    };
    const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
      e.preventDefault();
      onFocus?.(e);
      showOptionsOnfocus && setShow(true);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      console.log(mask.current?.masked.value, e.target.value);
      onChange?.(e);
    };

    const handleIconclick = (e: React.BaseSyntheticEvent) => {
      e.preventDefault();
      setShow((value) => !value);
    };

    const handleClickOutside = () => {
      closeOnOutsideClick && setShow(false);
    };

    const handleSelect = (option: Option) => {
      const column = Number(option.key.split("-")[1]);
      const injectValue =
        Number(option.value) <= 9
          ? `0${Number(option.value)}`
          : Number(option.value).toString();
      //const actualValue = value
      // .split(":")
      //.map((val, i) => (val ? val : i === 0 ? "01" : "00"));
    };

    useEffect(() => {
      if (element.current && mask.current === null) {
        mask.current = IMask(element.current, {
          mask: "HH:MM",
          blocks: {
            HH: {
              mask: IMask.MaskedRange,
              from: hoursFrom,
              to: hoursTo,
            },
            MM: {
              mask: IMask.MaskedRange,
              from: minutesFrom,
              to: minutesTo,
            },
          },
        });
      }
    }, [element.current]);

    useEffect(() => {
      if (defaultValue && mask.current) {
        mask.current.value = defaultValue;
      }
    }, [defaultValue]);

    return (
      <>
        <BasicInput
          label={label}
          name={name}
          isError={isError}
          ref={mergeRefs(element, ref)}
          type="text"
          styleClass={{
            ...restStyleClasses,
            root: clsx([useClass("root"), styleClass?.root]),
            input: clsx([useClass("input")], styleClass?.input),
          }}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          inputProps={{
            ...inputProps,
            id: "test",
            autoComplete: "off",
          }}
          {...otherProps}
        >
          {() => (
            <div
              onClick={handleIconclick}
              className={clsx([useClass("icon"), iconClass])}
            >
              {icon ? icon : <Icon />}
            </div>
          )}
        </BasicInput>
      </>
    );
  }
);

const Icon: FC = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fillRule="evenodd"
    clipRule="evenodd"
    {...props}
  >
    <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12S0 18.623 0 12 5.377 0 12 0zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11S1 18.071 1 12 5.929 1 12 1zm0 11h6v1h-7V4h1v8z" />
  </svg>
);
