import React, { FC, useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import { fadeIn, fadeOff } from '../../../utils/global.animations'
import { useLibClass } from '../../../hooks/useLibClass'

import { FadeProps } from './types/model'


const COMP_PREFIX = 'Fade'
const useClass = (className: string) => { return useLibClass(COMP_PREFIX, className) }

export const Fade: FC<FadeProps> = (props) => {
    const { on = true, appear = true, configOff, configIn } = props

    const [appeared, setAppeared] = useState<boolean>(false)
    const ref = useRef<HTMLDivElement>(null)

    const changeAppear = () => setAppeared(value => !value)

    useEffect(() => {
        if (appear && ref.current && on) {
            console.log("appear")
            let tl = fadeIn(ref.current, configIn)
            tl.call(changeAppear)
            return
        }
        if (!appear) {
            changeAppear()
        }
    }, [])

    useEffect(() => {
        if (appeared && ref.current) {
            console.log("on", on)
            on ? fadeIn(ref.current, configIn) : fadeOff(ref.current, configOff)
        }
    }, [on])

    return (
        <div
            ref={ref}
            className={clsx([])}
        >
            {props.children}
        </div>
    )
}