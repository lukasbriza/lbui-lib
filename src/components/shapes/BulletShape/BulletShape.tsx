import './scss/BulletShape.scss'

import React from 'react';
import { useLibClass } from '../../../hooks/useLibClass'
import clsx from 'clsx'

import { BulletProps } from './types/model'
import { Props } from '../../../utils/global.model'

const COMP_PREFIX = 'BulletShape'
const useClass = (className: string) => { return useLibClass(COMP_PREFIX, className) }

/**
 * BulletShape component
 * @constructor
 * @param {string} className - class pased to the root of component container
 * @param {number} size - size * 2 px applied to the width and height
 * @param {string} type - type of bullet (round, diamond, square)
 */
export const BulletShape = React.forwardRef<HTMLDivElement, BulletProps & Props<HTMLDivElement>>((props, ref) => {
    const { className, type = "round", size, color, ...otherProps } = props

    return (
        <div
            className={clsx([useClass('root'), useClass(type), className])}
            ref={ref}
            style={{
                width: size && size * 2 + 'px',
                height: size && size * 2 + 'px',
                background: color && color
            }}
            {...otherProps}
        >
        </div>
    )
})