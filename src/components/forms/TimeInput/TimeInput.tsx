import "./TimeInput.scss"

import { useLibClass } from "../../../hooks";
import React, { FC } from "react";
import clsx from "clsx";
import { TimeInputProps } from "./model";


const COMP_PREFIX = 'TimeInput'
const useClass = (className: string) => { return useLibClass(COMP_PREFIX, className) }

export const TimeInput: FC<TimeInputProps> = (props) => {
    const { name, label, ...otherProps } = props
    return (
        <div className={clsx([useClass("root")])}>
            <label htmlFor={name}></label>
        </div>
    )
}