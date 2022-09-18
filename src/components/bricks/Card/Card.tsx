import './scss/Card.scss'

import React, { forwardRef } from 'react'
import { Paper } from '../Paper/Paper'
import clsx from 'clsx'
import { useLibClass } from '../../../hooks/useLibClass'

import { Props } from '../../../utils/global.model'
import { CardProps } from './types/model'

const COMP_PREFIX = 'Card'
const useClass = (className: string) => { return useLibClass(COMP_PREFIX, className) }

/**
 * Card
 * @param {string} className - Class applied to the root of the component
 * @param {number} elevation - Level of surface elevation
 * @param {boolean} square - If true, rounded corners are disabled 
 * @param {element} body - Element applied to the body section
 * @param {element} description - Element applied to the description section under body
 */
export const Card = forwardRef<HTMLElement, CardProps & Props<HTMLElement>>((props, ref) => {
    const { className, description, body, ...otherProps } = props

    const StyledChildren = () => {
        return React.Children.map(body, (child: any, index) => {
            if (index === 0) {
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
    }

    const StyledDescription = () => {
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
    }

    return (
        <Paper
            ref={ref}
            className={clsx([
                useClass('root'),
                description ? useClass('withDescription') : useClass('onlyBody'),
                className
            ])}
            {...otherProps}
        >
            <StyledChildren />
            <StyledDescription />
        </Paper>
    )
})
