import './scss/Paper.scss'

import React, { forwardRef } from 'react'
import { useLibClass } from '../../../hooks/useLibClass'
import clsx from 'clsx'

import { PaperProps } from './types/model'
import { Props } from '../../../utils/global.model'

const COMP_PREFIX = 'Paper'
const useClass = (className: string) => { return useLibClass(COMP_PREFIX, className) }

/**
 * Paper
 * @param {string} className - Class applied to the root of the component
 * @param {number} elevation - Level of surface elevation
 * @param {boolean} square - If true, rounded corners are disabled 
 */
export const Paper = forwardRef<HTMLElement, PaperProps & Props<HTMLElement>>((props, ref) => {
    const { className, children, elevation = 2, square = false, ...otherProps } = props
    console.log(otherProps)
    return (
        <section
            className={clsx(
                [useClass('root'),
                useClass(String(elevation)),
                square ? useClass('squared') : useClass('rounded'),
                    className]
            )}
            ref={ref}
            {...otherProps}
        >
            {children}
        </section>
    )
})