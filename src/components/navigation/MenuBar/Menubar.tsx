import './scss/MenuBar.scss'

import React, { FC, forwardRef } from 'react'
import { useLibClass } from '../../../hooks/useLibClass'
import clsx from 'clsx'

import { Props } from '../../../utils/global.model'
import { MenuBarProps } from './types/model'

const COMP_PREFIX = 'menuBar'
const useClass = (className: string) => { return useLibClass(COMP_PREFIX, className) }

export const MenuBar = forwardRef<HTMLElement, MenuBarProps & Props<HTMLElement>>((props, ref) => {
    const {
        children,
        className,
        ...otherProps
    } = props
    return (
        <nav
            className={clsx([useClass('root'), className])}
            ref={ref}
            {...otherProps}
        >
            {children}
        </nav>
    )
})