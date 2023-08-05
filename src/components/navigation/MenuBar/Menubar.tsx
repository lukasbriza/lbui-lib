import './MenuBar.scss'

import React, { forwardRef } from 'react'
import { useLibClass } from '../../../hooks'
import clsx from 'clsx'

import { Props, StyleClassType } from '../../../utils'
import { MenuBarProps } from './model'

const COMP_PREFIX = 'menuBar'
const useClass = (className: string) => { return useLibClass(COMP_PREFIX, className) }

/**
 * MenuBar
 * @param {StyleClassType} [styleClass] - className definition for component
 * @param {StyleClassType} [styleClass.root] - define custom class to the root of component
 */
export const MenuBar = forwardRef<HTMLElement, MenuBarProps & Props<HTMLElement>>((props, ref) => {
    const {
        children,
        styleClass,
        className,
        ...otherProps
    } = props
    return (
        <nav
            className={clsx([useClass('root'), className, styleClass?.root])}
            ref={ref}
            {...otherProps}
        >
            {children}
        </nav>
    )
})