import "./BasicSelectField.scss"

import React, { forwardRef, useState } from "react"
import { gsap, Power2 } from "gsap"
import { useLibClass } from "../../../hooks";
import { BasicSelect } from "../BasicSelect/BasicSelect";
import { BasicSelectFieldProps } from "./model";
import clsx from "clsx";

const COMP_PREFIX = "BasicSelectField";
const useClass = (className: string) => {
    return useLibClass(COMP_PREFIX, className);
};

/**
 * BasicSelectField
 */
export const BasicSelectField = forwardRef<HTMLInputElement, BasicSelectFieldProps>((props, ref) => {
    const { styleClass, option, onStateChange, ...otherProps } = props
    const {
        root,
        focusRoot,
        label,
        select,
        options,
        ...otherStyleClass
    } = styleClass ?? {}
    const { openAnimation, closeAnimation } = option ?? {}

    const [active, setActive] = useState<boolean>(false)

    const handleStatechange = (state: { focused: boolean, filled: boolean, isError?: boolean }) => {
        const { focused, filled } = state
        onStateChange?.(state)
        setActive(focused || filled)
    }

    const handleOpenAnimation = (ref: HTMLDivElement) => {
        if (openAnimation) {
            openAnimation(ref)
            return
        }
        const tl = gsap.timeline()
        tl.set(ref, { display: "flex", scale: 0.60, opacity: 0 })
            .addLabel("start")
            .to(ref, { opacity: 1, scale: 1, duration: 0.4, ease: Power2.easeIn }, "start")
    }
    const handleCloseAnimation = (ref: HTMLDivElement) => {
        if (closeAnimation) {
            closeAnimation(ref)
            return
        }
        const tl = gsap.timeline()
        tl.set(ref, { opacity: 1, display: "flex" })
            .addLabel("start")
            .to(ref, { opacity: 0, scale: 0.5, dustaion: 0.25, ease: Power2.easeOut }, "start")
            .set(ref, { display: "none" })

    }


    return (
        <BasicSelect
            ref={ref}
            styleClass={{
                ...otherStyleClass,
                root: clsx([useClass("root"), root]),
                focusRoot: clsx([, focusRoot]),
                label: clsx([useClass("label"), active && useClass("label-active"), label]),
                select: clsx([useClass("select"), active && useClass("select-active"), select]),
                options: clsx([useClass("options"), options])
            }}
            onStateChange={handleStatechange}
            option={{
                closeAnimation: handleCloseAnimation,
                openAnimation: handleOpenAnimation
            }}
            {...otherProps}
        />
    )
})