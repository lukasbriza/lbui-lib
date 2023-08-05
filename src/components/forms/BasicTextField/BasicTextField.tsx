import './BasicTextField.scss'

import React, { forwardRef, useRef, useState } from 'react'
import clsx from 'clsx'

import { Props } from '../../../utils'
import { BasicTextFieldProps } from './model'
import { useEffectOnce, useLibClass } from '../../../hooks'

const COMP_PREFIX = 'BasicTextField'
const useClass = (className: string) => { return useLibClass(COMP_PREFIX, className) }

/**
 * BasicTextField component
 * @param {string} rootClass - class applied to the root div element
 * @param {string} rootFilledClass - class applied to the root div element when input is filled
 * @param {string} rootFocusedClass - class applied to the root div element when input is focused
 * @param {string} className - class applied to the input element
 * @param {string} inputFocusClass - class applied to the input element when is focused
 * @param {string} inputFilledClass - class applied to the input element when is filled
 * @param {string} labelClass - class applied to the label element
 * @param {string} labelFocusClass - class applied to the label during focusIn event
 * @param {string} labelFilledClass - class applied to the label during focusOut event when input is not empty
 * @param {string} errorRootClass - class applied to the root div when error props is true
 * @param {string} errorLabelClass - class applied to the label if error props is true
 * @param {string} errorInputClass - class applied to the input if error props is true
 * @param {boolean} error - defines if apply error class (default is set to false)
 * @param {focusIn} focusIn - callback called on focusIn event
 * @param {focusOut} focusOut - callback called on focusOut event
 * @param {string} name - value applied to the htmlFor props of label and to the id of input
 * @param {string} label - value applied as text for label
 * @param {string} value - value applied to the input element
 * @param {string} autoComplete - turn on/off autocomplete (default is off)
 * @param {boolean} password - if true, input have type "password", else input have type "text" (default is false)
 */

export const BasicTextField = forwardRef<HTMLInputElement, BasicTextFieldProps & Props<HTMLInputElement>>((props, ref) => {
    const {
        rootClass,
        rootFilledClass,
        rootFocusedClass,
        className,
        inputFocusClass,
        inputFilledClass,
        labelClass,
        labelFocusClass,
        labelFilledClass,
        name,
        label,
        focusIn,
        focusOut,
        errorLabelClass,
        errorInputClass,
        errorRootClass,
        error = false,
        autoComplete = "off",
        defaultValue,
        password = false,
        onChange,
        value,
        ...otherProps
    } = props
    const [focused, setFocused] = useState<boolean>(false)
    const [filled, setFilled] = useState<boolean>(false)

    const divRef = useRef<HTMLInputElement>(null)

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length !== 0 && !filled) {
            setFilled(true)
        }
        onChange?.(e)
    }

    useEffectOnce(() => {
        const { current } = divRef
        const focusInFn = (e: React.BaseSyntheticEvent | FocusEvent) => {
            focusIn?.(e)
            setFocused(true)
        }
        const focuseOutFn = (e: React.BaseSyntheticEvent | FocusEvent) => {
            focusOut?.(e)
            setFocused(false)
            if (typeof document !== "undefined" && e?.target?.value) {
                setFilled(true)
                return
            }
            setFilled(false)
        }

        ((value && value?.length > 0) || defaultValue && defaultValue?.toString().length > 0) && setFilled(true)

        current?.addEventListener('focusin', focusInFn)
        current?.addEventListener('focusout', focuseOutFn)
        return () => {
            const { current } = divRef
            current?.removeEventListener('focusin', focusInFn)
            current?.removeEventListener('focusout', focuseOutFn)
        }
    }, [])

    return (
        <div
            className={clsx([
                useClass('root'),
                rootClass,
                filled && rootFilledClass,
                focused && rootFocusedClass,
                error && errorRootClass
            ])}
            ref={divRef}
        >
            <label
                htmlFor={name}
                className={clsx([
                    useClass('label'),
                    focused && useClass('label-focused-color'),
                    focused && !filled && useClass('label-focused'),
                    filled && useClass('label-filled'),
                    labelClass,
                    focused && !filled && labelFocusClass,
                    filled && labelFilledClass,
                    error && errorLabelClass
                ])}
            >
                {label}
            </label>
            <input
                onChange={handleOnChange}
                type={password ? "password" : "text"}
                ref={ref}
                id={name}
                name={name}
                value={value ? value : defaultValue}
                defaultValue={defaultValue}
                autoComplete={autoComplete}
                className={clsx([
                    useClass('input'),
                    className,
                    error && errorInputClass,
                ])}
                {...otherProps}
            />
        </div>
    )
})