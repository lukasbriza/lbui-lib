import './scss/Typography.scss'

import React, { createContext, FC } from 'react'
import { useLibClass } from '../../../hooks/useLibClass'

import { TypographyContextProps, TypographyChildren } from './types/model'

const COMP_PREFIX = 'Typography'
const useClass = (className: string) => { return useLibClass(COMP_PREFIX, className) }

const defaultProps: TypographyContextProps = {
    h1: { class: useClass('h1'), component: 'h1' },
    h2: { class: useClass('h2'), component: 'h2' },
    h3: { class: useClass('h3'), component: 'h3' },
    h4: { class: useClass('h4'), component: 'h4' },
    h5: { class: useClass('h5'), component: 'h5' },
    h6: { class: useClass('h6'), component: 'h6' },
    subtitle1: { class: useClass('subtitle1'), component: 'h6' },
    subtitle2: { class: useClass('subtitle2'), component: 'h6' },
    body1: { class: useClass('body1'), component: 'p' },
    body2: { class: useClass('body2'), component: 'p' },
    buttonText: { class: useClass('buttonText'), component: 'span' },
}

export const TypographyContext = createContext<TypographyContextProps>(defaultProps)

export const TypographyProvider: FC<TypographyChildren> = (props) => {
    return (
        <TypographyContext.Provider value={defaultProps}>
            {props.children}
        </TypographyContext.Provider>
    )
}