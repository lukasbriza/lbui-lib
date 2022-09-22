import './scss/MenuItem.scss'

import React, { useState } from 'react'
import clsx from 'clsx'
import { useLibClass } from '../../../hooks/useLibClass'

import { Props } from '../../../utils/global.model'
import { MenuItemProps } from './types/model'

const COMP_PREFIX = 'MenuItem'
const useClass = (className: string) => { return useLibClass(COMP_PREFIX, className) }

/**
 * MenuItem component
 * @param {Element} icon - element passed to the component as icon
 * @param {string} iconPosition - set icon position (left|top|right|bottom)
 * @param {string} iconclass - class passed to the root of icon component
 * @param {string} clasSName - class passed to the root of the component
 * @param {string} labelClass - class passed to the root of label component
 * @param {string} label - text passed as label 
 * @param {boolean} underliner - turn on|off underliner
 * @param {string} underlinerOrigin - set origin of underliner animation (center|left|right)
 * @param {string} underlinerClass - class passed to the root of underliner component
 * @param {boolean} uppercase - turn on|off uppercase text transform
 * @param {number} animationDuration - duration of underline animation (for mobile opt)
 * @param {string} clickClass - class applied to the root element on click event
 * @param {void} onClick
 * @param {void} onTouchStart
 * @param {void} onTouchEnd
 * @param {void} onMouseEnter
 * @param {void} onMouseLeave
 * @param {void} onTouchCancel
 * */
export const MenuItem = React.forwardRef<HTMLDivElement, MenuItemProps & Props<HTMLDivElement>>((props, ref) => {
    const {
        icon,
        iconPosition = "left",
        iconClass,
        className,
        labelClass,
        label,
        underliner = false,
        underlinerOrigin = 'center',
        underlinerClass,
        uppercase = true,
        onClick,
        onTouchStart,
        onTouchEnd,
        onMouseEnter,
        onMouseLeave,
        onTouchCancel,
        animationDuration,
        clickClass,
        ...otherProps
    } = props
    const [active, setActive] = useState<boolean>(false)
    const [clicked, setClicked] = useState<boolean>(false)

    const handleTouchStart = (e: React.BaseSyntheticEvent) => {
        e.preventDefault();
        setActive(true);
        onTouchStart?.(e)
    }
    const handleTouchEnd = (e: React.BaseSyntheticEvent) => {
        e.preventDefault()
        setTimeout(() => {
            setClicked(true)
            setActive(false)
            setTimeout(() => {
                setClicked(false)
            }, 100)
        }, animationDuration ?? 500)
        onTouchEnd?.(e)
    }
    const handleClick = (e: React.BaseSyntheticEvent) => { e.preventDefault(); onClick?.(e) }
    const handleMouseEnter = (e: React.BaseSyntheticEvent) => { e.preventDefault(); setActive(true); onMouseEnter?.(e) }
    const handleMouseLeave = (e: React.BaseSyntheticEvent) => { e.preventDefault(); setActive(false); onMouseLeave?.(e) }
    const handleTouchCancel = (e: React.BaseSyntheticEvent) => { e.preventDefault(), setActive(false); setClicked(false); onTouchCancel?.(e) }

    return (
        <div
            ref={ref}
            className={clsx([useClass('root'), icon && useClass(`icon-${iconPosition}`), active && useClass('root-hover'), clicked && clickClass, className])}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            onTouchCancel={handleTouchCancel}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            {...otherProps}
        >
            <div className={clsx([useClass('icon'), iconClass])}>
                {icon}
            </div>
            <div className={clsx([useClass('label'), uppercase && useClass('label-upperCase'), labelClass])}>
                {label}
            </div>
            <p className={clsx([
                useClass('underliner'),
                underliner && useClass(`underline-${underlinerOrigin}`),
                underliner ? useClass('underliner-show') : useClass('underliner-hide'),
                underlinerClass])}
            ></p>
        </div>
    )
})