import './Paper.scss'

import React, { forwardRef } from 'react'
import { useLibClass } from '../../../hooks'
import clsx from 'clsx'

import { PaperProps } from './model'
import { Props, StyleClassType } from '../../../utils'

const COMP_PREFIX = 'Paper'
const useClass = (className: string) => { return useLibClass(COMP_PREFIX, className) }

/**
 * Paper
 * @param {StyleClassType} [styleClass] - className definition for component 
 * @param {StyleClassType} [styleClass.root] - class applied to the root of the component
 * @param {number} [elevation=2] - level of surface elevation
 * @param {boolean} [square=false] - if true, rounded corners are disabled 
 */
export const Paper = forwardRef<HTMLElement, PaperProps & Props<HTMLElement>>((props, ref) => {
    const { className, styleClass, children, elevation = 2, square = false, ...otherProps } = props
    return (
        <section
            className={clsx(
                [
                    useClass('root'),
                    useClass(String(elevation)),
                    square ? useClass('squared') : useClass('rounded'),
                    className,
                    styleClass?.root
                ]
            )}
            ref={ref}
            {...otherProps}
        >
            {children}
        </section>
    )
})