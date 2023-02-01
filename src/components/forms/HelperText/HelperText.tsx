import './scss/HelperText.scss'

import React, { forwardRef, useMemo } from 'react'
import clsx from 'clsx'
import { useLibClass } from '../../../hooks/useLibClass'

import { HelperTextProps } from './types/model'
import { Props } from '../../../utils/global.model'

const COMP_PREFIX = 'Helpertext'
const useClass = (className: string) => { return useLibClass(COMP_PREFIX, className) }

/**
 * Helpertext component
 * @param {string} text - define text of helper
 * @param {string} errorText - define text if error props is true
 * @param {string} position - set position of text (top|left|right|bottom) - default is bottom
 * @param {string} className - apply custom class to the root component
 * @param {string} helperClass - apply custom class to the helper component
 * @param {boolean} show - define if show|hide helpertext - default true
 * @param {boolean} showTextOnError -if true, text prop will not be displayed on error (default is true) => will not show on error if errorText is defined
 * @param {boolean} showWithanimation - define if animation will be applied during show event
 * @param {boolean} error - if true, errorText and errorClass is applied
 */

export const HelperText = forwardRef<HTMLDivElement, HelperTextProps & Props<HTMLDivElement>>((props, ref) => {
    const {
        children,
        text,
        errorText,
        position = "bottom",
        className,
        helperClass,
        show = true,
        showWithanimation = false,
        showTextOnError = true,
        error = false,
        errorClass,
        ...otherProps
    } = props

    const resolveErrorText = useMemo(() => {
        if (error && errorText) {
            return errorText
        }
        if (error && errorText === undefined) {
            return showTextOnError ? text : null
        }
    }, [error, errorText, showTextOnError])

    return (
        <div
            className={clsx([useClass('root'), useClass(position), className])}
            ref={ref}
            {...otherProps}
        >
            {children}
            <p className={clsx([
                useClass('text'),
                !show && !showWithanimation && useClass('hide'),
                !show && showWithanimation && useClass('hide-animated'),
                show && showWithanimation && useClass('show-animated'),
                error && useClass('error'),
                error && errorClass,
                helperClass
            ])}>{resolveErrorText}</p>
        </div>
    )
})