import { DetailedDivElement, DetailedLabelProps, Option, StyleClassType } from "../../../utils";
import { FocusEvent, ChangeEvent, ReactNode, Dispatch, SetStateAction } from "react"

type ComponentInnerState = { focused: boolean; filled: boolean, opened: boolean, isError?: boolean }

export type BasicSelectProps = {
    name: string;
    option: Option[];
    defaultValue?: Option;
    value?: Option;
    label?: string;
    isError?: boolean;

    options?: {
        closeOnSelect?: boolean;
        closeOnClickOutside?: boolean;
        clearable?: boolean;
        openAnimation?: (ref: HTMLDivElement) => gsap.core.TimelineChild;
        openPosition?: gsap.Position;
        closeAnimation?: (ref: HTMLDivElement) => gsap.core.TimelineChild;
        closePosition?: gsap.Position;
    }


    customOption?: React.JSXElementConstructor<{ option: Option, role: "option", state: ComponentInnerState, onClick: () => void }>
    customClearOption?: React.JSXElementConstructor<{ option: undefined, state: ComponentInnerState, onClick: () => void }>

    onStateChange?: (params: ComponentInnerState) => void;
    onFocus?: (e: FocusEvent<HTMLDivElement>) => void;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: FocusEvent<HTMLDivElement>) => void;
    children?: (state: ComponentInnerState & { setOpened: Dispatch<SetStateAction<boolean>> }) => ReactNode | ReactNode;

    rootProps?: Omit<DetailedDivElement, "ref" | "className">;
    labelProps?: Omit<DetailedLabelProps, "ref" | "htmlFor" | "className">;
    selectProps?: Omit<DetailedDivElement, "ref" | "className" | "onFocus" | "onBlur">;

    styleClass?: {
        root?: StyleClassType["root"];
        focusRoot?: StyleClassType["focus"];
        filledRoot?: StyleClassType["fill"];
        errorRoot?: StyleClassType["error"];

        label?: StyleClassType["label"];
        focusLabel?: StyleClassType["focus"];
        fillLabel?: StyleClassType["fill"];
        errorLabel?: StyleClassType["error"];

        select?: StyleClassType["select"]
        focusSelect?: StyleClassType["focus"];
        fillSelect?: StyleClassType["fill"];
        errorSelect?: StyleClassType["error"];

        options?: StyleClassType["option"];
        focusOptions?: StyleClassType["focus"];
        fillOptions?: StyleClassType["fill"];
        errorOptions?: StyleClassType["error"];

        option?: StyleClassType["option"];
        focusOption?: StyleClassType["focus"];
        fillOption?: StyleClassType["fill"];
        errorOption?: StyleClassType["error"];
    }
}