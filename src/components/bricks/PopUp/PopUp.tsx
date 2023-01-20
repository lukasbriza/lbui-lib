import './scss/PopUp.scss'

import React, { FC, useEffect, useRef, useState } from 'react'
import gsap, { Power2 } from 'gsap'
import { useLibClass } from '../../../hooks/useLibClass'
import clsx from 'clsx'

import { PopUpProps, PopUpType } from './types/model'
import { fadeIn, slideFrom } from '../../../utils/global.animations'
import { Paper } from '../Paper/Paper'
import { Success, Error, Info, Warning } from '../../../lib'

const COMP_PREFIX = 'PopUp'
const useClass = (className: string) => { return useLibClass(COMP_PREFIX, className) }


/**
 * PopUp
 */
export const PopUp: FC<PopUpProps> = (props) => {
    const {
        unMount,
        portalPosition,
        leaveDirection = "right",
        enterDirection = "right",
        hookId,
        header = 'Header',
        text = 'Content',
        className,
        typeClassOption,
        type = PopUpType.WARNING,
        typeIcon,
        timeoutOption,
        closeOnClick = true,
        cross,
        crossClass,
        onClose,
        onClick
    } = props
    const { enable = true, timeout = 5000, timeoutLine = true, timeoutLineClass } = timeoutOption ?? {}
    const xPos = portalPosition[0]
    const ref = useRef<HTMLDivElement>(null)
    const lineRef = useRef<HTMLSpanElement>(null)
    const timer = useRef<NodeJS.Timer | undefined>()
    const animation = useRef<gsap.core.Tween | undefined>(undefined)
    const [leaveClass, setLeaveClass] = useState<string>()

    const startTimer = () => {
        animation.current = gsap.to(lineRef.current, { width: '0%', ease: 'linear', duration: timeout / 1000, onComplete: handleClose })
    }

    //CLICK
    const handleClick = (e: React.SyntheticEvent) => {
        onClick?.(e)
        if (closeOnClick) handleClose()
    }

    //CLOSE
    const handleLeaveClass = () => setLeaveClass(useClass(`leave-${leaveDirection}`))
    const handleClose = () => {
        const { current } = ref
        if (current) {
            enable && timer.current && clearTimeout(timer.current)

            handleLeaveClass()

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
            slideFrom(current, enterDirection)
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
        <div className={clsx([useClass('crossWrapper'), crossClass])}>
            <div className={useClass('line')}></div>
            <div className={useClass('line')}></div>
        </div>) :
        null

    return (
        <Paper
            square={false}
            elevation={5}
            ref={ref}
            className={clsx([useClass('popUp'), useClass(`popUp-${type}`), leaveClass, className])}
            onClick={handleClick}
            onMouseEnter={handleHoverOn}
            onMouseLeave={handleHoverOff}
        >

            <div className={clsx([
                useClass('iconWrapper'),
                type && typeClassOption && typeClassOption[type]
            ])}>
                {getIcon()}
            </div>
            <div className={useClass('contentWrapper')}>
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