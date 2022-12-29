import './scss/Checkbox.scss'

import React, { forwardRef, useRef } from 'react'
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
 * @param {boolean} clickEffect - define if click effect will be visible
 * @param {string} clickEffectClass - class applied on click event if clickEffect is allowed
 */

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps & Props<HTMLInputElement>>((props, ref) => {
    const {
        label,
        className,
        checkboxClass,
        labelClass,
        clickEffect = true,
        clickEffectClass,
        checker,
        onChange,
        ...otherProps
    } = props

    const wrapper = useRef<HTMLDivElement>(null)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (clickEffect && e.target.checked) {
            console.log("here")
            wrapper.current?.classList.add(useClass('click'))
            clickEffectClass && wrapper.current?.classList.add(clickEffectClass)

            setTimeout(() => {
                wrapper.current?.classList.remove(useClass('click'))
                clickEffectClass && wrapper.current?.classList.remove(clickEffectClass)
            }, 600)
        }
        onChange?.(e)
    }


    return (
        <label className={clsx([useClass('root'), className])}>
            <div
                className={clsx([useClass('wrapper'), checkboxClass])}
                ref={wrapper}
            >
                <input
                    type="checkbox"
                    className={clsx([useClass('input')])}
                    ref={ref}
                    onChange={handleChange}
                    {...otherProps}
                />
                {checker}
            </div>
            <div className={clsx([useClass('label'), labelClass])}>{label}</div>
        </label>
    )
})
