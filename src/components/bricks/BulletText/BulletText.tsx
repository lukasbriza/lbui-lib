import './scss/BulletText.scss'

import React, { forwardRef } from 'react'
import { BulletShape } from '../../shapes/BulletShape/BulletShape'
import { useLibClass } from '../../../hooks/useLibClass'
import clsx from 'clsx'

import { BulletTextProps } from './types/model'
import { Props } from '../../../utils/global.model'

const COMP_PREFIX = 'BulletText'
const useClass = (className: string) => { return useLibClass(COMP_PREFIX, className) }

/**
 * BulletText
 * @param {string} className - apply custom class to the root of element
 * @param {string} bulletClass - apply custom class to the bullet component
 * @param {number} bulletSize - size * 2px applied to the with and height of bullet (default 3)
 * @param {string} bulletType - define type of bullet (round|square|diamond)(default round)
 * @param {Element} children - alements passed as text for bullet component
 */
export const BulletText = forwardRef<HTMLDivElement, BulletTextProps & Props<HTMLDivElement>>((props, ref) => {
    const { className, bulletClass, bulletSize = 3, bulletType = 'round', children } = props

    return (
        <div className={clsx([useClass('root'), className])} ref={ref}>
            <BulletShape
                type={bulletType}
                size={bulletSize}
                className={clsx([useClass('bullet'), bulletClass])}
            />
            {children}
        </div>
    )
})