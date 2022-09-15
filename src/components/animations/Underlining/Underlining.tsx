import './scss/Underlining.scss';

import React, { FC, useRef, useEffect } from 'react'
import gsap from 'gsap'
import { useLibClass } from '../../../hooks/useLibClass'
import clsx from 'clsx'
import { stretch, shrink } from '../../../utils/global.animations'

import { Props } from '../../../utils/global.model'
import { UnderliningProps } from './types/model'


const COMP_PREFIX = 'Underlining'
const useClass = (className: string) => { return useLibClass(COMP_PREFIX, className) }

/**
 * Underlining component
 * @param {string} className - class applied to the root of component
 * @param {string} lineClass - class applied to the line component
 * @param {boolean} on - trigger stretch or shrink animation (works only if param hoverable is false)
 * @param {boolean} hoverable - define if animation is played on hover (if true, param on dont work)
 * @param {StretchConfig} stretchConfig - configurate stretch animation
 * @param {ShrinkConfig} shrinkConfig - configurate shrink animation 
 * @param {string} origin - sets origin of animation
 */
export const Underlining: FC<UnderliningProps & Props<HTMLDivElement>> = (props) => {
    const { className, lineClass, hoverable = true, on, children, shrinkConfig, stretchConfig, origin = 'center', ...otherProps } = props
    const lineRef = useRef<HTMLDivElement>(null)
    const playing = useRef<boolean>(false)

    const handleTouchStart = () => {
        if (hoverable) {
            playing.current = true
            let tl = gsap.timeline()
            tl.add(stretch(lineRef.current!, stretchConfig)).then(() => { playing.current = false })
        }
    }
    const handleTouchEnd = () => {
        if (hoverable && !playing.current) {
            playing.current = true
            let tl = gsap.timeline()
            tl.add(shrink(lineRef.current!, shrinkConfig)).then(() => { playing.current = false })
        }
        if (hoverable && playing.current) {
            let onTween = gsap.getTweensOf(lineRef.current)[0]
            onTween.then(() => { shrink(lineRef.current!, shrinkConfig) }).then(() => { playing.current = false })
        }
    }

    const handleHoverOn = () => hoverable && stretch(lineRef.current!, stretchConfig)
    const handleHoverOff = () => hoverable && shrink(lineRef.current!, shrinkConfig)

    useEffect(() => {
        if (!hoverable && on === true) { stretch(lineRef.current!, stretchConfig) }
        if (!hoverable && on === false) { shrink(lineRef.current!, shrinkConfig) }
    }, [on])

    return (
        <div
            className={clsx([useClass('root'), className])}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onMouseEnter={handleHoverOn}
            onMouseLeave={handleHoverOff}
            {...otherProps}
        >
            {children}
            <div className={clsx([useClass('line'), useClass(`origin-${origin}`), lineClass])} ref={lineRef}></div>
        </div>
    )
}