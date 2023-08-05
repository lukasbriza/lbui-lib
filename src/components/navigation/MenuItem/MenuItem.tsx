import './MenuItem.scss'

import React, { useState } from 'react'
import clsx from 'clsx'
import { useLibClass } from '../../../hooks'

import { Props } from '../../../utils'
import { MenuItemProps } from './model'

const COMP_PREFIX = 'MenuItem'
const useClass = (className: string) => { return useLibClass(COMP_PREFIX, className) }

/**
 * MenuItem component
 * @param {StyleClassType} [styleClass] - className definition for component
 * @param {StyleClassType} [styleClass.root] - define custom class to the root of component
 * @param {StyleClassType} [styleClass.label] - class passed to the root of label component
 * @param {StyleClassType} [styleClass.icon] - class passed to the root of icon component
 * @param {StyleClassType} [styleClass.underliner] - class passed to the root of underliner component
 * @param {StyleClassType} [styleClass.onClick] - class applied to the root element on click event
 * @param {Element} [icon] - element passed to the component as icon
 * @param {string} [iconPosition=left] - set icon position (left|top|right|bottom)
 * @param {string} label - text passed as label 
 * @param {boolean} underliner - turn on|off underliner
 * @param {string} underlinerOrigin - set origin of underliner animation (center|left|right)
 * @param {boolean} uppercase - turn on|off uppercase text transform
 * @param {number} animationDuration - duration of underline animation (for mobile opt)
 * @param {void} onClick
 * @param {void} onTouchStart
 * @param {void} onTouchEnd
 * @param {void} onMouseEnter
 * @param {void} onMouseLeave
 * @param {void} onTouchCancel
 * */
export const MenuItem = React.forwardRef<HTMLDivElement, MenuItemProps & Props<HTMLDivElement>>((props, ref) => {
    const {
        styleClass,
        icon,
        iconPosition = "left",
        className,
        label,
        underliner = false,
        underlinerOrigin = 'center',
        uppercase = true,
        onClick,
        onTouchStart,
        onTouchEnd,
        onMouseEnter,
        onMouseLeave,
        onTouchCancel,
        animationDuration,
        ...otherProps
    } = props
    const [active, setActive] = useState<boolean>(false)
    const [clicked, setClicked] = useState<boolean>(false)

    const handleTouchStart = (e: React.BaseSyntheticEvent) => {
        setActive(true);
        onTouchStart?.(e)
    }
    const handleTouchEnd = (e: React.BaseSyntheticEvent) => {
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
    const handleMouseEnter = (e: React.BaseSyntheticEvent) => { setActive(true); onMouseEnter?.(e) }
    const handleMouseLeave = (e: React.BaseSyntheticEvent) => { setActive(false); onMouseLeave?.(e) }
    const handleTouchCancel = (e: React.BaseSyntheticEvent) => { setActive(false); setClicked(false); onTouchCancel?.(e) }

    return (
        <div
            ref={ref}
            className={clsx([
                useClass('root'),
                icon && useClass(`icon-${iconPosition}`),
                active && useClass('root-hover'),
                clicked && styleClass?.onClick,
                className,
                styleClass?.root])}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            onTouchCancel={handleTouchCancel}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            {...otherProps}
        >
            <div className={clsx([useClass('icon'), styleClass?.icon])}>
                {icon}
            </div>
            <div className={clsx([useClass('label'), uppercase && useClass('label-upperCase'), styleClass?.label])}>
                {label}
            </div>
            <p className={clsx([
                useClass('underliner'),
                underliner && useClass(`underline-${underlinerOrigin}`),
                underliner ? useClass('underliner-show') : useClass('underliner-hide'),
                styleClass?.undeliner])}
            ></p>
        </div>
    )
})