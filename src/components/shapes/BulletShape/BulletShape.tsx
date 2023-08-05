import './BulletShape.scss'

import React from 'react';
import { useLibClass } from '../../../hooks'
import clsx from 'clsx'

import { BulletProps, BulletType } from './model'
import { Props } from '../../../utils'

const COMP_PREFIX = 'BulletShape'
const useClass = (className: string) => { return useLibClass(COMP_PREFIX, className) }

/**
 * BulletShape component
 * @param {StyleClassType} [styleClass] - className definition for component 
 * @param {StyleClassType} [styleClass.root] - class applied to the root of the component
 * @param {number} [size] - size * 2 px applied to the width and height
 * @param {BulletType} [type] - type of bullet (round, diamond, square)
 * @param {string} [color] - color applied to background
 */
export const BulletShape = React.forwardRef<HTMLDivElement, BulletProps & Props<HTMLDivElement>>((props, ref) => {
    const { className, style, styleClass, type = "round", size, color, ...otherProps } = props

    return (
        <div
            className={clsx([useClass('root'), useClass(type), className, styleClass?.root])}
            ref={ref}
            style={{
                width: size && size * 2 + 'px',
                height: size && size * 2 + 'px',
                background: color && color,
                ...style
            }}
            {...otherProps}
        >
        </div>
    )
})