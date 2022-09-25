import './scss/SquareButton.scss'

import React, { useState } from "react";
import { useLibClass } from '../../../hooks/useLibClass'
import clsx from 'clsx'

import { SquareButtonProps } from './types/model'
import { Props } from '../../../utils/global.model'

const COMP_PREFIX = 'squareButton'
const useClass = (className: string) => { return useLibClass(COMP_PREFIX, className) }

export const SquareButton = React.forwardRef<HTMLButtonElement, SquareButtonProps & Props<HTMLButtonElement>>((props, ref) => {
  const {
    onClick,
    color,
    textColor,
    size = 'medium',
    label,
    disabled = false,
    hoverClass = useClass('hover'),
    modificationClickClass = useClass('click'),
    modificationClickClassDelay = 100,
    modificationClickClassDelayRemove = 1500,
    modificationClass,
    startIcon,
    endIcon,
    ...otherProps
  } = props;

  const [activeClass, setActiveClass] = useState<string | null>()
  const [clickClass, setClickClass] = useState<string | null>()

  const atrSize = typeof size === 'number' ? { width: size, height: size / 2 + 10 } : {}
  const atrColor = color ? { background: color } : {}
  const atrTextColor = textColor ? { color: textColor } : {}

  //HANDLE EVENTS - MOBILE FRIENDLY//
  const handleMouseEnter = () => setActiveClass(hoverClass)
  const handleMouseLeave = () => {
    setActiveClass(null)
  }

  const handleTouchStart = () => {
    setActiveClass(hoverClass)
  }
  const handleTouchEnd = (e: React.BaseSyntheticEvent) => {
    setTimeout(() => {
      setClickClass(modificationClickClass)
      setTimeout(() => {
        setClickClass(null)
      }, modificationClickClassDelayRemove)
    }, modificationClickClassDelay)
    setActiveClass(null)
    onClick(e)
  }
  const handleClick = (e: React.BaseSyntheticEvent) => {
    e.preventDefault()
    setClickClass(modificationClickClass)
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
        modificationClass,
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
        <p className={useClass('label')}>
          {label}
        </p>
        {endIcon}
      </>
    </button>
  );
});