import './scss/Divider.scss'

import React, { forwardRef } from 'react'
import { PIXEL_STEP } from '../../../utils/global.constants'
import { useLibClass } from '../../../hooks/useLibClass'
import clsx from 'clsx'

import { Props } from '../../../utils/global.model'
import { DividerProps } from './types/model'

const COMP_PREFIX = 'Divider'
const useClass = (className: string) => { return useLibClass(COMP_PREFIX, className) }

/**
 * Divider
 * @param {string} className - class applied to the root of component
 * @param {number} depth - define depth of component (number * 2px)
 * @param {boolean} fullWidth - define width of component
 * @param {number} width - define width of component in %
 * @param {string} color - optional color of background
 */
export const Divider = forwardRef<HTMLElement, DividerProps & Props<HTMLElement>>((props, ref) => {
    const { className, depth = 1, fullWidth = true, width, color, ...otherProps } = props
    return (
        <section
            className={clsx([useClass('root'), fullWidth && !width && useClass('fullWidth'), className])}
            style={{
                width: width && `${width}%`,
                height: `${depth * PIXEL_STEP}px`,
                background: color && color
            }}
            {...otherProps}
            ref={ref}
        >
        </section>
    )
})