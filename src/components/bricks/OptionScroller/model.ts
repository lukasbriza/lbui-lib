import { Option, Props, StyleClassType } from "../../../utils";

type ComponentInnerState = { focused: boolean; filled: boolean, isError?: boolean }

export type OptionScrollerProps = {
    options: Array<Option[]> | Option[]
    open: boolean;
    onClickOutside?: () => void;
    onSelect: (option: Option) => void;
    state: {
        focused: boolean;
        filled: boolean;
        isError?: boolean;
    }
    styleClass?: {
        root?: StyleClassType["root"]
        focusRoot?: StyleClassType["focus"];
        fillRoot?: StyleClassType["fill"];
        errorRoot?: StyleClassType["error"];

        option?: StyleClassType["option"]
        focusOption?: StyleClassType["focus"];
        fillOption?: StyleClassType["fill"];
        errorOption?: StyleClassType["error"];

        columnSection?: StyleClassType["option"]
        focusColumnSection?: StyleClassType["focus"];
        fillColumnSection?: StyleClassType["fill"];
        errorColumnSection?: StyleClassType["error"];
    }
    option?: {
        clearable?: boolean;
        openAnimation?: (ref: HTMLDivElement) => void;
        closeAnimation?: (ref: HTMLDivElement) => void;
        CustomOption?: React.JSXElementConstructor<{ option: Option, role: "option", state: ComponentInnerState, onClick: () => void } & {}>
        CustomClearOption?: React.JSXElementConstructor<{ option: Option, role: "option", state: ComponentInnerState, onClick: () => void } & {}>
    }
} & Omit<Props<HTMLDivElement>, "onSelect">

export type ForwarderRef = React.RefObject<HTMLDivElement>