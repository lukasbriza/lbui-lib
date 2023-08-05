import './Underlining.scss';

import React, { useRef, useEffect, forwardRef } from 'react'
import gsap from 'gsap'
import { useLibClass } from '../../../hooks'
import clsx from 'clsx'
import { stretch, shrink } from '../../../utils/global.animations'

import { Props, StretchConfig } from '../../../utils'
import { UnderliningProps } from './model'


const COMP_PREFIX = 'Underlining'
const useClass = (className: string) => { return useLibClass(COMP_PREFIX, className) }

/**
 * Underlining component
 * @param {StyleClassType} [styleClass] - className definition for component
 * @param {string} [styleClass.root] - className applied to the root of component
 * @param {string} [styleClass.line] - className applied to the line of component
 * @param {boolean} [on] - trigger stretch or shrink animation (works only if param hoverable is false)
 * @param {boolean} [hoverable=true] - define if animation is played on hover (if true, param on dont work)
 * @param {StretchConfig} [stretchConfig] - configurate stretch animation
 * @param {number} [stretchConfig.width] - animation target width
 * @param {number} [stretchConfig.duration] - duration of animation
 * @param {string} [stretchConfig.ease] - definition of ease function from gsap
 * @param {ShrinkConfig} [shrinkConfig] - configurate shrink animation 
 * @param {number} [shrinkConfig.width] - animation target width
 * @param {number} [shrinkConfig.duration] - duration of animation
 * @param {string} [shrinkConfig.ease] - definition of ease function from gsap
 * @param {string} [origin=center] - sets origin of animation
 */
export const Underlining = forwardRef<HTMLDivElement, UnderliningProps & Props<HTMLDivElement>>((props, ref) => {
    const { className, styleClass, hoverable = true, on, children, shrinkConfig, stretchConfig, origin = 'center', ...otherProps } = props
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
            ref={ref}
            className={clsx([useClass('root'), className, styleClass?.root])}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onMouseEnter={handleHoverOn}
            onMouseLeave={handleHoverOff}
            {...otherProps}
        >
            {children}
            <div className={clsx([useClass('line'), useClass(`origin-${origin}`), styleClass?.line])} ref={lineRef}></div>
        </div>
    )
})