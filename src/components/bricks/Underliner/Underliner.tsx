import './scss/Underliner.scss'

import React, { forwardRef } from 'react'
import { Divider } from '../../'
import { useLibClass } from '../../../hooks/useLibClass'
import clsx from 'clsx'

import { Props } from '../../../utils/global.model'
import { UnderlinerProps } from './types/model'

const COMP_PREFIX = 'Underliner'
const useClass = (className: string) => { return useLibClass(COMP_PREFIX, className) }

/**
 * Underliner
 * @param {string} className - class applied to the root of component
 * @param {string} underlinerClass - class applied to the underliner
 * @param {number} depth - define depth of component (number * 2px)
 * @param {boolean} fullWidth - define width of underliner
 * @param {number} width - define width of underliner in %
 * @param {string} color - optional color of underliner background
 */
export const Underliner = forwardRef<HTMLDivElement, UnderlinerProps & Props<HTMLDivElement>>((props, ref) => {
    const { children, className, underlinerClass, color, depth = 1, fullWidth = true, width, ...otherProps } = props
    return (
        <div className={clsx([useClass('root'), className])} ref={ref} {...otherProps}>
            {children}
            <Divider className={underlinerClass} color={color} depth={depth} fullWidth={fullWidth} width={width} />
        </div>
    )
})