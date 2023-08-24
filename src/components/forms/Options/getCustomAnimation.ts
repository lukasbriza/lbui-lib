import { OptionsProps } from "./model";

export const getCustomAnimation = (props: {
    opened: boolean;
    openPosition?: OptionsProps["openPosition"];
    closePosition?: OptionsProps["closePosition"];
    openAnimation: OptionsProps["openAnimation"];
    closeAnimation: OptionsProps["closeAnimation"];
    target: HTMLDivElement | null
}) => {
    const { openAnimation, closeAnimation, opened, target, openPosition, closePosition } = props

    const animationToPlay = opened ? openAnimation : closeAnimation
    const animation = (animationToPlay && target) ? animationToPlay(target) : undefined

    return ({
        animation,
        position: opened ? openPosition : closePosition
    })
}