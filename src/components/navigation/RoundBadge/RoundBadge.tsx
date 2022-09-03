import './scss/RoundBadge.scss'

import React, { FC, useState, useEffect, forwardRef } from 'react'
import clsx from 'clsx'
import { useLibClass } from '../../../hooks/useLibClass'
import { RoundBadgeProps } from './types/model'

const COMP_PREFIX = 'RoundBadge'
const useClass = (className: string) => { return useLibClass(COMP_PREFIX, className) }

export const RoundBadge: FC<RoundBadgeProps> = forwardRef<HTMLElement, RoundBadgeProps>((props, ref) => {
    const {
        defaultNode,
        hoverNode,
        transition = true,
        transitionStyle,
        className,
        transitionClass,
        ...otherProps
    } = props


    return (
        <section
            ref={ref}
            className={clsx([useClass('root'), transition && !transitionClass && transitionStyle && useClass(`transition-${transitionStyle}`), transitionClass, className])}
            {...otherProps}
        >
            {defaultNode}
            {hoverNode}
        </section>
    )
})