import "./BasicSelect.scss"

import React, { forwardRef, useEffect, useState, FocusEvent, ChangeEvent, MouseEvent, useRef, ReactNode } from "react";
import { BasicSelectProps } from "./model";
import clsx from "clsx";
import { getOptionConvention, nextEffectSanitized, Option, StyleClassType } from "../../../utils";
import { useClickOutside, useLibClass } from "../../../hooks";
import { OptionScroller } from "../../bricks/OptionScroller/OptionScroller";
import { getColumnIdentificator, handleParenValueChange, isFilled, isSimpleOptions, resolveInitialValue, transformToInputValue } from "./utils";
import { Arrow } from "../../../lib";

const COMP_PREFIX = "BasicSelect";
const useClass = (className: string) => {
    return useLibClass(COMP_PREFIX, className);
};

/**
 * BasicSelect component
 * @param {StyleClassType} [styleClass] - object defining applied classes in diferent component states and parts
 * @param {StyleClassType} [styleClass.root] - define class of root component
 * @param {StyleClassType} [styleClass.focusRoot] - define class applied on focus event
 * @param {StyleClassType} [styleClass.filledRoot] - define class applied on fill event
 * @param {StyleClassType} [styleClass.errorRoot] - define class applied on error event
 * 
 * @param {StyleClassType} [styleClass.label] - define class of label component
 * @param {StyleClassType} [styleClass.focusLabel] - define class applied on focus event
 * @param {StyleClassType} [styleClass.fillLabel] - define class applied on fill event
 * @param {StyleClassType} [styleClass.errorLabel] - define class applied on error event
 * 
 * @param {StyleClassType} [styleClass.select] - define class of select component
 * @param {StyleClassType} [styleClass.focusSelect] - define class applied on focus event
 * @param {StyleClassType} [styleClass.fillSelect] - define class applied on fill event
 * @param {StyleClassType} [styleClass.errorSelect] - define class applied on error event
 * 
 * @param {StyleClassType} [styleClass.icon] = define class of select toggle icon
 * @param {StyleClassType} [styleClass.focusIcon] - define class applied on focus event
 * @param {StyleClassType} [styleClass.fillIcon] - define class applied on fill event
 * @param {StyleClassType} [styleClass.errorIcon] - define class applied on error event
 * 
 * @param {StyleClassType} [styleClass.options] - define class of options component
 * @param {StyleClassType} [styleClass.focusOptions] - define class applied on focus event
 * @param {StyleClassType} [styleClass.fillOptions] - define class applied on fill event
 * @param {StyleClassType} [styleClass.errorOptions] - define class applied on error event
 * 
 * @param {StyleClassType} [styleClass.option] - define class of every option item component
 * @param {StyleClassType} [styleClass.focusOption] - define class applied on focus event
 * @param {StyleClassType} [styleClass.fillOption] - define class applied on fill event
 * @param {StyleClassType} [styleClass.errorOption] - define class applied on error event
 * 
 * @param {StyleClassType} [styleClass.columnSection] - define class of column in scroller component
 * @param {StyleClassType} [styleClass.focusColumnSection] - define class applied on focus event
 * @param {StyleClassType} [styleClass.fillColumnSection] - define class applied on fill event
 * @param {StyleClassType} [styleClass.errorColumnSection] - define class applied on error event
 * 
 * @param {Props<HTMLDivElement>} [rootProps] - define properties of wrapper (HTMLDivElement, without ref and className)
 * @param {Props<HTMLLabelElement>} [labelProps] - define properties of label (HTMLLabelElement, without ref, htmlFor, className)
 * @param {Props<HTMLDivElement>} [selectProps] - define properties of select component (HTMLDivElement, without ref, className, onFocus, onBlur, onChange)
 * @param {ReactNode} [children] - pass children under the select element
 * @param {void} [onBlur] - callback on blur event
 * @param {void} [onChange] - callback on change event 
 * @param {void} [onFocus] - callback on focus event
 * @param {void} [onStateChange] - callback on inner state change
 * @param {void} [valueTransform] - define function for transforming value that is  displayed in select
 * @param {ReactNode} [icon] - defined custom icon, can provide inner state of component
 * 
 * @param {boolean} [isError] - defines if apply error class (default is set to false)
 * @param {boolean} [disable] - disable component control
 * @param {string} [label] - define label of select
 * @param {Option | (Option | undefined)[]} [value] - value to control element from parent
 * @param {Option | (Option | undefined)[]} [defaultValue] - define firs render vlaue of component
 * @param {Option[] | Option[][]} options - define option item structure (one or more columns)
 * 
 * @param {Object} [option] - provide customization for component
 * @param {Component} [option.controlStrictlyWithIcon] - toggle ability of component to open/close only by clicking icon/arrow
 * @param {boolean} [option.closeOnSelect] - toggle closing scroller on select action
 * @param {boolean} [option.closeOnClickOutside] - toggle closing scroller on click outside of component
 * @param {boolean} [option.clearable] - add option for value nullification
 * @param {void} [option.openAnimation] - define gsap open animation
 * @param {void} [option.closeAnimation] - defined gsap close animation
 * @param {Component} [option.CustomOption] - define custom option component for scroller
 * @param {Component} [option.CustomClearOption] - define custom component for value nullification ([option.clearable] need to be true)
 * @param {void} [option.onChangeValueTransform] - define function that can transform value passed to the change event
 */
export const BasicSelect = forwardRef<HTMLInputElement, BasicSelectProps>((props, ref) => {
    const {
        value,
        defaultValue,
        disable = false,
        label,
        name,
        icon,
        styleClass,
        rootProps,
        labelProps,
        selectProps,
        isError,
        onStateChange,
        onBlur,
        onChange,
        onFocus,
        valueTransform,
        children,

        options,
        option,
    } = props

    const {
        select,
        fillSelect,
        focusSelect,
        errorSelect,
        label: labelClass,
        fillLabel,
        focusLabel,
        errorLabel,
        root,
        filledRoot,
        focusRoot,
        errorRoot,
        options: optionsClass,
        fillOptions,
        focusOptions,
        errorOptions,
        icon: iconClass,
        openIcon,
        fillIcon,
        focusIcon,
        errorIcon,
        ...restClasses
    } = styleClass ?? {}

    const {
        clearable = true,
        closeOnSelect = true,
        closeOnClickOutside = true,
        controlStrictlyWithIcon = false,
        onChangeValueTransform,
        ...restOption
    } = option ?? {}

    const { onClick: onSelectClick, ...otherselectProps } = selectProps ?? {}

    const [focused, setFocused] = useState<boolean>(false);
    const [filled, setFilled] = useState<boolean>(false);
    const [opened, setOpened] = useState<boolean>(false)
    const [innerValue, setInnerValue] = useState<BasicSelectProps["value"]>(resolveInitialValue(options, value, defaultValue))
    const selectWrapper = useRef<HTMLDivElement>(null)

    const isSimple = isSimpleOptions(options)

    const clickWorkFlow = (e: MouseEvent<HTMLDivElement>) => {
        onSelectClick?.(e)
        setOpened(opened ? false : true)
        setFocused(opened ? false : true)
    }

    const handleFocus = (e: FocusEvent<HTMLDivElement>) => {
        if (!disable) {
            setFocused(true)
            onFocus?.(e)
        }
    }

    const handleBlur = (e: FocusEvent<HTMLDivElement>) => {
        if (!disable) {
            setFocused(false)
            onBlur?.(e)
        }
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (!disable) {
            let ev = e
            if (onChangeValueTransform) {
                ev.target.value = onChangeValueTransform(innerValue)
            }
            onChange?.(ev)
        }
    }

    const handleOptionClick = (option: Option) => {
        isSimple && setInnerValue(option)

        if (!isSimple) {
            const newValueIndex = getColumnIdentificator(option.key)
            const actualValue = innerValue as (Option | undefined)[]
            const newValue = actualValue.map((val, index) => {
                if (index === newValueIndex) {
                    return option
                }
                return val
            })
            setInnerValue(newValue)
        }
        closeOnSelect && setOpened(false)
        closeOnSelect && setFocused(false)
    }

    const handleArrowClick = (e: MouseEvent<HTMLDivElement>) => !disable && controlStrictlyWithIcon && clickWorkFlow(e)

    const handleSelectClick = (e: MouseEvent<HTMLDivElement>) => !disable && !controlStrictlyWithIcon && clickWorkFlow(e)

    const handleClickOutside = () => {
        closeOnClickOutside && setOpened(false)
        setFocused(false)
    }

    const handleLabelClick = () => {
        if (controlStrictlyWithIcon === false && !disable) {
            setFocused((value) => !value)
            setOpened((value) => !value)
        }
    }

    const { } = useClickOutside(selectWrapper, handleClickOutside)

    useEffect(() => {
        if (nextEffectSanitized()) {
            onStateChange?.({ filled, focused, isError });
        }
    }, [filled, focused, isError]);

    useEffect(() => {
        if (nextEffectSanitized()) {
            //OPTIONS ARE ONE DIMENSIONAL
            if (isSimple) {
                const resolvedOption = (defaultValue || value) as Option | undefined
                if (resolvedOption) {
                    const foundOption = (options as Option[]).find(({ key }) => `${key}-0` === `${resolvedOption.key}-0`)
                    foundOption && setFilled(true)
                    foundOption && setInnerValue(foundOption)
                }

            }
            //OPTIONS ARE MULTIDIMENSIONAL
            if (!isSimple) {
                const resolvedOption = (defaultValue || value) as (Option | undefined)[] | undefined
                if (resolvedOption) {
                    const innerState: (Option | undefined)[] = Array(resolvedOption.length).fill(undefined)
                    resolvedOption.forEach((option, index) => {
                        if (option) {
                            let foundOption = (options[index] as Option[]).find(({ key }) => key === option.key)
                            innerState[index] = foundOption ? { key: `${foundOption.key}-${index}`, value: foundOption.value } : undefined
                        }
                    })
                    setInnerValue(innerState)
                    const isFilled = innerState.filter((val) => val === undefined).length < options.length
                    isFilled && setFilled(true)
                }
            }
        }
    }, [])

    useEffect(() => {
        if (nextEffectSanitized()) {
            const event = new Event("input", { bubbles: true });
            const input = document.getElementsByName(name)[0]
            input.dispatchEvent(event)
            setFilled(isFilled(options, innerValue))
        }
    }, [innerValue])

    useEffect(() => {
        if (nextEffectSanitized()) {
            const convertedOptions = getOptionConvention(options)
            handleParenValueChange(convertedOptions, value, innerValue, setInnerValue)
            setFilled(isFilled(convertedOptions, value))
        }
    }, [value])

    useEffect(() => {
        if (disable) {
            setFocused(false)
            setOpened(false)
        }
    }, [disable])

    return (
        <div
            ref={selectWrapper}
            onFocus={handleFocus}
            className={clsx([
                useClass("selectWrapper"),
                root,
                focused && focusRoot,
                filled && filledRoot,
                isError && errorRoot
            ])}
            {...rootProps}
        >
            <input
                disabled={disable}
                onInput={handleChange}
                type="text"
                value={transformToInputValue(defaultValue ? defaultValue : innerValue) ?? ""}
                onChange={handleChange}
                name={name}
                ref={ref}
                style={{ opacity: 0, display: "none" }}
            />
            {label && (
                <label
                    onClick={handleLabelClick}
                    htmlFor={name}
                    className={clsx([
                        labelClass,
                        filled && fillLabel,
                        focused && focusLabel,
                        isError && errorLabel
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
                    select,
                    focused && focusSelect,
                    filled && fillSelect,
                    isError && errorSelect
                ])}
                {...otherselectProps}
            >
                {valueTransform ? valueTransform(innerValue) : transformToInputValue(innerValue)}
                {icon ?
                    typeof icon === "function" ?
                        icon({ isError, filled, focused, setOpened }) :
                        icon :
                    <div className={
                        clsx([
                            useClass("arrow"),
                            opened && (openIcon ? openIcon : useClass("arrow-opened")),
                            iconClass,
                            focused && focusIcon,
                            filled && fillIcon,
                            isError && errorIcon,
                        ])}
                        onClick={handleArrowClick}
                    >
                        <Arrow />
                    </div>
                }
                {children &&
                    typeof children === "function" ?
                    children({ isError, filled, focused, setOpened }) :
                    children
                }
            </div>
            <OptionScroller
                state={{
                    focused,
                    filled,
                    isError
                }}
                onSelect={handleOptionClick}
                option={{
                    clearable: clearable,
                    ...restOption,
                }}
                styleClass={{
                    root: clsx([useClass("scroller"), optionsClass]),
                    focusRoot: focusOptions,
                    fillRoot: fillOptions,
                    errorRoot: errorOptions,
                    ...restClasses
                }}
                options={options}
                open={opened}
            />
        </div>
    )
})