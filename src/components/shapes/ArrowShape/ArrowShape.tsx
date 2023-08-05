import './ArrowShape.scss'

import React from 'react';
import { useLibClass } from '../../../hooks'
import clsx from 'clsx'

import { ArrowShapeProps } from './model'
import { Props } from '../../../utils'

const COMP_PREFIX = 'ArrowShape'
const useClass = (className: string) => { return useLibClass(COMP_PREFIX, className) }

/**
 * ArrowShape component
 * @param {StyleClassType} [styleClass] - className definition for component 
 * @param {StyleClassType} [styleClass.root] - class applied to the root of the component
 * @param {number} lineWidth - define width of line in px
 * @param {number} lineHeight - define height of line in px
 * @param {boolean} rounded - allow rounded corners of lines
 * @param {string} color - define color of lines
 */
export const ArrowShape = React.forwardRef<HTMLDivElement, ArrowShapeProps & Props<HTMLDivElement>>((props, ref) => {
    const { className, styleClass, color, rounded = true, lineWidth, lineHeight, ...otherProps } = props

    const styles1 = {
        background: color && color,
        height: lineHeight && lineHeight + 'px',
        top: lineHeight && `calc(50% + ${lineHeight / 2}px - 1px)`
    }
    const styles2 = {
        background: color && color,
        height: lineHeight && lineHeight + 'px',
        top: lineHeight && `calc(50% - ${lineHeight / 2}px + 1px)`
    }
    const stylesRoot = {
        width: lineWidth && lineWidth + 'px',
        height: lineWidth && lineWidth + 'px',
    }
    return (
        <div
            className={clsx([useClass('root'), className, styleClass?.root])}
            style={stylesRoot}
            ref={ref}
            {...otherProps}
        >
            <div
                className={clsx([useClass('line1'), rounded && useClass('rounded')])}
                style={styles1}
            ></div>
            <div
                className={clsx([useClass('line2'), rounded && useClass('rounded')])}
                style={styles2}
            ></div>
        </div>
    )
})