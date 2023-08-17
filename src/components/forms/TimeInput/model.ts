import { StyleClassType } from "../../../utils";
import { InputMaskElement } from "imask"
import { BasicInputProps } from "../BasicInput/model";
import { ChangeEvent, ReactNode, FocusEvent } from "react";

export type TimeInputProps = {
    label: string;
    name: string;
    isError?: boolean;
    icon?: ReactNode;
    options?: {
        showOptionsOnfocus?: boolean;
        closeOnOutsideClick?: boolean;
    }
    styleClass?: BasicInputProps["styleClass"] & {
        scroller?: StyleClassType["root"];
        option?: StyleClassType["option"];
        column?: StyleClassType["option"];
        errorScroller?: StyleClassType["error"];
        icon?: StyleClassType["icon"];
    }
    hours?: {
        from?: number;
        to?: number;
    }
    minutes?: {
        from?: number;
        to?: number;
    }
    inputProps?: BasicInputProps["inputProps"];
    labelProps?: BasicInputProps["labelProps"];
    onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
}

export type TimeInputForwardedref = { current: InputMaskElement | null }