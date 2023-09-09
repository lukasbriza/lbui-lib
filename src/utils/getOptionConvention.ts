import { Option } from "./global.model"

export const getOptionConvention = (options: Option[] | Option[][]) => {
    const isSimple = !Array.isArray(options[0])
    if (isSimple) {
        return (options as Option[]).map(({ key, value }) => ({ value: value, key: `${key}-0` }))
    }
    return (options as Option[][]).map((optionArray, index) => {
        return optionArray.map(({ key, value }) => ({ value: value, key: `${key}-${index}` }))
    })
}