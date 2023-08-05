import './ClassicPageLayout.scss'

import React, { forwardRef, useState } from 'react'
import clsx from 'clsx'
import { useLibClass } from '../../../hooks'

import { Props } from '../../../utils'
import { ClassicPageLayoutProps } from './model'
import throttle from "lodash/throttle";

const COMP_PREFIX = 'CPLayout'
const useClass = (className: string) => { return useLibClass(COMP_PREFIX, className) }

/**
 * ClassicPageLayout
 * @param {StyleClassType} [styleClass] - className definition for component
 * @param {StyleClassType} [styleClass.root] - Class applied to the root component
 * @param {StyleClassType} [styleClass.menu] - Class applied to the menu component
 * @param {StyleClassType} [styleClass.body] - Class applied to the body component
 * @param {string} footerClass - Class applied to the footer component
 * @param {Element} menu - Element passed to menu section
 * @param {Element} footer - Element passed to footer section
 * @param {number} maxWidth - Maximum width of root component in px
 * @param {boolean} [options.stickyMenu] - if true, menu component will be sticky
 * @param {boolean} [options.hideMenuOnScroll] - if true, menu disappear on scroll down and show on scroll up
 */

export const ClassicPageLayout = forwardRef<HTMLElement, ClassicPageLayoutProps & Props<HTMLElement>>((props, ref) => {
    const { className, styleClass, menu, footer, children, maxWidth, options, ...rest } = props
    const [downDirection, setDownDirection] = useState<boolean>(false)

    const stickyMenu = options?.stickyMenu
    const hideMenuOnScroll = options?.hideMenuOnScroll

    const hideOnScroll = stickyMenu && hideMenuOnScroll

    const menuElement = (
        <section className={clsx([
            useClass('menu'),
            stickyMenu && useClass('sticky'),
            hideOnScroll && useClass('hideOnScroll'),
            downDirection && useClass('down'),
            styleClass?.menu])}>
            {menu}
        </section>
    )

    const handleWheelEvent = throttle((ev: React.WheelEvent<HTMLElement>) => {
        setDownDirection(ev.deltaY > 0)
    }, 1000)



    return (
        <section
            onWheel={(ev) => { hideMenuOnScroll && handleWheelEvent(ev) }}
            ref={ref}
            style={{ maxWidth: maxWidth ? `${maxWidth}px` : undefined }}
            className={clsx([useClass('root'), className, styleClass?.root])}
            {...rest}
        >
            {(menu && !stickyMenu) ? menuElement : null}
            <section className={clsx([useClass('body'), styleClass?.body])}>
                {(menu && stickyMenu) ? menuElement : null}
                {children}
            </section>
            {
                footer &&
                <section className={clsx([useClass('footer'), styleClass?.footer])}>
                    {footer}
                </section>
            }
        </section>
    )
})