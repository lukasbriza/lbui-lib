import './scss/Card.scss'

import React, { forwardRef } from 'react'
import { Paper } from '../../'
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
            {body}
            {description}
        </Paper>
    )
})
