import './Grid.scss'

import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { useLibClass } from '../../../hooks'

import { Props } from '../../../utils'
import { GridProps } from './model'

const COMP_PREFIX = 'Grid'
const useClass = (className: string) => { return useLibClass(COMP_PREFIX, className) }

/**
 * PictureCard component
 * @param {StyleClassType} [styleClass] - className definition for component
 * @param {StyleClassType} [styleClass.root] - apply custom class to root of component
 * @param {Element} children - childrens passed to the component
 * @param {1|2|3|4|5|6|7|8|9|10} [gap=3] - apply row and column gap x * 5px
 * @param {1|2|3|4|5|6|7|8|9|10} [rowGap] - apply row gap x * 5px (overwrite gap property)
 * @param {1|2|3|4|5|6|7|8|9|10} [columnGap] - apply column gap x * 5px (overwrite gap property)
 * @param {number} [colNumber] - number of columns
 * @param {number} [tileWidth] - width applied to tile
 * @param {start|center|end} [justifyItems=center] - apply justify-items property on component
 * @param {center|start|end|space-between|space-around|space-evenly} [justifyContent=center] - apply justify-content on component
 */
export const Grid = forwardRef<HTMLElement, GridProps & Props<HTMLElement>>((props, ref) => {
    const {
        children,
        className,
        styleClass,
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
                className,
                styleClass?.root
            ])}
            style={{ gridTemplateColumns: `repeat(${colNumber}, ${tileWidth ? tileWidth + 'px' : '1fr'})` }}
            {...otherProps}
        >
            {children}
        </section>
    )
})