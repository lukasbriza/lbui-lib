import './SquareButton.scss'

import React, { useState } from "react";
import { useLibClass } from '../../../hooks'
import clsx from 'clsx'

import { SquareButtonProps } from './model'
import { Props, StyleClassType } from '../../../utils'

const COMP_PREFIX = 'squareButton'
const useClass = (className: string) => { return useLibClass(COMP_PREFIX, className) }

/**
 * SquareButton
 * @param {StyleClassType} [styleClass] - className definition for component
 * @param {StyleClassType} [styleClass.root] - define custom class to the root of component
 * @param {StyleClassType} [styleClass.onClick] - define custom class applied on click event
 * @param {StyleClassType} [styleClass.hover] - define custom class applied during hover action
 * @param {StyleClassType} [styleClass.label] - define custom class applied to label
 * @param {string} [color] - define color of background
 * @param {string} [textColor] - define color of text
 * @param {string} [size=medium] - predefine size of button (small|medium|large)
 * @param {string} label - define text of button
 * @param {boolean} [disabled=false] - if true button is disabled
 * @param {number} modificationClickClassDelay - delay after that modificationClickClass is applied on mobiles (default 100ms)
 * @param {number} modificationClickClassDelayRemove - time after that modificationClickClass is removed (default 1500ms)
 * @param {element} [startIcon] - apply element before label
 * @param {element} [endIcon] - apply element after label
 */
export const SquareButton = React.forwardRef<HTMLButtonElement, SquareButtonProps & Props<HTMLButtonElement>>((props, ref) => {
  const {
    onClick,
    color,
    textColor,
    size = 'medium',
    label,
    disabled = false,
    modificationClickClassDelay = 100,
    modificationClickClassDelayRemove = 1500,
    startIcon,
    endIcon,
    className,
    styleClass,
    ...otherProps
  } = props;

  const [activeClass, setActiveClass] = useState<string | null>()
  const [clickClass, setClickClass] = useState<string | null>()

  const atrSize = typeof size === 'number' ? { width: size, height: size / 2 + 10 } : {}
  const atrColor = color ? { background: color } : {}
  const atrTextColor = textColor ? { color: textColor } : {}

  //HANDLE EVENTS - MOBILE FRIENDLY//
  const handleMouseEnter = () => setActiveClass(styleClass?.hover ?? useClass('hover'))
  const handleMouseLeave = () => {
    setActiveClass(null)
  }

  const handleTouchStart = () => {
    setActiveClass(styleClass?.hover ?? useClass('hover'))
  }
  const handleTouchEnd = (e: React.BaseSyntheticEvent) => {
    setTimeout(() => {
      setClickClass(styleClass?.onClick ?? useClass('click'))
      setTimeout(() => {
        setClickClass(null)
      }, modificationClickClassDelayRemove)
    }, modificationClickClassDelay)
    setActiveClass(null)
    onClick(e)
  }
  const handleClick = (e: React.BaseSyntheticEvent) => {
    e.preventDefault()
    setClickClass(styleClass?.onClick ?? useClass('click'))
    setTimeout(() => {
      setClickClass(null)
    }, modificationClickClassDelayRemove)
    onClick(e)
  }

  return (
    <button
      className={clsx([
        useClass('root'),
        typeof size !== 'number' ? useClass(size) : null,
        clickClass,
        activeClass,
        disabled ? useClass('disabled') : null,
        className,
        styleClass?.root,
      ])}
      ref={ref}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{ ...atrSize, ...atrColor, ...atrTextColor }}
      disabled={disabled}
      {...otherProps}
    >
      <>
        {startIcon}
        <p className={clsx([useClass('label'), styleClass?.label])}>
          {label}
        </p>
        {endIcon}
      </>
    </button>
  );
});