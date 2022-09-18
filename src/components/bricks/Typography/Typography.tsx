import './scss/Typography.scss'

import React, { FC, useContext } from 'react'
import clsx from 'clsx'
import { useLibClass } from '../../../hooks/useLibClass'
import { TypographyContext } from './TypographyProvider'

import { TypographyProps, TypographyChildren } from './types/model'
import { Props } from '../../../utils/global.model'

const COMP_PREFIX = 'Typography'
const useClass = (className: string) => { return useLibClass(COMP_PREFIX, className) }

/**
 * Typography component
 * @param {h1|h2|h3|h4|h5|h6|subtitle1|subtitle2|body1|body2|buttonText} type - type of typography component
 * @param {h1|h2|h3|h4|h5|h6|body|span|p} component - component applied to the typography component
 * @param {small|medum|large} size - apply size to the component
 * @param {default|bold|italic|underline} variant - variant of typography component
 * @param {string} className - custom class applied to the root component
 * @param {Element} children - element passed to the component 
 */
export const Typography: FC<TypographyProps & TypographyChildren & Props<HTMLHeadingElement | HTMLBodyElement | HTMLSpanElement | HTMLParagraphElement>> = (props) => {
    const { type, component, size = "medium", variant = ["default"], className, children, ...otherProps } = props
    const context = useContext(TypographyContext)

    const Component = () => {
        switch (type) {
            case "h1":
                return component ? component : context.h1.component
            case "h2":
                return component ? component : context.h2.component
            case "h3":
                return component ? component : context.h3.component
            case "h4":
                return component ? component : context.h4.component
            case "h5":
                return component ? component : context.h5.component
            case "h6":
                return component ? component : context.h6.component
            case "subtitle1":
                return component ? component : context.subtitle1.component
            case "subtitle2":
                return component ? component : context.subtitle2.component
            case "body1":
                return component ? component : context.body1.component
            case "body2":
                return component ? component : context.body2.component
            case "buttonText":
                return component ? component : context.buttonText.component
        }
    }
    const TypographyComponent = Component()

    return (
        <TypographyComponent
            className={clsx([context[type].class, useClass(size), variant.map(value => useClass(value)), className])}
            {...otherProps}
        >
            {children}
        </TypographyComponent>
    )
}