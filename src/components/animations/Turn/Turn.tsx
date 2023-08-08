import './Turn.scss'

import React, { FC, useEffect, useRef } from 'react'
import clsx from 'clsx'

import { Props, StyleClassType, turnTo } from '../../../utils'
import { TurnProps } from './model'
import { useEffectOnce, useLibClass } from '../../../hooks'

const COMP_PREFIX = 'Turn'
const useClass = (className: string) => { return useLibClass(COMP_PREFIX, className) }

/**
 * Turn component
 * @param {boolean} on - toggle turnOn and turnOff methods
 * @param {boolean} [appear = true] - allow appear animation, default true
 * @param {TurnToConfig} [configOff] - optional configuration for turnOff method
 * @param {number} [configOff.duration] - duration of animation
 * @param {string} [configOff.ease] - definition of ease function from gsap
 * @param {TurnToConfig} [configOn] - optional configuration for turnOn method
 * @param {number} [configOn.duration] - duration of animation
 * @param {string} [configOn.ease] - definition of ease function from gsap
 * @param {string} [className] - class applied to the root of component
 * @param {void} [onEnd] - method called on end of animation
 * @param {StyleClassType} [styleClass] - className definition for component
 * @param {string} [styleClass.root] - className applied to the root of component
 * @param {number} base - starting rotation of element
 * @param {number} to - final rotation of element
 */
export const Turn: FC<TurnProps & Props<HTMLDivElement>> = (props) => {
    const { on = false, appear = true, className, styleClass, base, to, configOn, configOff, onEnd, ...otherProps } = props
    const appeared = useRef<boolean>(false)
    const ref = useRef<HTMLDivElement>(null)

    useEffectOnce(() => {
        if (appear && appeared.current === false && on) {
            turnTo(ref.current, to, { ...configOn }).then(() => {
                onEnd?.("on")
            })
        }
        appeared.current = true
    })

    useEffect(() => {
        if (appeared.current) {
            turnTo(ref.current, on ? to : base, on ? { ...configOn } : { ...configOff }).then(() => onEnd?.(on ? "on" : "off"))
        }
    }, [on])

    return (
        <div
            ref={ref}
            style={{ transform: `rotate(${base}deg)` }}
            className={clsx([useClass('root'), className, styleClass?.root && styleClass.root])}
            {...otherProps}
        >
            {props.children}
        </div>
    )
}