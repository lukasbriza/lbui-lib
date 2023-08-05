import './MenuList.scss'

import React, { forwardRef } from 'react'
import { useLibClass } from '../../../hooks'
import clsx from 'clsx'

import { Props, StyleClassType } from '../../../utils'
import { MenuListProps } from './model'

const COMP_PREFIX = 'MenuList'
const useClass = (className: string) => { return useLibClass(COMP_PREFIX, className) }

/**
 * MenuList
 * @param {StyleClassType} [styleClass] - className definition for component
 * @param {StyleClassType} [styleClass.root] - define custom class to the root of component
 * @param {string} [orientation=onWidth] - define orientation of component
 */
export const MenuList = forwardRef<HTMLElement, MenuListProps & Props<HTMLElement>>((props, ref) => {
    const { orientation = 'onWidth', className, styleClass, ...otherProps } = props
    return (
        <section
            className={clsx([useClass('root'), useClass(orientation), className, styleClass?.root])}
            {...otherProps}
            ref={ref}
        >
            {props.children}
        </section>
    )
})