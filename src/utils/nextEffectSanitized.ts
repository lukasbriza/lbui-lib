export const nextEffectSanitized = (): boolean => {
    if (typeof document !== undefined) {
        return true
    }
    return false
}