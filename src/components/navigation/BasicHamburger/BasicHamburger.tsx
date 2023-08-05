import './BasicHamburger.scss'

import React, { useState, useEffect, useRef } from 'react'
import { useLibClass } from '../../../hooks'
import { crossOn, crossOff } from './gsap.animation'
import clsx from 'clsx'

import { Props, StyleClassType } from '../../../utils'
import { BasicHamburgerProps, confOn, confOff } from './model'

const COMP_PREFIX = 'basicHamburger'
const useClass = (className: string) => { return useLibClass(COMP_PREFIX, className) }

/**
 * BasicHamburger
 * @param {boolean} [show=true] - show or hide BasicHamburger component
 * @param {string} [color] - set color of hamburger
 * @param {confOn} [onConfig] - configuration for on animation
 * @param {confOn} [onConfig.ease] - define ease animation
 * @param {confOn} [onConfig.duration] - define duration of animation
 * @param {confOn} [onConfig.middleDuration] - define duration of middle line animation
 * @param {confOn} [onConfig.delay] - define delay of animation
 * @param {confOff} [offConfig] - configuration for off animation
 * @param {confOff} [offConfig.ease] - define ease animation
 * @param {confOff} [offConfig.duration] - define duration of animation
 * @param {confOff} [offConfig.middleDuration] - define duration of middle line animation
 * @param {confOff} [offConfig.delay] - define delay of animation
 * @param {confOff} [offConfig.line2Height] - define height of middle line
 * @param {StyleClassType} [styleClass] - className definition for component
 * @param {StyleClassType} [styleClass.root] - define custom class to the root of component
 * @param {boolean} [prohibitAnimation=false] - if true animation will not perform
 */

export const BasicHamburger = React.forwardRef<HTMLDivElement, BasicHamburgerProps & Props<HTMLElement>>((props, ref) => {
    const {
        show = true,
        className,
        styleClass,
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
    const lineClasses = [useClass('line'), lineType === "rounded" ? useClass('line-rounded') : null]

    useEffect(() => {
        if (prohibitAnimation === false) {
            crossed ? crossOn(line1, line2, line3, onConfig) : crossOff(line1, line2, line3, offConfig)
        }
    }, [crossed])

    return (
        <section
            className={clsx([
                useClass('root'),
                show ? useClass('show') : useClass('hide'),
                className,
                styleClass?.root
            ])}
            style={hamburgerColor}
            onClick={() => { setCrossed(value => !value); onClick?.() }}
            ref={ref}
            {...otherProps}
        >
            <div ref={line1} className={clsx(lineClasses)}></div>
            <div ref={line2} className={clsx(lineClasses)}></div>
            <div ref={line3} className={clsx(lineClasses)}></div>
        </section>
    )
})