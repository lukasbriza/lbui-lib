import './CheckboxSquared.scss'

import React, { forwardRef, useState, useEffect } from 'react'
import clsx from 'clsx'
import { useLibClass } from '../../../hooks'
import { Checkbox } from '../Checkbox/Checkbox'

import { CheckboxSquaredProps } from './model'
import { Props, StyleClassType } from '../../../utils'

const COMP_PREFIX = 'CheckboxSquared'
const useClass = (className: string) => { return useLibClass(COMP_PREFIX, className) }

/**
 * CheckboxSquared component
 * @param {StyleClassType} [styleClass] - object defining apllied classes
 * @param {StyleClassType} [styleClass.root] - class applied to the root component
 * @param {StyleClassType} [styleClass.input] - class applied to the hidden input component
 * @param {StyleClassType} [styleClass.checkBox] - class applied to the styled wrapper of input
 * @param {StyleClassType} [styleClass.text] - class applied to the text/label of component
 * @param {StyleClassType} [styleClass.click] - class applied on click event if clickEffect is allowed
 * @param {StyleClassType} [styleClass.checker] - class applied to the checker component
 * @param {boolean} [defaultChecked] - define state on first render
 * @param {boolean} [checked=false] - trigger checking event
 * @param {string} label - text/element applied to the label component
 * @param {boolean} animate - define if transition is provided
 * @param {boolean} clickEffect - define if click effect will be visible
 * @param {boolean} [labelSensitive=false] - if true, checkbox react when clickedo n label
 */

export const CheckboxSquared = forwardRef<HTMLInputElement, CheckboxSquaredProps & Props<HTMLInputElement>>((props, ref) => {
    const {
        styleClass,
        checked = false,
        animate = true,
        defaultChecked,
        onChange,
        labelSensitive = false,
        ...otherProps
    } = props
    const [isChecked, setIsChecked] = useState<boolean>(defaultChecked ? defaultChecked : false)

    useEffect(() => {
        if (checked !== isChecked) {
            setIsChecked(checked)
        }
    }, [checked])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.target.checked)
        onChange?.(e)
    }

    const checker = (
        <div className={clsx([
            useClass('checker'),
            animate && useClass('animate'),
            isChecked ? useClass('show') : useClass('hide'),
            styleClass?.checker
        ])}></div>
    )

    return (
        <Checkbox
            styleClass={{
                ...styleClass,
                checkBox: clsx([useClass('checkbox'), styleClass?.checkBox]),
                click: styleClass?.click
            }}
            labelProps={{ onClick: () => { labelSensitive && setIsChecked(value => !value) } }}
            checked={isChecked}
            onChange={handleChange}
            onClick={() => { !labelSensitive && setIsChecked(value => !value) }}
            checker={checker}
            ref={ref}
            {...otherProps} />
    )
})