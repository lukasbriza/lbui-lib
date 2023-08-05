import './Underliner.scss'

import React, { forwardRef } from 'react'
import { Divider } from '../Divider/Divider'
import { useLibClass } from '../../../hooks'
import clsx from 'clsx'

import { Props, StyleClassType } from '../../../utils'
import { UnderlinerProps } from './model'

const COMP_PREFIX = 'Underliner'
const useClass = (className: string) => { return useLibClass(COMP_PREFIX, className) }

/**
 * Underliner
 * @param {StyleClassType} [styleClass] - className definition for component
 * @param {StyleClassType} [styleClass.root] - define custom class to the root of component
 * @param {StyleClassType} [styleClass.underliner] - define custom class applied to the underliner
 * @param {number} depth - define depth of component (number * 2px)
 * @param {boolean} fullWidth - define width of underliner
 * @param {number} width - define width of underliner in %
 * @param {string} color - optional color of underliner background
 */
export const Underliner = forwardRef<HTMLDivElement, UnderlinerProps & Props<HTMLDivElement>>((props, ref) => {
    const { children, className, styleClass, color, depth = 1, fullWidth = true, width, ...otherProps } = props
    return (
        <div className={clsx([useClass('root'), className, styleClass?.root])} ref={ref} {...otherProps}>
            {children}
            <Divider styleClass={{ root: styleClass?.underliner }} color={color} depth={depth} fullWidth={fullWidth} width={width} />
        </div>
    )
})