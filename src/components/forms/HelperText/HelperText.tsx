import './HelperText.scss'

import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { useLibClass } from '../../../hooks'
import { HelperTextProps } from './model'
import { Props } from '../../../utils'

const COMP_PREFIX = 'Helpertext'
const useClass = (className: string) => { return useLibClass(COMP_PREFIX, className) }

/**
 * Helpertext component
 * @param {StyleClassType} [styleClass] - object defining apllied classes in diferent component states and parts
 * @param {string} text - define text of helper
 * @param {string} [errorText] - define text if error props is true
 * @param {string} [position=bottom] - set position of text (top|left|right|bottom) - default is bottom
 * @param {boolean} [show=true] - define if show|hide helpertext - default true
 * @param {object} [options] - define component options
 * @param {boolean} [options.animation] - apply animation on helper text
 * @param {boolean} [isError=false] - if true, errorText and errorClass is applied
 */

export const HelperText = forwardRef<HTMLDivElement, HelperTextProps & Props<HTMLDivElement>>((props, ref) => {
    const {
        styleClass,
        children,
        text,
        errorText,
        position = "bottom",
        className,
        show = true,
        options,
        isError = false,
        ...otherProps
    } = props
    const { animation = false } = options ?? {}

    return (
        <div
            className={clsx([useClass('root'), useClass(position), className, styleClass?.root])}
            ref={ref}
            {...otherProps}
        >
            {children}
            <p className={clsx([
                useClass('text'),
                !show && !animation && useClass('hide'),
                !show && animation && useClass('hide-animated'),
                show && animation && useClass('show-animated'),
                isError && useClass('error'),
                isError && styleClass?.errorText,
                styleClass?.text
            ])}>{isError && errorText ? errorText : !isError ? text : null}</p>
        </div>
    )
})