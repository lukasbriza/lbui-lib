import './scss/CheckboxSquared.scss'

import React, { forwardRef, useState, useEffect } from 'react'
import clsx from 'clsx'
import { useLibClass } from '../../../hooks/useLibClass'
import { Checkbox } from '../Checkbox/Checkbox'

import { CheckboxSquaredProps } from './types/model'
import { Props } from '../../../utils/global.model'

const COMP_PREFIX = 'CheckboxSquared'
const useClass = (className: string) => { return useLibClass(COMP_PREFIX, className) }

/**
 * CheckboxSquared component
 * @param {boolean} defaultChecked - define state on first render
 * @param {boolean} checked - trigger checking event
 * @param {string} checkboxClass - class applied to the styled wrapper of input
 * @param {string} className - class applied to the root component
 * @param {string} labelClass - class applied to the label component
 * @param {string} label - text/element applied to the label component
 * @param {string} checkerClass - class applied to the checker component
 * @param {boolean} animate - define if transition is provided
 * @param {boolean} clickEffect - define if click effect will be visible
 * @param {string} clickEffectClass - class applied on click event if clickEffect is allowed
 */

export const CheckboxSquared = forwardRef<HTMLInputElement, CheckboxSquaredProps & Props<HTMLInputElement>>((props, ref) => {
    const {
        checkboxClass,
        checkerClass,
        defaultChecked = false,
        checked,
        animate = true,
        clickEffect,
        clickEffectClass,
        ...otherProps
    } = props
    const [isChecked, setIsChecked] = useState<boolean>(defaultChecked)

    useEffect(() => {
        if (checked !== isChecked && checked !== undefined) {
            setIsChecked(checked)
        }
    }, [checked])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.target.checked)
        otherProps.onChange?.(e)
    }

    const checker = (
        <div className={clsx([
            useClass('checker'),
            animate && useClass('animate'),
            isChecked ? useClass('show') : useClass('hide'),
            checkerClass
        ])}></div>
    )

    return (
        <Checkbox
            checkboxClass={clsx([useClass('checkbox'), checkboxClass])}
            checked={isChecked}
            onChange={handleChange}
            onClick={() => { setIsChecked(value => !value) }}
            checker={checker}
            clickEffect={clickEffect}
            clickEffectClass={clickEffectClass}
            ref={ref}
            {...otherProps}
        />
    )
})