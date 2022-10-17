import './scss/FilledTextField.scss'

import React, { forwardRef, useRef, useState, useEffect } from 'react'
import clsx from 'clsx'
import { useLibClass } from '../../../hooks/useLibClass'

import { Props } from '../../../utils/global.model'
import { FilledTextFieldProps } from './types/model'

const COMP_PREFIX = 'FilledTextField'
const useClass = (className: string) => { return useLibClass(COMP_PREFIX, className) }

/**
 * FilledTextField component
 * @param {string} rootClass - class applied to the root div element
 * @param {string} className - class applied to the input element
 * @param {string} labelClass - class applied to the label element
 * @param {string} lineClass - class applied to the line element
 * @param {string} lineFocusClass - class applied to the line on focus event
 * @param {string} lineFilledClass - class applied to the line if input is filled
 * @param {string} labelFocusClass - class applied to the label during focusIn event
 * @param {string} labelFilledClass - class applied to the label during focusOut event when input is not empty
 * @param {string} errorLabelClass - class applied to the label if error props is true
 * @param {string} errorInputClass - class applied to the input if error props is true
 * @param {string} errorLineClass - class applied to the line if error props is true
 * @param {boolean} error - defines if apply error class (default is set to false)
 * @param {focusIn} focusIn - callback called on focusIn event
 * @param {focusOut} focusOut - callback called on focusOut event
 * @param {string} name - value applied to the htmlFor props of label and to the id of input
 * @param {string} label - value applied as text for label
 * @param {string} value - value applied to the input element
 * @param {string} autoComplete - turn on/off autocomplete (default is off)
 */

export const FilledTextField = forwardRef<HTMLInputElement, FilledTextFieldProps & Props<HTMLInputElement>>((props, ref) => {
    const {
        rootClass,
        className,
        labelClass,
        name,
        label,
        value,
        focusIn,
        focusOut,
        labelFocusClass,
        labelFilledClass,
        lineClass,
        lineFocusClass,
        lineFilledClass,
        errorLineClass,
        errorLabelClass,
        errorInputClass,
        lineOrigin = "center",
        error = false,
        autoComplete = "off",
        ...otherProps
    } = props

    const [focused, setFocused] = useState<boolean>(false)
    const [filled, setFilled] = useState<boolean>(false)

    const divRef = useRef<HTMLInputElement>(null)


    //HANDLE FOCUS
    useEffect(() => {
        const focusInFn = (e: React.BaseSyntheticEvent | FocusEvent) => {
            focusIn?.(e)
            setFocused(true)
        }
        const focuseOutFn = (e: React.BaseSyntheticEvent | FocusEvent) => {
            focusOut?.(e)
            setFocused(false)
            if (e.target?.value) {
                setFilled(true)
                return
            }
            setFilled(false)
        }
        divRef.current?.addEventListener('focusin', focusInFn)
        divRef.current?.addEventListener('focusout', focuseOutFn)
        return () => {
            divRef.current?.removeEventListener('focusin', focusInFn)
            divRef.current?.removeEventListener('focusout', focuseOutFn)
        }
    }, [])

    return (
        <div
            className={clsx([useClass('root'), rootClass])}
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
                type="text"
                ref={ref}
                id={name}
                name={name}
                autoComplete={autoComplete}
                value={value}
                className={clsx([useClass('input'), className, error && errorInputClass])}
                {...otherProps}
            />
            <p className={clsx([
                useClass('line'),
                useClass('line-color'),
                useClass(`line-${lineOrigin}`),
                focused && useClass('line-focused'),
                lineClass,
                focused && lineFocusClass,
                filled && lineFilledClass,
                error && errorLineClass
            ])}>
            </p>
        </div>
    )
})