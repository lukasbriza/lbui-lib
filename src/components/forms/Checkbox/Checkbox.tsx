import './Checkbox.scss'

import React, { forwardRef, useRef } from 'react'
import clsx from 'clsx'
import { useLibClass } from '../../../hooks'

import { CheckboxProps } from './model'
import { Props } from '../../../utils'

const COMP_PREFIX = 'Checkbox'
const useClass = (className: string) => { return useLibClass(COMP_PREFIX, className) }

/**
 * Checkbox component - frame for custom checkboxes
 * @param {StyleClassType} [styleClass] - object defining apllied classes in diferent component states and parts
 * @param {StyleClassType} [styleClass.click] - class applied on click event if clickEffect is allowed
 * @param {StyleClassType} [styleClass.root] - class applied to the root component
 * @param {StyleClassType} [styleClass.input] - class applied to the input component
 * @param {StyleClassType} [styleClass.checkBox] - class applied to the styled wrapper of input
 * @param {StyleClassType} [styleClass.text] - class applied to the label/text component
 * @param {string} label - text applied to the label component
 * @param {string} name - name for inpúut component
 * @param {object} checker - child passed as checker object
 * @param {boolean} [clickEffect=true] - define if click effect will be visible
 */

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps & Props<HTMLInputElement>>((props, ref) => {
    const {
        styleClass,
        className,
        label,
        clickEffect = true,
        checker,
        onChange,
        name,
        labelProps,
        ...otherProps
    } = props
    const wrapper = useRef<HTMLDivElement>(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (clickEffect && e.target.checked) {
            const { current } = wrapper
            current?.classList.add(useClass('click'))
            styleClass?.click && current?.classList.add(styleClass?.click)

            setTimeout(() => {
                current?.classList.remove(useClass('click'))
                styleClass?.click && current?.classList.remove(styleClass?.click)
            }, 600)
        }
        onChange?.(e)
    }

    return (
        <label
            htmlFor={name}
            className={clsx([useClass('root'), className, styleClass?.root])}
            {...labelProps}
        >
            <div
                className={clsx([useClass('wrapper'), styleClass?.checkBox])}
                ref={wrapper}
            >
                <input
                    name={name}
                    type="checkbox"
                    className={clsx([useClass('input'), styleClass?.input])}
                    ref={ref}
                    onChange={handleChange}
                    {...otherProps}
                />
                {checker}
            </div>
            <div className={clsx([useClass('label'), styleClass?.text])}>{label}</div>
        </label>
    )
})
