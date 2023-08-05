import './BulletText.scss'

import React, { forwardRef } from 'react'
import { BulletShape } from '../../shapes/BulletShape/BulletShape'
import { useLibClass } from '../../../hooks'
import clsx from 'clsx'

import { BulletTextProps } from './model'
import { Props, StyleClassType } from '../../../utils'

const COMP_PREFIX = 'BulletText'
const useClass = (className: string) => { return useLibClass(COMP_PREFIX, className) }

/**
 * BulletText
 * @param {StyleClassType} [styleClass] - className definition for component
 * @param {StyleClassType} [styleClass.root] - className applied to the root of component
 * @param {StyleClassType} [styleClass.bullet] - className applied to the bullet
 * @param {number} [bulletSize] - size * 2px applied to the with and height of bullet (default 3)
 * @param {string} [bulletType=round] - define type of bullet (round|square|diamond)(default round)
 * @param {Element} children - alements passed as text for bullet component
 */
export const BulletText = forwardRef<HTMLDivElement, BulletTextProps & Props<HTMLDivElement>>((props, ref) => {
    const { className, styleClass, bulletSize = 3, bulletType = 'round', children } = props

    return (
        <div className={clsx([useClass('root'), className, styleClass?.root])} ref={ref}>
            <BulletShape
                type={bulletType}
                size={bulletSize}
                className={clsx([useClass('bullet'), styleClass?.bullet])}
            />
            {children}
        </div>
    )
})