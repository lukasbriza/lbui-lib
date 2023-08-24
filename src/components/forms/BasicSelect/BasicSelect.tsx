import "./BasicSelect.scss"

import React, { forwardRef, useEffect, useState, FocusEvent, ChangeEvent, MouseEvent } from "react";
import { BasicSelectProps } from "./model";
import clsx from "clsx";
import { nextEffectSanitized, Option } from "../../../utils";
import { useLibClass } from "../../../hooks";
import { Options } from "../Options/Options";

const COMP_PREFIX = "BasicSelect";
const useClass = (className: string) => {
    return useLibClass(COMP_PREFIX, className);
};

/**
 * BasicSelect component
 */
export const BasicSelect = forwardRef<HTMLInputElement, BasicSelectProps>((props, ref) => {
    const {
        value,
        defaultValue,
        label,
        name,
        styleClass,
        rootProps,
        labelProps,
        selectProps,
        isError,
        options,
        onStateChange,
        onBlur,
        onChange,
        onFocus,
        children,
        ...otherProps
    } = props
    const { onClick: onSelectClick, ...otherselectProps } = selectProps ?? {}
    const {
        clearable = true,
        closeOnSelect = true,
        closeOnClickOutside = true,
        ...otherOptions
    } = options ?? {}


    const [focused, setFocused] = useState<boolean>(false);
    const [filled, setFilled] = useState<boolean>(false);
    const [opened, setOpened] = useState<boolean>(false)
    const [innerValue, setInnerValue] = useState<Option | undefined>(value)


    const handleFocus = (e: FocusEvent<HTMLDivElement>) => {
        setFocused(true)
        onFocus?.(e)
    }

    const handleBlur = (e: FocusEvent<HTMLDivElement>) => {
        setFocused(false)
        onBlur?.(e)
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        let ev = e
        ev.target.value = innerValue?.value ?? ""
        setFilled(innerValue !== undefined)
        onChange?.(ev)
    }

    const handleOptionClick = (option?: Option) => () => {
        setInnerValue(option)
        closeOnSelect && setOpened(false)
    }

    const handleSelectClick = (e: MouseEvent<HTMLDivElement>) => {
        setOpened((value) => !value)
        onSelectClick?.(e)
    }


    useEffect(() => {
        if (nextEffectSanitized()) {
            onStateChange?.({ filled, focused, opened, isError });
        }
    }, [filled, focused, opened, isError]);

    useEffect(() => {
        if (nextEffectSanitized()) {
            if (defaultValue) {
                const hasDefaultOption = props.option.findIndex(({ key }) => key === defaultValue.key) !== -1
                if (hasDefaultOption) {
                    setFilled(true)
                    setInnerValue(props.option.find(({ key }) => defaultValue.key === key))
                }
            }
            if (value) {
                const hasValue = props.option.findIndex(({ key }) => key === value.key) !== -1
                if (hasValue) {
                    setFilled(true);
                    setInnerValue(props.option.find(({ key }) => value.key === key))
                }
            }
        }
    }, [])

    useEffect(() => {
        if (nextEffectSanitized()) {
            const event = new Event("input", { bubbles: true });
            const input = document.getElementsByName(name)[0]
            input.dispatchEvent(event)
        }
    }, [innerValue])

    useEffect(() => {
        if (nextEffectSanitized()) {
            if (value?.value !== innerValue?.value) {
                setInnerValue(value)
            }
        }
    }, [value])

    return (
        <div
            className={clsx([
                styleClass?.root,
                focused && styleClass?.focusRoot,
                filled && styleClass?.filledRoot,
                isError && styleClass?.errorRoot
            ])}
            {...rootProps}
        >
            <input
                onInput={handleChange}
                type="text"
                value={innerValue?.value ?? ""}
                defaultValue={defaultValue?.value}
                onChange={handleChange}
                name={name}
                ref={ref}
                style={{ opacity: 0, display: "none" }}
            />
            {label && (
                <label
                    htmlFor={name}
                    className={clsx([
                        styleClass?.label,
                        filled && styleClass?.fillLabel,
                        focused && styleClass?.focusLabel,
                        isError && styleClass?.errorLabel
                    ])}
                    {...labelProps}
                >
                    {label}
                </label>
            )}
            <div
                onFocus={handleFocus}
                onBlur={handleBlur}
                onClick={handleSelectClick}
                className={clsx([
                    useClass("select"),
                    styleClass?.select,
                    focused && styleClass?.focusSelect,
                    filled && styleClass?.fillSelect,
                    isError && styleClass?.errorSelect
                ])}
                {...otherselectProps}
            >
                {innerValue?.value}
                {children &&
                    typeof children === "function" ?
                    children({ isError, filled, focused, opened, setOpened }) :
                    children
                }
            </div>
            <Options
                state={{
                    opened,
                    focused,
                    filled,
                    isError
                }}
                onOptionClick={handleOptionClick}
                clearable={clearable}
                styleClass={{
                    option: styleClass?.option,
                    focusOption: styleClass?.focusOption,
                    fillOption: styleClass?.fillOption,
                    errorOption: styleClass?.errorOption,
                    options: styleClass?.options,
                    focusOptions: styleClass?.focusOptions,
                    fillOptions: styleClass?.fillOptions,
                    errorOptions: styleClass?.errorOptions
                }}
                {...otherOptions}
                {...otherProps}
            />
        </div>

    )
})