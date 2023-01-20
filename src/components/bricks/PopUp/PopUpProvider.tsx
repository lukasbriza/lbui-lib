import React, { createContext, FC, useMemo, useState } from 'react'
import { uniqueId } from 'lodash'
import ReactDOM from "react-dom/client";
import { PopUp } from './PopUp'
import clsx from 'clsx'

import { PopUpContextProps, PopUpProviderProps } from './types/model'
import { useLibClass } from '../../../hooks/useLibClass';

//TODO:Předělat na Portal řešení?

const COMP_PREFIX = 'PopUp'
const useClass = (className: string) => { return useLibClass(COMP_PREFIX, className) }

//DEFAULT VALUE
const defaultValue: PopUpContextProps = {
    show: () => { throw new Error('Context does not have a matching provider!') },
    unMount: () => { throw new Error('Context does not have a matching provider!') },
}

//CONTEXT INIT
export const PopUpContext = createContext(defaultValue)

/**
 * PopUpProvider
 */
export const PopUpProvider: FC<PopUpProviderProps> = (props) => {
    const { children, portalPosition = ["right", "up"], OwnComponent, portalClass } = props
    const [portalId] = useState<string>(uniqueId('popUp-portal-'))
    const xPos = portalPosition[0]
    const yPos = portalPosition[1]

    const popUpId = () => useClass(uniqueId() + Math.random().toString())
    const getElement = (id: string) => document ? document.getElementById(id) : null;
    const setupPortalClasses = () => {
        const arr: string[] = []
        arr.push(useClass('portal'))
        if (yPos !== "center" || (yPos === "center" && xPos !== "center")) {
            arr.push(useClass(`x-${xPos}`))
        }
        if (xPos !== "center" || (xPos == "center" && yPos !== "center")) {
            arr.push(useClass(`y-${yPos}`))
        }
        if (xPos === "center" && yPos === "center") {
            arr.push(useClass(`center`))
        }
        if (portalClass) {
            arr.push(portalClass)
        }
        return clsx([...arr])
    }

    //CONTEXT
    const context = useMemo<PopUpContextProps>(() => ({
        show: (props) => {
            if (document) {
                const hookId = popUpId()
                const element = document.createElement('div')
                element.classList.add('lbui-PopUp-hook')
                element.id = hookId

                const portal = getElement(portalId)
                portal?.append(element)

                const root = ReactDOM.createRoot(element)
                if (OwnComponent) {
                    root.render(React.createElement(OwnComponent, { ...props, hookId: hookId, portalPosition: portalPosition, unMount: context.unMount }))
                } else {
                    root.render(React.createElement(PopUp, { ...props, hookId: hookId, portalPosition: portalPosition, unMount: context.unMount }))
                }
                console.log(portal)
            }
        },
        unMount: (id) => {
            if (document) {
                console.log(id)
                const element = getElement(id)
                element?.remove()
            }
        },
    }), [])

    return (
        <PopUpContext.Provider value={context}>
            {children}
            <div className={setupPortalClasses()} id={portalId}>
            </div>
        </PopUpContext.Provider>
    )
}