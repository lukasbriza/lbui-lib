import { DetailedDivElement, DetailedLabelProps, Option, StyleClassType } from "../../../utils";
import { FocusEvent, ChangeEvent, ReactNode, Dispatch, SetStateAction } from "react"

type ComponentInnerState = { focused: boolean; filled: boolean, isError?: boolean }

export type BasicSelectProps = {
    name: string;
    options: Option[] | Option[][];
    defaultValue?: Option | (Option | undefined)[];
    value?: Option | (Option | undefined)[];
    label?: string;
    isError?: boolean;

    option?: {
        closeOnSelect?: boolean;
        closeOnClickOutside?: boolean;
        clearable?: boolean;
        openAnimation?: (ref: HTMLDivElement) => void;
        closeAnimation?: (ref: HTMLDivElement) => void;
        CustomOption?: React.JSXElementConstructor<{
            option: Option,
            role: "option",
            state: { focused: boolean; filled: boolean, isError?: boolean },
            onClick: () => void
        }>
        CustomClearOption?: React.JSXElementConstructor<{
            option: Option,
            role: "option",
            state: { focused: boolean; filled: boolean, isError?: boolean },
            onClick: () => void
        }>
    }

    valueTransform?: (value: BasicSelectProps["value"]) => ReactNode
    onStateChange?: (params: ComponentInnerState) => void;
    onFocus?: (e: FocusEvent<HTMLDivElement>) => void;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: FocusEvent<HTMLDivElement>) => void;
    children?: (state: ComponentInnerState & { setOpened: Dispatch<SetStateAction<boolean>> }) => ReactNode | ReactNode;

    rootProps?: Omit<DetailedDivElement, "ref" | "className">;
    labelProps?: Omit<DetailedLabelProps, "ref" | "htmlFor" | "className">;
    selectProps?: Omit<DetailedDivElement, "ref" | "className" | "onFocus" | "onBlur" | "onchange">;

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

        columnSection?: StyleClassType["option"]
        focusColumnSection?: StyleClassType["focus"];
        fillColumnSection?: StyleClassType["fill"];
        errorColumnSection?: StyleClassType["error"];
    }
}