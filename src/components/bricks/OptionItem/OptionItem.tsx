import "./OptionItem.scss"

import React, { FC } from "react";
import { OptionItemProps } from "./model";
import clsx from "clsx";
import { useLibClass } from "../../../hooks";
import { StyleClassType } from "../../../utils";


const COMP_PREFIX = 'OptionItem'
const useClass = (className: string) => { return useLibClass(COMP_PREFIX, className) }

/**
 * OptionItem component
 * @param {StyleClassType} [styleClass] - object defining applied classes in diferent component states and parts
 * @param {StyleClassType} [styleClass.root] - define class of root component
 * @param {string} value - title of option item
 * @param {void} onClick - fuction called on click event
 */
export const OptionItem: FC<OptionItemProps> = (props) => {
    const { styleClass, onClick, value } = props
    return (
        <div
            role="option"
            className={clsx([useClass("option"), styleClass?.root])}
            onClick={onClick}
        >
            {value}
        </div>
    )
}