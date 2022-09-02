import './scss/MenuBar.scss'

import React, { FC } from 'react'
import { useLibClass } from '../../../hooks/useLibClass'
import { MenuBarProps } from './types/model'
import clsx from 'clsx'

const COMP_PREFIX = 'menuBar'
const useClass = (className: string) => { return useLibClass(COMP_PREFIX, className) }

export const MenuBar: FC<MenuBarProps> = (props) => {
    const {
        children,
        className,
        ...otherProps
    } = props
    return (
        <nav
            className={clsx([useClass('root'), className])}
            {...otherProps}
        >
            {children}
        </nav>
    )
}