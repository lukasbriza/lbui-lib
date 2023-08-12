import { ReactNode, FocusEvent, ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, LabelHTMLAttributes, HTMLAttributes } from "react";
import { StyleClassType } from "../../../utils";

type DetailedInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type DetailedLabelProps = DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>
type DetailedDivElement = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export type BasicInputProps = {
    name: string;
    label?: ReactNode;
    type?: HTMLInputElement["type"]
    onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
    onStateChange?: (params: { focused: boolean, filled: boolean }) => void
    rootProps?: Omit<DetailedDivElement, "ref" | "className">;
    labelProps?: Omit<DetailedLabelProps, "ref" | "htmlFor" | "className">;
    inputProps?: Omit<DetailedInputProps, "ref" | "name" | "onFocus" | "onChange" | "onBlur" | "type">;
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
    children?: (state: { isError?: boolean, filled: boolean, focused: boolean }) => ReactNode;
}