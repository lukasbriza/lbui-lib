import './FilledTextField.scss'

import React, { forwardRef, useState } from 'react'
import clsx from 'clsx'
import { useLibClass } from '../../../hooks'

import { Props, StyleClassType } from '../../../utils'
import { FilledTextFieldProps } from './model'
import { BasicInput } from '../BasicInput/BasicInput'

const COMP_PREFIX = 'FilledTextField'
const useClass = (className: string) => { return useLibClass(COMP_PREFIX, className) }

/**
 * FilledTextField component
 * @param {StyleClassType} [styleClass] - object defining apllied classes in diferent component states and parts
 * @param {boolean} [isError=false] - defines if apply error class (default is set to false)
 * @param {string} name - value applied to the htmlFor props of label and to the id of input
 * @param {string} label - value applied as text for label
 * @param {string} [value] - value applied to the input element
 * @param {string} [autoComplete="off"] - turn on/off autocomplete (default is off)
 * @param {boolean} [password=false] - if true, input have type "password", else input have type "text" (default is false)
 */

export const FilledTextField = forwardRef<HTMLInputElement, FilledTextFieldProps & Props<HTMLInputElement>>((props, ref) => {
    const {
        styleClass,
        className,
        name,
        label,
        value,
        inputProps,
        lineOrigin = "center",
        isError = false,
        autoComplete = "off",
        defaultValue,
        password = false,
        onStateChange,
        ...otherProps
    } = props
    const { line, fillLine, focusLine, errorLine, ...restStyleClasses } = styleClass ?? {}
    const [filled, setFilled] = useState<boolean>(false)

    return (
        <BasicInput
            onStateChange={({ focused, filled }) => { setFilled(filled); onStateChange?.({ focused, filled }) }}
            name={name}
            label={label}
            ref={ref}
            type={password ? "password" : "text"}
            inputProps={{
                ...inputProps,
                defaultValue: defaultValue,
                autoComplete: autoComplete,
                value: value
            }}
            styleClass={{
                ...restStyleClasses,
                root: clsx([useClass('root'), className, styleClass?.root]),
                label: clsx([useClass('label'), styleClass?.label]),
                fillLabel: clsx([useClass('label-filled'), styleClass?.fillLabel]),
                focusLabel: clsx([useClass('label-focused-color'), !filled && [useClass('label-focused'), styleClass?.focusLabel]]),
                input: clsx([useClass('input'), styleClass?.input]),
            }}
            isError={isError}
            {...otherProps}
        >
            {({ filled, focused, isError }) =>
                <p className={clsx([
                    useClass('line'),
                    useClass('line-color'),
                    useClass(`line-${lineOrigin}`),
                    focused && useClass('line-focused'),
                    line,
                    focused && focusLine,
                    filled && fillLine,
                    isError && errorLine
                ])}>
                </p>

            }
        </BasicInput >
    )
})