import './scss/RoundBadge.scss'

import React, { useState, useEffect, forwardRef, useRef } from 'react'
import clsx from 'clsx'
import gsap from 'gsap'
import { useLibClass } from '../../../hooks/useLibClass'
import {
    badgeFadeIn,
    badgeFadeOff,
    slideTopIn,
    slideTopOff,
    slideDownIn,
    slideDownOff,
    slideLeftIn,
    slideLeftOff,
    slideRightIn,
    slideRightOff
} from './RoudBadge.animation'

import { Props } from '../../../utils/global.model'
import { RoundBadgeProps } from './types/model'

const COMP_PREFIX = 'RoundBadge'
const useClass = (className: string) => { return useLibClass(COMP_PREFIX, className) }

/**
 * RoundBadge component
 * @constructor
 * @param {boolean} transiiton - allow transition - default true
 * @param {string} transitionStyle - define transition type
 * @param {ReactNode} defaultNode - initial displayed node
 * @param {ReactNode} hoverNode - node displayed on hover action
 * @param {string} defaultNodeclass - class passed to the root of defaultNode container
 * @param {string} hoverNodeClass - class passed to the root of hoverNode container
 * @param {string} transitionClass - class passed to the root, is positioned before className param,
 * @param {string} className - class pased to the root of component container
 * @param {number} transitionDuration - define duration of transiiton animations, not applied to fade (in seconds)
 * @param {void} onClick - passing base synthetic event object on event call
 * @param {void} onHover - passing base synthetic event object on event call
 * @param {void} onMouseEnter - passing base synthetic event object on event call
 * @param {void} onMouseLeave - passing base synthetic event object on event call
 * @param {void} onTouchStart - passing base synthetic event object on event call
 * @param {void} onTouchEnd - passing base synthetic event object on event call
 * @param {void} onTouchCancel - passing base synthetic event object on event call
 */

export const RoundBadge = forwardRef<HTMLElement, RoundBadgeProps & Props<HTMLElement>>((props, ref) => {
    const {
        onClick,
        onHover,
        onMouseEnter,
        onMouseLeave,
        onTouchStart,
        onTouchEnd,
        onTouchCancel,
        defaultNode,
        defaultNodeclass,
        hoverNode,
        hoverNodeClass,
        transition = true,
        transitionStyle = "fade",
        className,
        transitionClass,
        transitionDuration,
        ...otherProps
    } = props


    const [hovered, setHovered] = useState<boolean>(false)
    const defaultNodeRef = useRef<HTMLDivElement>(null)
    const hoverNodeRef = useRef<HTMLDivElement>(null)
    const appeared = useRef(false)

    const handleTouchStart = (e: React.BaseSyntheticEvent) => {
        e.preventDefault()
        setHovered(true)
    }
    const handleTouchEnd = (e: React.BaseSyntheticEvent) => {
        e.preventDefault()
        onClick?.(e)
        setHovered(false)
    }
    const handleMouseEnter = () => setHovered(true)
    const handleMouseLeave = () => setHovered(false)
    const handleTouchCancel = () => setHovered(false)
    const handleClick = (e: React.BaseSyntheticEvent) => { onClick?.(e) }

    useEffect(() => {
        if (transition && defaultNodeRef.current && hoverNodeRef.current && appeared.current) {
            switch (transitionStyle) {
                case 'fade':
                    const onTweenDefault = gsap.getTweensOf(defaultNodeRef.current)[0]
                    const onTweenHover = gsap.getTweensOf(hoverNodeRef.current)[0]
                    if (hovered) {
                        badgeFadeIn(defaultNodeRef.current, hoverNodeRef.current)
                    } else {
                        if (onTweenHover !== undefined && onTweenDefault !== undefined) {
                            onTweenDefault.kill()
                            onTweenHover.kill()
                            badgeFadeOff(defaultNodeRef.current, hoverNodeRef.current)
                            return
                        }
                        badgeFadeOff(defaultNodeRef.current, hoverNodeRef.current)
                    }
                    break;
                case 'slideDown':
                    hovered ? slideDownIn(defaultNodeRef.current, hoverNodeRef.current, transitionDuration) : slideDownOff(defaultNodeRef.current, hoverNodeRef.current, transitionDuration)
                    break;
                case 'slideLeft':
                    hovered ? slideLeftIn(defaultNodeRef.current, hoverNodeRef.current, transitionDuration) : slideLeftOff(defaultNodeRef.current, hoverNodeRef.current, transitionDuration)
                    break;
                case 'slideRight':
                    hovered ? slideRightIn(defaultNodeRef.current, hoverNodeRef.current, transitionDuration) : slideRightOff(defaultNodeRef.current, hoverNodeRef.current, transitionDuration)
                    break;
                case 'slideTop':
                    hovered ? slideTopIn(defaultNodeRef.current, hoverNodeRef.current, transitionDuration) : slideTopOff(defaultNodeRef.current, hoverNodeRef.current, transitionDuration)
                    break;
            }
        }
        appeared.current = true
    }, [hovered])

    return (
        <section
            ref={ref}
            className={clsx([useClass('root'), , transitionClass, className])}

            onMouseEnter={(e) => { handleMouseEnter(); onMouseEnter?.(e); onHover?.(e) }}
            onMouseLeave={(e) => { handleMouseLeave(); onMouseLeave?.(e) }}
            onTouchStart={(e) => { handleTouchStart(e); onTouchStart?.(e) }}
            onTouchEnd={(e) => { handleTouchEnd(e); onTouchEnd?.(e) }}
            onTouchCancel={(e) => { handleTouchCancel(); onTouchCancel?.(e) }}
            onClick={handleClick}

            {...otherProps}
        >
            <div
                className={clsx([
                    useClass('defaultNode'),
                    !transition && hovered && useClass('node-hide'),
                    !transition && !hovered && useClass('node-show'),
                    transition && useClass(`defaultNode-${transitionStyle}`),
                    defaultNodeclass
                ])}
                ref={defaultNodeRef}
            >
                {defaultNode}
            </div>
            <div
                className={clsx([
                    useClass('hoverNode'),
                    !transition && hovered && useClass('node-show'),
                    !transition && !hovered && useClass('node-hide'),
                    transition && useClass(`hoverNode-${transitionStyle}`),
                    hoverNodeClass
                ])}
                ref={hoverNodeRef}
            >
                {hoverNode}
            </div>
        </section>
    )
})