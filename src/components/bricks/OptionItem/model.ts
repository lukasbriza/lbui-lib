import { StyleClassType } from "../../../utils";

export type OptionItemProps = {
    styleClass?: {
        root?: StyleClassType["root"]
    };
    onClick: () => void,
    value: string
}