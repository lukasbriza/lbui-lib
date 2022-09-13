import './scss/MenuList.scss'

import React, { FC, forwardRef } from 'react'
import { MenuListProps } from './types/model'
import { useLibClass } from '../../../hooks/useLibClass'
import clsx from 'clsx'

const COMP_PREFIX = 'MenuList'
const useClass = (className: string) => { return useLibClass(COMP_PREFIX, className) }

export const MenuList: FC<MenuListProps> = forwardRef<HTMLElement, MenuListProps>((props, ref) => {
    const { orientation = 'onWidth', className, ...otherProps } = props
    return (
        <section
            className={clsx([useClass('root'), useClass(orientation), className])}
            {...otherProps}
            ref={ref}
        >
            {props.children}
        </section>
    )
})