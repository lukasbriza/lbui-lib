import './scss/Fade.scss'

import React, { FC, useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import { fadeIn, fadeOff } from '../../../utils/global.animations'
import { FadeInConfig } from '../../../utils/global.model'
import { useLibClass } from '../../../hooks/useLibClass'

import { Props } from '../../../utils/global.model'
import { FadeProps } from './types/model'


const COMP_PREFIX = 'Fade'
const useClass = (className: string) => { return useLibClass(COMP_PREFIX, className) }

/**
 * Fade component
 * @param {boolean} on - toggle fadeIn and fadeOff methods
 * @param {boolean} appear - allow appear animation, default true
 * @param {FadeOffConfig} configOff - optional configuration for fadeOff method
 * @param {FadeInConfig} configIn - optional configuration for fadeIn method
 * @param {string} className - class applied to the root of component
 * @param {void} onEnd - method called on end of animation
 */
export const Fade: FC<FadeProps & Props<HTMLDivElement>> = (props) => {
    const { on = true, appear = true, configOff, configIn, className, onEnd, ...otherProps } = props

    const [appeared, setAppeared] = useState<boolean>(false)
    const ref = useRef<HTMLDivElement>(null)

    const changeAppear = () => setAppeared(value => !value)
    const handleCallback = (type: "on" | "off") => onEnd?.(type)

    useEffect(() => {
        if (appear && ref.current && on) {
            let tl = fadeIn(ref.current, configIn)
            tl.then(() => { changeAppear(); handleCallback("on") })
            return
        }
        if (!appear) {
            changeAppear()
        }
    }, [])

    useEffect(() => {
        if (appeared && ref.current) {
            on ? fadeIn(ref.current, configIn).then(() => handleCallback("on")) : fadeOff(ref.current, configOff).then(() => handleCallback("off"))
        }
    }, [on])

    return (
        <div
            ref={ref}
            className={clsx([useClass('root'), appear && useClass('default-appear'), className])}
            {...otherProps}
        >
            {props.children}
        </div>
    )
}