import './scss/Fade.scss'

import React, { FC, useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import { fadeIn, fadeOff } from '../../../utils/global.animations'
import { useLibClass } from '../../../hooks/useLibClass'

import { FadeProps } from './types/model'


const COMP_PREFIX = 'Fade'
const useClass = (className: string) => { return useLibClass(COMP_PREFIX, className) }

export const Fade: FC<FadeProps> = (props) => {
    const { on = true, appear = true, configOff, configIn, className, onEnd } = props

    const [appeared, setAppeared] = useState<boolean>(false)
    const ref = useRef<HTMLDivElement>(null)

    const changeAppear = () => setAppeared(value => !value)
    const handleCallback = (type: "on" | "off") => onEnd?.(type)

    useEffect(() => {
        if (appear && ref.current && on) {
            let tl = fadeIn(ref.current, configIn)
            tl.call(changeAppear).call(() => handleCallback("on"))
            return
        }
        if (!appear) {
            changeAppear()
        }
    }, [])

    useEffect(() => {
        if (appeared && ref.current) {
            on ? fadeIn(ref.current, configIn).call(() => handleCallback("on")) : fadeOff(ref.current, configOff).call(() => handleCallback("off"))
        }
    }, [on])

    return (
        <div
            ref={ref}
            className={clsx([useClass('root'), className])}
        >
            {props.children}
        </div>
    )
}