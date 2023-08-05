import './Modal.scss'

import React, { createContext, useMemo, useState, FC, useEffect, useRef, useContext, } from 'react'
import { SquareButton } from '../../buttons/SquareButton/SquareButton'
import { Paper } from '../Paper/Paper'
import { fadeIn, fadeOff, Element } from '../../../utils'
import { useClickOutside, useEffectOnce, useLibClass } from '../../../hooks'
import clsx from 'clsx'

import { ModalProviderProps, ModalContextProps, ModalProps, ModalCompProps } from './model'

const COMP_PREFIX = 'Modal'
const useClass = (className: string) => { return useLibClass(COMP_PREFIX, className) }

//DEFAULT VALUE
const defaultValue: ModalContextProps = {
    show: () => { throw new Error('Context does not have a matching provider!') },
    close: () => { throw new Error('Context does not have a matching provider!') },
    setComponent: () => { throw new Error('Context does not have a matching provider!') },
    component: undefined,
    isActive: false
}

//CONTEXT INIT
export const ModalContext = createContext(defaultValue)

//TIMER
let timer: NodeJS.Timeout

/**
 * Modal Provider
 * @param {element} children - children passed through context provider
 * CONTEXT
 * @param {void} show - called to show modal, as property takes modal modification props
 * @param {void} close - close modal
 * @param {vopid} setComponent - set custom modal component
 * @param {element | undefined} [component] - return custom modal element, if defined
 * @param {boolean} isActive  - return whether modal is active or not
 * MODIFICATION PROPS
 * @param {StyleClassType} [styleClass] - className definition for component
 * @param {StyleClassType} [styleClass.root] - apply custom class to root of component
 * @param {StyleClassType} [styleClass.modal] - class applied to the modal body
 * @param {StyleClassType} [styleClass.button] - class applied to the button of modal
 * @param {StyleClassType} [styleClass.text] - class applied to the text element of modal
 * @param {StyleClassType} [styleClass.header] - class applied to the header component of modal
 * @param {string} [header] - defines header of modal
 * @param {string} [text] - defines text in body of modal
 * @param {string} [buttonText] - defines text inside of button
 * @param {boolean} [button=true] - define, if button is visible ( default is true)
 * @param {number} [timeout] - set timeout when modal will be closed after opening
 * @param {element} [headerComponent] - set custom header component of modal
 * @param {element} [textComponent] - set custom text component of modal
 * @param {element} [buttonComponent] - set custom button component of modal
 * @param {boolean} [rounded=true] - define if corners are rounded (default true)
 * @param {boolean} [transition=false] - define if fade in and out transition is applied (default is false)
 * @param {boolean} [closeOnOutsideClick=false] - if true, modal will be closed on click outside of modal body (works only with default component) (default value is false)
 * @param {void} [onClick] - fn called on click on button, event is passed   
 * */
export const ModalProvider: FC<ModalProviderProps> = (props) => {
    const { children } = props
    const [isActive, setIsActive] = useState<boolean>(false)
    const [component, setComponent] = useState<Element | undefined>()
    const [modalProps, setModalProps] = useState<ModalProps>()

    useEffect(() => {
        if (modalProps?.timeout && isActive === true) {
            timer = setTimeout(() => { }, modalProps.timeout)
        }

        if (modalProps?.timeout && isActive === false) {
            clearTimeout(timer)
        }

    }, [modalProps?.timeout, isActive])

    const context = useMemo<ModalContextProps>(() => ({
        show: (propsDef) => { setModalProps(propsDef); setIsActive(true) },
        close: () => { setIsActive(false) },
        setComponent: setComponent,
        component: component,
        isActive: isActive,
    }), [])

    return (
        <ModalContext.Provider value={context}>
            {children}
            {isActive ? (component ? component : <Modal {...modalProps} />) : null}
        </ModalContext.Provider>
    )
}

const Modal: FC<ModalCompProps> = (props) => {
    const {
        styleClass,
        text,
        header,
        button = true,
        rounded = true,
        headerComponent,
        textComponent,
        buttonComponent,
        buttonText,
        closeOnOutsideClick = false,
        transition = false,
        onClick
    } = props
    const ref = useRef<HTMLElement>(null)
    const context = useContext(ModalContext)
    const { outside } = useClickOutside(ref)
    const transitionOptions = {
        duration: 0.250
    }
    const timeout = transitionOptions.duration * 1000

    useEffectOnce(() => {
        const { current } = ref
        if (transition && current) {
            fadeIn(current, transitionOptions)
        }
    }, [])

    useEffect(() => {
        if (outside && closeOnOutsideClick) {
            const { current } = ref
            if (transition && current) {
                fadeOff(current, transitionOptions)
                setTimeout(() => {
                    context.close()
                }, timeout)
                return
            }
            context.close()
        }
    }, [outside])

    const handleClick = (e: React.BaseSyntheticEvent) => {
        const { current } = ref
        e.preventDefault()
        if (transition && current) {
            fadeOff(current, transitionOptions)
            setTimeout(() => {
                onClick?.(e)
            }, timeout)
            return
        }
        onClick?.(e)
    }

    return (
        <section className={clsx([useClass('root'), styleClass?.root])}>

            <Paper
                ref={ref}
                elevation={7}
                className={clsx([
                    useClass('body'),
                    transition && useClass('body-transition'),
                    rounded && useClass('rounded'),
                    styleClass?.modal
                ])}
            >
                <div
                    className={clsx([useClass('header'), styleClass?.header])}
                >
                    {headerComponent ? headerComponent : header}
                </div>
                <div className={clsx([useClass('text'), styleClass?.text])}>
                    {textComponent ? textComponent : text}
                </div>
                {
                    buttonComponent ?
                        buttonComponent :
                        (button ?
                            <SquareButton
                                label={buttonText ?? 'Button'}
                                className={clsx([useClass('button'), styleClass?.button])}
                                onClick={handleClick}
                            /> :
                            null)
                }
            </Paper>
        </section>
    )
}
