import './Divider.scss'

import React, { forwardRef } from 'react'
import { PIXEL_STEP } from '../../../utils/global.constants'
import { useLibClass } from '../../../hooks'
import clsx from 'clsx'

import { Props, StyleClassType } from '../../../utils'
import { DividerProps } from './model'

const COMP_PREFIX = 'Divider'
const useClass = (className: string) => { return useLibClass(COMP_PREFIX, className) }

/**
 * Divider
 * @param {number} [depth=1] - define depth of component (number * 2px)
 * @param {boolean} [fullWidth] - define width of component
 * @param {number} [width] - define width of component in %
 * @param {string} [color] - optional color of background
 * @param {StyleClassType} [styleClass] - className definition for component
 * @param {StyleClassType} [styleClass.root] - className applied to the root of component
 */
export const Divider = forwardRef<HTMLElement, DividerProps & Props<HTMLElement>>((props, ref) => {
    const {
        className,
        styleClass,
        depth = 1,
        fullWidth = true,
        width,
        color,
        ...otherProps
    } = props

    return (
        <section
            className={clsx([
                useClass('root'),
                fullWidth && !width && useClass('fullWidth'),
                className,
                styleClass?.root
            ])}
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