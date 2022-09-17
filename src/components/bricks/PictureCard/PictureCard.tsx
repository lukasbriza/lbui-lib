import './scss/PictureCard.scss'

import { Card } from '../../'
import React, { forwardRef, FC } from 'react'
import clsx from 'clsx'
import { useLibClass } from '../../../hooks/useLibClass'

import { Props } from '../../../utils/global.model'
import { PictureCardProps, BackgroundTypes } from './types/model'


const COMP_PREFIX = 'PictureCard'
const useClass = (className: string) => { return useLibClass(COMP_PREFIX, className) }

/**
 * PictureCard component
 * @param {string} className - Class applied to the root of the component
 * @param {string} imageClass - Class applied to the image of the card body
 * @param {string} layerClass - Class applied to the layer of the image
 * @param {1-24} elevation - Level of surface elevation
 * @param {boolean} square - If true, rounded corners are disabled 
 * @param {string} src - Path to the image
 * @param {Element} body - Element passed as body of card
 */
export const PictureCard = forwardRef<HTMLElement, PictureCardProps & Props<HTMLElement>>((props, ref) => {
    const { className, imageClass, layerClass, elevation = 1, src, body, ...otherProps } = props

    return (
        <Card
            className={clsx([useClass('root'), className])}
            body={
                <Background
                    src={src}
                    className={imageClass}
                    layerClass={layerClass}
                >
                    {body}
                </Background>
            }
            elevation={elevation}
            ref={ref}
            {...otherProps}
        />
    )
})

const Background: FC<BackgroundTypes> = (props) => {
    const { src, className, layerClass, children } = props

    return (
        <>
            <img src={src} alt="card background" className={clsx([useClass('image')], className)} />
            <div className={clsx([useClass('layer'), layerClass])}></div>
            <div className={useClass('contentWrapper')}>
                {children}
            </div>
        </>
    )
}