import { Option, Props, StyleClassType } from "../../../utils";

export type OptionScrollerProps = {
    hook: HTMLElement | null
    options: Array<Option[]> | Option[]
    show: boolean;
    onClickOutside?: () => void;
    onSelect?: (option: Option) => void;
    styleClass?: {
        root?: StyleClassType["root"]
        option?: StyleClassType["option"]
        columnSection?: StyleClassType["option"]
        error?: StyleClassType["error"]
    }
} & Omit<Props<HTMLDivElement>, "onSelect">
export type ForwarderRef = { current: HTMLDivElement | null }