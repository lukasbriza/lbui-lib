import "./OptionScroller.scss"

import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { useClickOutside, useLibClass } from "../../../hooks";
import clsx from "clsx";
import { Option } from "../../../utils";
import { ForwarderRef, OptionScrollerProps } from "./model";

const COMP_PREFIX = 'OptionScroller'
const useClass = (className: string) => { return useLibClass(COMP_PREFIX, className) }

/**
 * OptionScroller component
 * @param {StyleClassType} [styleClass] - object defining apllied classes in diferent component states and parts
 * @param {StyleClassType} [styleClass.root] - define class of root component
 * @param {StyleClassType} [styleClass.option] - define class of option component
 * @param {StyleClassType} [styleClass.columnSection] - define class of column in select component
 * @param {Reference} hook - OptionScroller hok itself to provided reference on element
 * @param {Array} options - options rendered in scroller
 * @param {boolean} show - trigger mount/unmount of component
 * @param {void} onClickOutside - callback on click outside of scroller
 * @param {void} onSelect - callback on value select (provide Option object)
 */
export const OptionScroller = forwardRef<ForwarderRef, OptionScrollerProps>((props, ref) => {
    const { className, show, hook, options, styleClass, onClickOutside, onSelect, ...restProps } = props
    const divRef = useRef<HTMLDivElement>(null)
    const { } = useClickOutside(divRef, onClickOutside)

    const isFilled = options.length > 0
    const isSimple = isFilled && (Array.isArray(options[0]) === false)
    const isComposed = isFilled && Array.isArray(options[0])
    const left = hook?.offsetLeft
    const top = (hook?.offsetTop ?? 0) + (hook?.offsetHeight ?? 0)

    useImperativeHandle(ref, () => {
        return { current: divRef.current }
    }, [divRef.current, show])

    const option = (key: string, value: string) => (
        <div
            onClick={() => onSelect?.({ key, value })}
            className={clsx([useClass("option"), styleClass?.option])}
            key={key}
        >
            {value}
        </div>)

    const buildOptions = () => {
        if (isFilled && isSimple) {
            return (
                <div key={`${0}-column`} className={clsx([useClass("column-section"), styleClass?.columnSection])}>
                    {(options as Option[]).map((value) => option(value.key, value.value))}
                </div>
            )
        }
        if (isFilled && isComposed) {
            return (options as Option[][]).map((array, index) => {
                return (
                    <div key={`${index}-column`} className={clsx([useClass("column-section"), styleClass?.columnSection])} >
                        {array.map((value) => option(`${value.key}-${index}`, value.value))}
                    </div>
                )
            })
        }
        return <></>
    }

    return (
        <>
            {show && (
                <div
                    {...restProps}
                    ref={divRef}
                    className={clsx([useClass("root"), className, styleClass?.root, styleClass?.error])}
                    style={{ left: left + "px", top: top + "px" }}
                >
                    {buildOptions()}
                </div>
            )}
        </>
    )
})