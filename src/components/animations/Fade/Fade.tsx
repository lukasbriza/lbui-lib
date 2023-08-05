import './Fade.scss'

import React, { FC, useEffect, useRef } from 'react'
import clsx from 'clsx'
import { fadeIn, fadeOff, Props } from '../../../utils'


import { FadeProps } from './model'
import { useEffectOnce, useLibClass } from '../../../hooks'


const COMP_PREFIX = 'Fade'
const useClass = (className: string) => { return useLibClass(COMP_PREFIX, className) }

/**
 * Fade component
 * @param {boolean} [on = true] - toggle fadeIn and fadeOff methods
 * @param {boolean} [appear = true] - allow appear animation, default true
 * @param {FadeOffConfig} [configOff] - optional configuration for fadeOff method
 * @param {number} [configOff.delay] - delay of animation
 * @param {number} [configOff.duration] - duration of animation
 * @param {string} [configOff.ease] - definition of ease function from gsap
 * @param {FadeInConfig} [configIn] - optional configuration for fadeIn method
 * @param {number} [configIn.delay] - delay of animation
 * @param {number} [configIn.duration] - duration of animation
 * @param {string} [configIn.ease] - definition of ease function from gsap
 * @param {StyleClassType} [styleClass] - className definition for component
 * @param {StyleClassType} [styleClass.root] - className applied to the root of component
 * @param {void} [onEnd] - method called on end of animation
 */
export const Fade: FC<FadeProps & Props<HTMLDivElement>> = (props) => {
    const { on = true, appear = true, configOff, configIn, styleClass, className, onEnd, ...otherProps } = props

    const appeared = useRef<boolean>(false)
    const ref = useRef<HTMLDivElement>(null)

    useEffectOnce(() => {
        const animation = on ? fadeIn : fadeOff
        if (appear && appeared.current === false) {
            animation(ref.current, on ? configIn : configOff).then(() => {
                onEnd?.(on ? "on" : "off")
            })
        }
        appeared.current = true
    }, [ref])

    useEffect(() => {
        if (appeared.current) {
            const animation = on ? fadeIn : fadeOff
            animation(ref.current, on ? configIn : configOff).then(() => onEnd?.(on ? "on" : "off"))
        }
    }, [on])

    return (
        <div
            ref={ref}
            className={clsx([useClass('root'), appear && useClass('default-appear'), className, styleClass && styleClass.root])}
            {...otherProps}
        >
            {props.children}
        </div>
    )
}