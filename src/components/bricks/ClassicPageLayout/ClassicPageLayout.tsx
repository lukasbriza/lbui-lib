import './scss/ClassicPageLayout.scss'

import React, { forwardRef, useState } from 'react'
import clsx from 'clsx'
import { useLibClass } from '../../../hooks/useLibClass'

import { Props } from '../../../utils/global.model'
import { ClassicPageLayoutProps } from './types/model'
import throttle from "lodash/throttle";

const COMP_PREFIX = 'CPLayout'
const useClass = (className: string) => { return useLibClass(COMP_PREFIX, className) }

/**
 * ClassicPageLayout
 * @param {string} className - Class applied to the root component
 * @param {string} menuClass - Class applied to the menu component
 * @param {string} bodyClass - Class applied to the body component
 * @param {string} footerClass - Class applied to the footer component
 * @param {Element} menu - Element passed to menu section
 * @param {Element} footer - Element passed to footer section
 * @param {number} maxWidth - maximum width of root component in px
 * @param {boolean} options.stickyMenu - if true, menu component will be sticky
 * @param {boolean} options.hideMenuOnScroll - if true, menu disappear on scroll down and show on scroll up
 */

export const ClassicPageLayout = forwardRef<HTMLElement, ClassicPageLayoutProps & Props<HTMLElement>>((props, ref) => {
    const { className, menuClass, bodyClass, footerClass, menu, footer, children, maxWidth, options, ...rest } = props
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
            menuClass])}>
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
            className={clsx([useClass('root'), className])}
            {...rest}
        >
            {(menu && !stickyMenu) ? menuElement : null}
            <section className={clsx([useClass('body'), bodyClass])}>
                {(menu && stickyMenu) ? menuElement : null}
                {children}
            </section>
            {
                footer ?
                    <section className={clsx([useClass('footer'), footerClass])}>
                        {footer}
                    </section> : null
            }
        </section>
    )
})