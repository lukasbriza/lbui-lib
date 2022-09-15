import './scss/MenuList.scss'

import React, { forwardRef } from 'react'
import { useLibClass } from '../../../hooks/useLibClass'
import clsx from 'clsx'

import { Props } from '../../../utils/global.model'
import { MenuListProps } from './types/model'

const COMP_PREFIX = 'MenuList'
const useClass = (className: string) => { return useLibClass(COMP_PREFIX, className) }

export const MenuList = forwardRef<HTMLElement, MenuListProps & Props<HTMLElement>>((props, ref) => {
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