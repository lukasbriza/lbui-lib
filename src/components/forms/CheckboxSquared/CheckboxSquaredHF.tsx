import React, { FC, forwardRef } from 'react';
import { Controller } from 'react-hook-form'
import { CheckboxSquared } from './CheckboxSquared'
import { CheckboxSquaredHFProps } from './types/model'
import { Props } from '../../../utils/global.model'

/**
 * CheckboxSquared component
 * @param {boolean} defaultChecked - define state on first render
 * @param {boolean} checked - trigger checking event
 * @param {string} checkboxClass - class applied to the styled wrapper of input
 * @param {string} className - class applied to the root component
 * @param {string} labelClass - class applied to the label component
 * @param {string} label - text applied to the label component
 * @param {string} checkerClass - class applied to the checker component
 * @param {boolean} animate - define if transition is provided
 */

export const CheckboxSquaredHF = forwardRef<HTMLInputElement, CheckboxSquaredHFProps & Props<HTMLInputElement>>((props, ref) => {
    const { control, label, name, ...otherProps } = props

    return (
        <Controller
            control={control}
            name={name}
            render={({ field }) => {

                return (
                    <CheckboxSquared
                        defaultChecked={control._defaultValues[name]}
                        label={label}
                        {...field}
                        ref={ref}
                        {...otherProps}
                    />
                )
            }}
        />
    )
})