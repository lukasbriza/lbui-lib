import './PictureCard.scss'

import { Card } from '../Card/Card'
import React, { forwardRef, FC } from 'react'
import clsx from 'clsx'
import { useLibClass } from '../../../hooks'

import { Props, StyleClassType } from '../../../utils'
import { PictureCardProps, BackgroundTypes } from './model'


const COMP_PREFIX = 'PictureCard'
const useClass = (className: string) => { return useLibClass(COMP_PREFIX, className) }

/**
 * PictureCard component
 * @param {StyleClassType} [styleClass] - className definition for component
 * @param {StyleClassType} [styleClass.root] - className applied to the root of the component
 * @param {StyleClassType} [styleClass.image] - className applied to the image of the card body (to image)
 * @param {StyleClassType} [styleClass.layer] - className applied to the layer
 * @param {1-24} [elevation=1] - Level of surface elevation
 * @param {boolean} [square=false] - If true, rounded corners are disabled 
 * @param {string} src - Path to the image
 * @param {Element} body - Element passed as body of card
 * @param {Element} [imgComponent] - Element passed as img component (opt for Next.js image)
 */
export const PictureCard = forwardRef<HTMLElement, PictureCardProps & Props<HTMLElement>>((props, ref) => {
    const { className, styleClass, imgComponent, elevation = 1, src, body, ...otherProps } = props
    return (
        <Card
            className={clsx([useClass('root'), className, styleClass?.root])}
            body={
                <Background
                    src={src}
                    className={styleClass?.image}
                    layerClass={styleClass?.layer}
                    imgComponent={imgComponent}
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
    const { src, className, layerClass, imgComponent, children } = props

    return (
        <>
            {
                imgComponent ?
                    imgComponent :
                    <img src={src} alt="card background" className={clsx([useClass('image')], className)} />
            }
            <div className={clsx([useClass('layer'), layerClass])}></div>
            <div className={useClass('contentWrapper')}>
                {children}
            </div>
        </>
    )
}