import './scss/Grid.scss'

import React, { FC, forwardRef } from 'react'
import clsx from 'clsx'
import { useLibClass } from '../../../hooks/useLibClass'

import { Props } from '../../../utils/global.model'
import { GridProps } from './types/model'

const COMP_PREFIX = 'Grid'
const useClass = (className: string) => { return useLibClass(COMP_PREFIX, className) }

/**
 * PictureCard component
 * @param {string} className - apply custom class to root of component
 * @param {Element} children - childrens passed to the component
 * @param {1|2|3|4|5|6|7|8|9|10} gap - apply row and column gap x * 5px
 * @param {1|2|3|4|5|6|7|8|9|10} rowGap - apply row gap x * 5px (overwrite gap property)
 * @param {1|2|3|4|5|6|7|8|9|10} rowGap - apply row gap x * 5px (overwrite gap property)
 */
export const Grid = forwardRef<HTMLElement, GridProps & Props<HTMLElement>>((props, ref) => {
    const {
        children,
        className,
        gap = 3,
        rowGap,
        columnGap,
        justifyItems = "center",
        colNumber = 4,
        tileWidth,
        justifyContent = "center",
        ...otherProps
    } = props

    return (
        <section
            ref={ref}
            className={clsx([
                useClass('root'),
                gap && useClass(`rowGap${gap}`),
                gap && useClass(`columnGap${gap}`),
                rowGap && useClass(`rowGap${rowGap}`),
                columnGap && useClass(`columnGap${columnGap}`),
                useClass(justifyItems),
                useClass(`content-${justifyContent}`),
                className
            ])}
            style={{ gridTemplateColumns: `repeat(${colNumber}, ${tileWidth ? tileWidth + 'px' : '1fr'})` }}
            {...otherProps}
        >
            {children}
        </section>
    )
})