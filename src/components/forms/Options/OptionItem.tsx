import React, { FC } from "react";
import { OptionItemProps } from "./model";


export const OptionItem: FC<OptionItemProps> = (props) => {
    const { className, onClick, value } = props
    return (
        <div
            role="option"
            className={className}
            onClick={onClick}
        >
            {value}
        </div>
    )
}