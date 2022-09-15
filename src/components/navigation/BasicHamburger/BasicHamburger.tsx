import './scss/BasicHamburger.scss'

import React, { useState, useEffect, useRef } from 'react'
import { useLibClass } from '../../../hooks/useLibClass'
import { crossOn, crossOff } from './gsap.animation'
import clsx from 'clsx'

import { Props } from '../../../utils/global.model'
import { BasicHamburgerProps } from './types/model'

const COMP_PREFIX = 'basicHamburger'
const useClass = (className: string) => { return useLibClass(COMP_PREFIX, className) }

export const BasicHamburger = React.forwardRef<HTMLDivElement, BasicHamburgerProps & Props<HTMLElement>>((props, ref) => {
    const {
        show = true,
        className,
        color,
        lineType,
        onClick,
        onConfig,
        offConfig,
        prohibitAnimation = false,
        ...otherProps
    } = props

    const [crossed, setCrossed] = useState<boolean>(false)
    const hamburgerColor = color ? { background: color } : {}

    const line1 = useRef<HTMLDivElement>(null)
    const line2 = useRef<HTMLDivElement>(null)
    const line3 = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!prohibitAnimation) {
            crossed ? crossOn(line1, line2, line3, onConfig) : crossOff(line1, line2, line3, offConfig)
        }
    }, [crossed])

    return (
        <section
            className={clsx([
                useClass('root'),
                show ? useClass('show') : useClass('hide'),
                className
            ])}
            style={hamburgerColor}
            onClick={() => { setCrossed(value => !value); onClick?.() }}
            ref={ref}
            {...otherProps}
        >
            <div ref={line1} className={clsx([useClass('line'), lineType === "rounded" ? useClass('line-rounded') : null])}></div>
            <div ref={line2} className={clsx([useClass('line'), lineType === "rounded" ? useClass('line-rounded') : null])}></div>
            <div ref={line3} className={clsx([useClass('line'), lineType === "rounded" ? useClass('line-rounded') : null])}></div>
        </section>
    )
})