import './Card.scss'

import React, { forwardRef, memo } from 'react'
import { Paper } from '../Paper/Paper'
import clsx from 'clsx'
import { useLibClass } from '../../../hooks'

import { Props } from '../../../utils'
import { CardProps } from './model'

const COMP_PREFIX = 'Card'
const useClass = (className: string) => { return useLibClass(COMP_PREFIX, className) }

/**
 * Card
 * @param {StyleClassType} [styleClass] - className definition for component
 * @param {StyleClassType} [styleClass.root] - className applied to the root of component
 * @param {StyleClassType} [styleClass.childrenWrapper] - className applied to wrapper over childrens (if is applied)
 * @param {number} [elevation] - Level of surface elevation
 * @param {boolean} [square] - If true, rounded corners are disabled 
 * @param {element} body - Element applied to the body section
 * @param {element} [description] - Element applied to the description section under body
 */
export const Card = forwardRef<HTMLElement, CardProps & Props<HTMLElement>>((props, ref) => {
    const { className, styleClass, description, body, ...otherProps } = props

    const StyledChildren = memo(() => {
        return React.Children.map(body, (child: any, index) => {
            if (index === 0) {
                if (typeof child === 'string' && body && !description) {
                    return (
                        <div className={clsx([useClass('onlyBody-first-child'), styleClass?.childrenWrapper])}>
                            {child}
                        </div>)
                }
                if (typeof child === 'string' && body && description) {
                    return (
                        <div className={clsx([useClass('withDescription-first-child'), styleClass?.childrenWrapper])}>
                            {child}
                        </div>)
                }
                if (body && !description) {
                    return React.cloneElement(child, {
                        className: clsx([useClass('onlyBody-first-child'), child.props.className])
                    }, child.props.children)
                }
                if (body && description) {
                    return React.cloneElement(child, {
                        className: clsx([useClass('withDescription-first-child'), child.props.className])
                    }, child.props.children)
                }
            }
            return child
        })
    })
    StyledChildren.displayName = 'MemoStyledChildren'

    const StyledDescription = memo(() => {
        if (description) {
            return React.Children.map(description, (child: any, index) => {
                if (index === 0) {
                    return React.cloneElement(child, {
                        className: clsx([useClass('withDescription-second-child'), child.props.className]),
                    }, child.props.children)
                }
                return child
            })
        }
        return null
    })
    StyledDescription.displayName = 'MemoStyledDescription'

    return (
        <Paper
            ref={ref}
            className={clsx([
                useClass('root'),
                description ? useClass('withDescription') : useClass('onlyBody'),
                styleClass?.root
            ])}
            {...otherProps}
        >
            <StyledChildren />
            <StyledDescription />
        </Paper>
    )
})
