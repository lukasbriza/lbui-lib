import './PopUp.scss'

import React, { FC, useEffect, useRef } from 'react'
import gsap, { Power2 } from 'gsap'
import { useLibClass } from '../../../hooks'
import clsx from 'clsx'

import { PopUpProps, PopUpType } from './model'
import { fadeIn, fadeOff, slideFrom, slideTo } from '../../../utils/global.animations'
import { Paper } from '../Paper/Paper'
import { Success, Error, Info, Warning } from '../../../lib'
import { StyleClassType } from '../../../utils'

const COMP_PREFIX = 'PopUp'
const useClass = (className: string) => { return useLibClass(COMP_PREFIX, className) }

/**
 * PopUp
 * @param {void} unMount - method with id of popup as parameter
 * @param {} portalPosition - ["center" | "left" | "right", "center" | "up" | "bottom"] - information about portal position
 * @param {string} [leaveDirection=right] - direction of leave animation (left|right|up|bottom)
 * @param {function} [leaveAnimation] - animation applied on leaving animation 
 * @param {string} [enterDirection=right] - direction of enter animation (left|right|up|bottom) 
 * @param {function} [enterAnimation] - animation applied on entered popUp
 * @param {string} hookId - id of popup passed as property from popup provider
 * @param {header} [header="Header"] - header text defined by show() fn
 * @param {string} [text="content"] - body text defined by show() fn
 * @param {StyleClassType} [styleClass] - className definition for component
 * @param {StyleClassType} [styleClass.root] - define custom class to the root of component
 * @param {StyleClassType} [styleClass.cross] - define custom class to cross component
 * @param {StyleClassType} [styleClass.type] -{ERROR:string ,SUCCESS:string ,INFO:string ,INFO:string} - define custom class to every type of popup
 * @param {PopUpType} [type=PopUpType.WARNING] - define type of popup
 * @param {object} [typeIcon] - {ERROR:element ,SUCCESS:element ,INFO:element ,INFO:element} - define own icon for every popup type
 * @param {object} [timeoutOption] - {enable:boolean ,timeout:number ,timeoutLineclass:string} - timeout option setup
 * @param {boolean} [closeOnClick=true] - if true popup will be closing on click
 * @param {boolean} [cross=true] - if true cross component will be visible
 * @param {void} [onClose] - callback called on close event
 * @param {void} [onClick] -callback called on click event
 */
export const PopUp: FC<PopUpProps> = (props) => {
    const {
        styleClass,
        unMount,
        portalPosition,
        leaveDirection = "right",
        enterDirection = "right",
        enterAnimation,
        hookId,
        header = 'Header',
        text = 'Content',
        className,
        leaveAnimation,
        type = PopUpType.WARNING,
        typeIcon,
        timeoutOption,
        closeOnClick = true,
        cross = true,
        onClose,
        onClick,
        ...otherProps
    } = props
    const { enable = false, timeout = 5, timeoutLine = true, timeoutLineClass } = timeoutOption ?? {}
    const xPos = portalPosition[0]
    const ref = useRef<HTMLDivElement>(null)
    const lineRef = useRef<HTMLSpanElement>(null)
    const animation = useRef<gsap.core.Tween | undefined>(undefined)


    const startTimer = () => animation.current = gsap.to(lineRef.current, { width: '0%', ease: 'linear', duration: timeout, onComplete: handleClose })

    //CLICK
    const handleClick = (e: React.SyntheticEvent) => {
        onClick?.(e)
        if (closeOnClick) handleClose()
    }

    //CLOSE
    const handleClose = () => {
        const { current } = ref
        if (current) {
            if (leaveAnimation) {
                leaveAnimation(current, leaveDirection)
            } else {
                slideTo(current, leaveDirection)
                fadeOff(current)
            }
            setTimeout(() => {
                unMount(hookId)
                onClose?.()
            }, 1000)
            return
        }
    }

    //HOVER
    const handleHoverOn = () => {
        const directionEffect = () => {
            if (xPos === 'left') {
                return { x: '5px' }
            }
            if (xPos === 'right') {
                return { x: '-5px' }
            }
            return {}
        }
        const effect = directionEffect()
        ref.current && gsap.to(ref.current, { ...effect, scale: 1.02, duration: 0.25, ease: Power2.easeOut })
        animation.current && animation.current.pause()
    }
    const handleHoverOff = () => {
        const directionEffect = () => {
            if (xPos === 'left' || xPos === 'right') {
                return { x: '0px' }
            }
            return {}
        }
        const effect = directionEffect()
        ref.current && gsap.to(ref.current, { ...effect, scale: 1, duration: 0.25, ease: Power2.easeOut })
        animation.current && animation.current.play()
    }

    //HANDLE ICON
    const getIcon = () => {
        const success = typeIcon?.SUCCESS
        const error = typeIcon?.ERROR
        const info = typeIcon?.INFO
        const warning = typeIcon?.WARNING

        switch (type) {
            case PopUpType.SUCCESS:
                return success ? success : <SucessIcon />;
            case PopUpType.ERROR:
                return error ? error : <ErrorIcon />;
            case PopUpType.INFO:
                return info ? info : <InfoIcon />;
            case PopUpType.WARNING:
                return warning ? warning : <WarningIcon />;
        }
    }

    //HANDLE MOUNT
    useEffect(() => {
        const { current } = ref
        if (current) {
            enterAnimation ? enterAnimation(current, enterDirection) : slideFrom(current, enterDirection)
            fadeIn(current)
        }
    }, [])

    //HANDLE TIMEOUT
    useEffect(() => {
        if (enable) {
            startTimer()
        }
    }, [])

    const timeoutLineComp = timeoutLine ?
        (<span
            ref={lineRef}
            className={clsx([
                useClass('timeoutLine'),
                useClass(`timeoutLine-${type}`),
                timeoutLineClass])}
        ></span>) : null

    const crossComp = cross ? (
        <div className={clsx([useClass('crossWrapper'), styleClass?.cross])} onClick={handleClose}>
            <div className={useClass('line')}></div>
            <div className={useClass('line')}></div>
        </div>) :
        null

    return (
        <Paper
            square={false}
            elevation={5}
            ref={ref}
            className={clsx([useClass('popUp'), useClass(`popUp-${type}`), className, styleClass?.root])}
            onClick={handleClick}
            onMouseEnter={handleHoverOn}
            onMouseLeave={handleHoverOff}
            {...otherProps}
        >

            <div className={clsx([
                useClass('iconWrapper'),
                type && styleClass?.type && styleClass.type[type]
            ])}>
                {getIcon()}
            </div>
            <div className={clsx([useClass('contentWrapper'), styleClass?.content])}>
                <div className={useClass('header')}>{header}</div>
                {text ? <div className={useClass('text')}>{text}</div> : null}
                {crossComp}
            </div>
            {timeoutLineComp}

        </Paper>
    )


}

const SucessIcon: FC = () => {
    return <Success className={clsx([useClass('icon'), useClass('icon-success')])} />
}

const InfoIcon: FC = () => {
    return <Info className={clsx([useClass('icon'), useClass('icon-info')])} />
}
const WarningIcon: FC = () => {
    return <Warning className={clsx([useClass('icon'), useClass('icon-warning')])} />
}
const ErrorIcon: FC = () => {
    return <Error className={clsx([useClass('icon'), useClass('icon-error')])} />
}