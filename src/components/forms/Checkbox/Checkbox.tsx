import './scss/Checkbox.scss'

import React, { forwardRef, useState, useEffect } from 'react'
import clsx from 'clsx'
import { useLibClass } from '../../../hooks/useLibClass'

import { CheckboxProps } from './types/model'
import { Props } from '../../../utils/global.model'

const COMP_PREFIX = 'Checkbox'
const useClass = (className: string) => { return useLibClass(COMP_PREFIX, className) }

/**
 * Checkbox component - frame for custom checkboxes
 * @param {string} label - text applied to the label component
 * @param {string} className - class applied to the root component
 * @param {string} checkboxClass - class applied to the styled wrapper of input
 * @param {string} labelClass - class applied to the label component
 * @param {object} checker - child passed as checker object
 */

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps & Props<HTMLInputElement>>((props, ref) => {
    const {
        label,
        className,
        checkboxClass,
        labelClass,
        checker,
        ...otherProps
    } = props

    return (
        <label className={clsx([useClass('root'), className])}>
            <div className={clsx([useClass('wrapper'), checkboxClass])}>
                <input
                    type="checkbox"
                    className={clsx([useClass('input')])}
                    ref={ref}
                    {...otherProps}
                />
                {checker}
            </div>
            <p className={clsx([useClass('label'), labelClass])}>{label}</p>
        </label>
    )
})
