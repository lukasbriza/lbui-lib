import "./OptionScroller.scss"

import React, { FC, ReactNode, forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import { useClickOutside, useLibClass } from "../../../hooks";
import clsx from "clsx";
import { Option, StyleClassType, getOptionConvention, nextEffectSanitized } from "../../../utils";
import { ForwarderRef, OptionScrollerProps } from "./model";
import { OptionItem } from "../OptionItem/OptionItem";


const COMP_PREFIX = 'OptionScroller'
const useClass = (className: string) => { return useLibClass(COMP_PREFIX, className) }

/**
 * OptionScroller component
 * @param {StyleClassType} [styleClass] - object defining applied classes in diferent component states and parts
 * @param {StyleClassType} [styleClass.root] - define class of root component
 * @param {StyleClassType} [styleClass.focusRoot] - define class applied during focus event
 * @param {StyleClassType} [styleClass.fillRoot] - define class applied during fill event
 * @param {StyleClassType} [styleClass.errorRoot] - define class applied during [state.isError] is true
 * @param {StyleClassType} [styleClass.option] - define class of option component
 * @param {StyleClassType} [styleClass.focusOption] - define class applied during focus event
 * @param {StyleClassType} [styleClass.fillOption] - define class applied during fill event
 * @param {StyleClassType} [styleClass.errorOption] - define class applied during [state.isError] is true
 * @param {StyleClassType} [styleClass.columnSection] - define class of column in select component
 * @param {StyleClassType} [styleClass.focusColumnSection] - define class applied during focus event
 * @param {StyleClassType} [styleClass.fillColumnSection] - define class applied during fill event
 * @param {StyleClassType} [styleClass.errorColumnSection] - define class applied [state.isError] is true
 * @param {Object} state - passed state of parent component
 * @param {boolean} state.focused - passed state of parent component
 * @param {boolean} state.filled - passed state of parent component
 * @param {boolean} [state.isError] - passed state of parent component
 * @param {void} onSelect - callback on value select (provide Option object)
 * @param {void} onClickOutside - callback on click outside of scroller
 * @param {boolean} open - trigger opening/closing of component
 * @param {Array[Option | Option[]]} options - options rendered in scroller
 * @param {Object} [option] - define customization for component
 * @param {boolean} [option.clearable] - add option for value nullification
 * @param {void} [option.openAnimation] - define gsap open animation
 * @param {void} [option.closeAnimation] - defined gsap close animation
 * @param {Component} [option.CustomOption] - define custom option component for scroller
 * @param {Component} [option.CustomClearOption] - define custom component for value nullification ([option.clearable] need to be true)
 */
export const OptionScroller = forwardRef<ForwarderRef, OptionScrollerProps>((props, ref) => {
    const {
        options,
        open,
        onClickOutside,
        onSelect,
        state,
        styleClass,
        option,
        className,
        ...restProps
    } = props

    const {
        clearable,
        openAnimation,
        closeAnimation,
        CustomClearOption,
        CustomOption
    } = option ?? {}

    const { focused, filled, isError } = state ?? {}

    const divRef = useRef<HTMLDivElement>(null)
    const { } = useClickOutside(divRef, onClickOutside)

    const optionsFilled = options.length > 0
    const isSimple = optionsFilled && !Array.isArray(options[0])
    const isComposed = optionsFilled && Array.isArray(options[0])

    const optionClasses = clsx([
        styleClass?.option,
        filled && styleClass?.fillOption,
        focused && styleClass?.focusOption,
        isError && styleClass?.fillOption
    ])

    const buildColumn = (key: string | number, children: ReactNode) => {
        return (
            <Column
                key={key}
                className={clsx([
                    useClass("column-section"),
                    styleClass?.columnSection,
                    filled && styleClass?.fillColumnSection,
                    focused && styleClass?.fillColumnSection,
                    isError && styleClass?.fillColumnSection
                ])}
            >
                {children}
            </Column >
        )
    }

    const buildOptions = () => {
        if (optionsFilled && isSimple) {
            const colChildren = (getOptionConvention(options) as Option[]).map(({ key, value }) => getOption(key, value))
            clearable && colChildren.push(getClearOption(String(colChildren.length)))
            return buildColumn(0, colChildren)
        }
        if (optionsFilled && isComposed) {
            return (getOptionConvention(options) as Option[][]).map((array, index) => {
                const colChildren = array.map(({ key, value }) => getOption(key, value))
                clearable && colChildren.push(getClearOption(`${colChildren.length}-${index}`))
                return buildColumn(index, colChildren)
            })
        }
    }

    const getClearOption = (key: string | number) => {
        const option = { key: String(key), value: null }
        return CustomClearOption ?
            <CustomClearOption
                key={key}
                role="option"
                option={option}
                state={state}
                onClick={() => onSelect(option)}
            /> :
            <ScrollerOption
                key={key}
                option={option}
                onClick={() => onSelect(option)}
                className={optionClasses}
            />

    }

    const getOption = (key: string, value: string | null) => {
        return CustomOption ?
            <CustomOption
                key={key}
                role="option"
                option={{ key, value }}
                onClick={() => onSelect({ key, value })}
                state={state}
            /> :
            <ScrollerOption
                key={key}
                option={{ key, value }}
                className={optionClasses}
                onClick={() => onSelect?.({ key, value })}
            />

    }

    useImperativeHandle(ref, () => divRef, [divRef.current, open])

    useEffect(() => {
        if (nextEffectSanitized()) {
            if (open) {
                (openAnimation && divRef.current) ? openAnimation(divRef.current) : undefined
            } else {
                (closeAnimation && divRef.current) ? closeAnimation(divRef.current) : undefined
            }
        }
    }, [open])

    return (
        <div
            {...restProps}
            ref={divRef}
            className={clsx([
                useClass("root"),
                styleClass?.root,
                className,
                filled && styleClass?.fillRoot,
                focused && styleClass?.focusRoot,
                isError && styleClass?.errorRoot,
                open ? useClass("show") : useClass("hide")
            ])}
        >
            {buildOptions()}
        </div>
    )
})

const Column: FC<{ key: number | string, className: string, children: ReactNode }> = (props) => (
    <div key={`${0}-column`} className={clsx([useClass("column-section"), props.className])}>
        {props.children}
    </div>
)

const ScrollerOption: FC<{ option: { key: string, value: string | null }, className?: string, onClick: () => void }> = (props) => (
    <OptionItem
        onClick={props.onClick}
        styleClass={{
            root: clsx([useClass("option"), props.className])
        }}
        key={props.option.key}
        value={props.option.value ?? "-"}
    />
)