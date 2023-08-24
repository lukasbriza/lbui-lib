import { StyleClassType, Option } from "../../../utils";

type ComponentInnerState = { focused: boolean; filled: boolean, opened: boolean, isError?: boolean }
export type OptionsProps = {
    option: Option[]
    clearable?: boolean;
    state: {
        opened: boolean;
        focused: boolean;
        filled: boolean;
        isError?: boolean;
    }
    styleClass?: {
        options?: StyleClassType["option"];
        focusOptions?: StyleClassType["focus"];
        fillOptions?: StyleClassType["fill"];
        errorOptions?: StyleClassType["error"];

        option?: StyleClassType["option"];
        focusOption?: StyleClassType["focus"];
        fillOption?: StyleClassType["fill"];
        errorOption?: StyleClassType["error"];
    }
    openPosition?: gsap.Position
    closePosition?: gsap.Position
    openAnimation?: (ref: HTMLDivElement) => gsap.core.TimelineChild;
    closeAnimation?: (ref: HTMLDivElement) => gsap.core.TimelineChild;
    onOptionClick: (option?: Option) => () => void;
    customOption?: React.JSXElementConstructor<{ option: Option, role: "option", state: ComponentInnerState, onClick: () => void }>
    customClearOption?: React.JSXElementConstructor<{ option: undefined, state: ComponentInnerState, onClick: () => void }>
}

export type OptionItemProps = { className: string; onClick: () => void, value: string }