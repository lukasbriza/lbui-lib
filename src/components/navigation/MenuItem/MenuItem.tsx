import './scss/MenuItem.scss'

import React from 'react'
import clsx from 'clsx'
import { MenuItemProps } from './types/model'
import { useLibClass } from '../../../hooks/useLibClass'

const COMP_PREFIX = 'MenuItem'
const useClass = (className: string) => { return useLibClass(COMP_PREFIX, className) }

export const MenuItem = React.forwardRef<HTMLDivElement, MenuItemProps>((props, ref) => {
    const {
        icon,
        iconPosition = "left",
        className,
        labelClass,
        label,
        underliner = false,
        underlinerOrigin = 'center',
        underlinerClass,
        uppercase = true,
        ...otherProps
    } = props

    return (
        <div
            ref={ref}
            className={clsx([useClass('root'), icon && useClass(`icon-${iconPosition}`), className])}
            {...otherProps}
        >
            <div className={useClass('icon')}>
                {icon}
            </div>
            <div className={clsx([useClass('label'), uppercase && useClass('label-upperCase'), labelClass])}>
                {label}
            </div>
            <p className={clsx([
                useClass('underliner'),
                underliner && useClass(`underline-${underlinerOrigin}`),
                underliner ? useClass('underliner-show') : useClass('underliner-hide'),
                underlinerClass])}
            ></p>
        </div>
    )
})