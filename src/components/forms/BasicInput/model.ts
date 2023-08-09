import { ReactNode, FocusEvent, ChangeEvent } from "react";
import { Props, StyleClassType } from "../../../utils";

export type BasicInputProps = {
    name: string;
    label?: ReactNode;
    type?: HTMLInputElement["type"]
    onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
    onStateChange?: (params: { focused: boolean, filled: boolean }) => void
    rootProps?: Omit<Props<HTMLDivElement>, "ref" | "className">;
    labelProps?: Omit<Props<HTMLLabelElement>, "ref" | "htmlFor" | "className">;
    inputProps?: Omit<Props<HTMLInputElement>, "ref" | "name" | "onFocus" | "onChange" | "onBlur" | "type">;
    styleClass?: {
        root?: StyleClassType["root"],
        label?: StyleClassType["label"],
        input?: StyleClassType["input"],
        errorLabel?: StyleClassType["error"]
        errorInput?: StyleClassType["error"]
        errorRoot?: StyleClassType["error"]
        focusLabel?: StyleClassType["focus"]
        focusInput?: StyleClassType["focus"]
        focusRoot?: StyleClassType["focus"]
        fillInput?: StyleClassType["fill"]
        fillLabel?: StyleClassType["fill"]
        fillRoot?: StyleClassType["fill"]
    }
    isError?: boolean;
    children?: ReactNode;
}

export type BasicInputImperative = {
    label: { current: HTMLLabelElement | null }
    input: { current: HTMLInputElement | null }
    wrapper: { current: HTMLDivElement | null }
    state: {
        focused: boolean;
        filled: boolean;
    }
}