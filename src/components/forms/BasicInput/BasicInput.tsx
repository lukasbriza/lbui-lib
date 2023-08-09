import "./BasicInput.scss"

import React, { ChangeEvent, FocusEvent, forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import { nextEffectSanitized } from "../../../utils";
import clsx from "clsx";
import { useLibClass } from "../../../hooks";
import { BasicInputImperative, BasicInputProps } from "./model";


const COMP_PREFIX = 'BasicInput'
const useClass = (className: string) => { return useLibClass(COMP_PREFIX, className) }

/**
 * BasicInput component
 */

export const BasicInput = forwardRef<BasicInputImperative, BasicInputProps>((props, ref) => {
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
        children
    } = props
    const labelRef = useRef<HTMLLabelElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)
    const wrapperRef = useRef<HTMLDivElement>(null)

    const [focused, setFocused] = useState<boolean>(false)
    const [filled, setFilled] = useState<boolean>(false)


    const handleInputFocus = (e: FocusEvent<HTMLInputElement>) => {
        setFocused(true)
        onFocus?.(e)
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFilled(Boolean(e.target.value) && e.target.value !== "")
        onChange?.(e)
    }

    const handleInputBlur = (e: FocusEvent<HTMLInputElement>) => {
        setFocused(false)
        onBlur?.(e)
    }


    useImperativeHandle<BasicInputImperative, BasicInputImperative>(ref, () => {
        return {
            label: labelRef,
            input: inputRef,
            wrapper: wrapperRef,
            state: {
                focused: focused,
                filled: filled
            }
        }
    }, [labelRef, inputRef, wrapperRef, focused, filled])

    useEffect(() => {
        if (nextEffectSanitized()) {
            onStateChange?.({ filled, focused })
        }
    }, [filled, focused])

    return (
        <div
            ref={wrapperRef}
            className={clsx([
                useClass("root"),
                styleClass?.root,
                isError && styleClass?.errorRoot,
                focused && styleClass?.focusRoot,
                filled && styleClass?.fillRoot
            ])}
            {...rootProps}
        >
            {
                label &&
                <label
                    ref={labelRef}
                    htmlFor={name}
                    className={clsx([
                        useClass("label"),
                        styleClass?.label,
                        isError && styleClass?.errorLabel,
                        focused && styleClass?.focusLabel,
                        filled && styleClass?.fillLabel
                    ])}
                    {...labelProps}
                >
                    {label}
                </label>
            }
            <input
                type={type}
                ref={inputRef}
                onFocus={handleInputFocus}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                className={clsx([
                    useClass("input"),
                    styleClass?.input,
                    isError && styleClass?.errorInput,
                    focused && styleClass?.focusInput,
                    filled && styleClass?.fillInput
                ])}
                {...inputProps}
            />
            {children}
        </div>
    )
})