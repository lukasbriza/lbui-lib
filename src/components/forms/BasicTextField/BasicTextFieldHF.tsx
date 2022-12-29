import React, { FC } from 'react';
import { Controller } from 'react-hook-form'
import { BasicTextField } from './BasicTextField'
import { BasicTextFieldHRProps } from './types/model'
import { Props } from '../../../utils/global.model'

/**
 * BasicTextFieldHF component
 * @param {string} rootClass - class applied to the root div element
 * @param {string} className - class applied to the input element
 * @param {string} labelClass - class applied to the label element
 * @param {string} labelFocusClass - class applied to the label during focusIn event
 * @param {string} labelFilledClass - class applied to the label during focusOut event when input is not empty
 * @param {string} errorLabelClass - class applied to the label if error props is true
 * @param {string} errorInputClass - class applied to the input if error props is true
 * @param {boolean} error - defines if apply error class (default is set to false)
 * @param {focusIn} focusIn - callback called on focusIn event
 * @param {focusOut} focusOut - callback called on focusOut event
 * @param {string} name - value applied to the htmlFor props of label and to the id of input
 * @param {string} label - value applied as text for label
 * @param {string} autoComplete - turn on/off autocomplete (default is off)
 * @param {string} defaultValue - default value set to the input
 * @param {void} control - control hooks passed to the controller (react hooks form)
 * @param {boolean} password - if true, input have type "password", else input have type "text" (default is false)
 */

export const BasicTextFieldHF: FC<BasicTextFieldHRProps & Props<HTMLInputElement>> = (props) => {
    const { control, label, name, error, ...otherProps } = props
    return (
        <Controller
            control={control}
            name={name}
            render={({ field, fieldState }) => {
                return (
                    <BasicTextField
                        label={label}
                        error={error !== undefined ? error : fieldState.error ? true : false}
                        {...field}
                        {...otherProps}
                    />
                )
            }}
        />
    )
}