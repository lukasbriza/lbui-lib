import './scss/Turn.scss'

import React, { FC, useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import { useLibClass } from '../../../hooks/useLibClass'
import { turnTo } from '../../../utils'

import { Props, TurnToConfig } from '../../../utils/global.model'
import { TurnProps } from './types/model'

const COMP_PREFIX = 'Turn'
const useClass = (className: string) => { return useLibClass(COMP_PREFIX, className) }

/**
 * Turn component
 * @param {boolean} on - toggle turnOn and turnOff methods
 * @param {boolean} appear - allow appear animation, default true
 * @param {TurnToConfig} configOff - optional configuration for turnOff method
 * @param {TurnToConfig} configOn - optional configuration for turnOn method
 * @param {string} className - class applied to the root of component
 * @param {void} onEnd - method called on end of animation
 * @param {number} base - starting rotation of element
 * @param {number} to - final rotation of element
 */
export const Turn: FC<TurnProps & Props<HTMLDivElement>> = (props) => {
    const { on = false, appear = true, className, base, to, configOn, configOff, onEnd, ...otherProps } = props

    const [appeared, setAppeared] = useState<boolean>(false)
    const ref = useRef<HTMLDivElement>(null)

    const changeAppear = () => setAppeared(value => !value)
    const handleCallback = (type: "on" | "off") => onEnd?.(type)


    useEffect(() => {
        if (appear && ref.current && !on) {
            let tween = turnTo(ref.current, to, { ...configOn })
            tween.then(() => { changeAppear(); handleCallback("on") })
            return
        }
        if (!appear) {
            changeAppear()
        }
    }, [])

    useEffect(() => {
        if (appeared && ref.current) {
            on ? turnTo(ref.current, to, { ...configOn }).then(() => { handleCallback("on") }) : turnTo(ref.current, base, { ...configOff }).then(() => { handleCallback("off") })
        }
    }, [on])

    return (
        <div
            ref={ref}
            style={{
                transform: `rotate(${base}deg)`
            }}
            className={clsx([useClass('root'), className])}
            {...otherProps}
        >
            {props.children}
        </div>
    )
}