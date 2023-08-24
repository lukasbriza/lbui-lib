import React, { FC, useEffect, useRef } from "react";
import { gsap } from "gsap"
import clsx from "clsx";
import { useLibClass } from "../../../hooks";
import { OptionItem } from "./OptionItem";
import { OptionsProps } from "./model";
import { getCustomAnimation } from "./getCustomAnimation";

const COMP_PREFIX = "Options";
const useClass = (className: string) => {
    return useLibClass(COMP_PREFIX, className);
};


/**
 * Options component
 */
export const Options: FC<OptionsProps> = (props) => {
    const {
        closePosition,
        openPosition,
        closeAnimation,
        openAnimation,
        onOptionClick,
        state,
        styleClass,
        option,
        clearable = true,
        customOption,
        customClearOption
    } = props
    const { opened, filled, focused, isError } = state ?? {}
    const CustomOption = customOption
    const CustomClearOption = customClearOption

    const optionItemClassNames = clsx([
        useClass("option"),
        styleClass?.option,
        focused && styleClass?.focusOption,
        filled && styleClass?.fillOption,
        isError && styleClass?.errorOption
    ])

    const clearableOption = clearable ?
        CustomClearOption ?
            <CustomClearOption
                key="clear"
                state={{ isError, filled, focused, opened }}
                option={undefined}
                onClick={onOptionClick(undefined)}
            /> :
            <OptionItem
                key="clear"
                className={optionItemClassNames}
                onClick={onOptionClick(undefined)}
                value={"-"}
            /> :
        null

    const optionsRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const customAnimation = getCustomAnimation({ target: optionsRef.current, closeAnimation, openAnimation, closePosition, openPosition, opened })
        const tl = gsap.timeline()

        if (opened) {
            customAnimation.animation ?
                tl.add(customAnimation.animation, customAnimation.position) :
                tl.set(optionsRef.current, { display: "initial", opacity: 1 })
        } else {
            customAnimation.animation ?
                tl.add(customAnimation.animation, customAnimation.position) :
                tl.set(optionsRef.current, { display: "none", opacity: 0 })
        }
    }, [opened])


    return (
        <div
            ref={optionsRef}
            className={clsx([
                useClass("options"),
                focused && styleClass?.focusOptions,
                filled && styleClass?.fillOptions,
                isError && styleClass?.errorOptions
            ])}
        >
            {option.map((option) => {
                if (CustomOption) {
                    return (
                        <CustomOption
                            key={`${option.value}-option`}
                            role="option"
                            state={state}
                            option={option}
                            onClick={onOptionClick(option)}
                        />
                    )
                }
                return (
                    <OptionItem
                        key={`${option.value}-option`}
                        className={optionItemClassNames}
                        onClick={onOptionClick(option)}
                        value={option.value}
                    />
                )
            })}
            {clearableOption}
        </div>
    )
}