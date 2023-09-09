import './BasicTextField.scss'

import React, { forwardRef, useState } from 'react'
import clsx from 'clsx'
import { BasicTextFieldProps } from './model'
import { useLibClass } from '../../../hooks'
import { StyleClassType } from '../../../utils'
import { BasicInput } from '../BasicInput/BasicInput'

const COMP_PREFIX = 'BasicTextField'
const useClass = (className: string) => { return useLibClass(COMP_PREFIX, className) }

/**
 * BasicTextField component
 * @param {StyleClassType} [styleClass] - object defining apllied classes in diferent component states and parts
 * @param {boolean} [isError=false] - defines if apply error class (default is set to false)
 * @param {string} name - value applied to the htmlFor props of label and to the id of input
 * @param {string} label - value applied as text for label
 * @param {string} [autoComplete=off] - turn on/off autocomplete (default is off)
 * @param {boolean} [password=false] - if true, input have type "password", else input have type "text" (default is false)
 */

export const BasicTextField = forwardRef<HTMLInputElement, BasicTextFieldProps>((props, ref) => {
    const {
        styleClass,
        isError = false,
        autoComplete = "off",
        defaultValue,
        password = false,
        value,
        inputProps,
        onStateChange,
        ...otherProps
    } = props
    const [filled, setFilled] = useState<boolean>(false)

    return (
        <BasicInput
            ref={ref}
            onStateChange={({ filled, focused }) => { setFilled(filled); onStateChange?.({ filled, focused }) }}
            type={password ? "password" : "text"}
            inputProps={{
                ...inputProps,
                defaultValue: defaultValue,
                autoComplete: autoComplete,
                value: value
            }}
            styleClass={{
                ...styleClass,
                root: clsx([useClass('root'), styleClass?.root]),
                input: clsx([useClass('input'), styleClass?.input]),
                label: clsx([useClass('label'), styleClass?.label]),
                fillLabel: clsx([useClass('label-filled'), styleClass?.fillLabel]),
                focusLabel: clsx([useClass('label-focused-color'), !filled && [useClass('label-focused'), styleClass?.focusLabel]]),
            }}
            isError={isError}
            options={{
                focusOnLabelClick: true,
                blurOnLabelClick: true
            }}
            {...otherProps}
        />
    )
})