import { BasicSelectProps } from "./model";
import { Option } from "../../../utils";
import { Dispatch, SetStateAction } from "react";

export const resolveInitialValue = (
    options: BasicSelectProps["options"],
    value?: BasicSelectProps["value"],
    defaultValue?: BasicSelectProps["defaultValue"],
) => {
    const isSimple = isSimpleOptions(options)
    //HANDLE ERROR
    verifyMutiDimensionalOptions(options, value, defaultValue)

    //VALUE OVERBEAT DEFAULT VALUE
    const valuesToReturn = value || defaultValue

    //VALUE AND DEFAULT VALUE ARE NOT SET FROM PARRENT
    if (valuesToReturn === undefined) {
        return isSimple ? undefined : Array(options.length).fill(undefined) as undefined[]
    }

    //ONE DIMENSION
    if (isSimple) {
        const optionToReturn = findInOptions(options as Option[], 0, valuesToReturn as Option)
        return optionToReturn
    }

    //MULTIDIMENSIONAL 
    const returnArray: (Option | undefined)[] = Array(options.length).fill(undefined);
    (valuesToReturn as (Option | undefined)[]).forEach((val) => {
        if (val) {
            const index = getColumnIdentificator(val.key) //Number(val.key.split("-")[1]);
            const optioncolumn = (options as Option[][])[index]
            returnArray[index] = findInOptions(optioncolumn, index, val)
        }
    })
    return returnArray
}

export const handleParenValueChange = (
    options: BasicSelectProps["options"],
    value: BasicSelectProps["value"],
    innerValue: BasicSelectProps["value"],
    setInnerValue: Dispatch<SetStateAction<BasicSelectProps["value"]>>
) => {
    verifyMutiDimensionalOptions(options, value, undefined)
    const isSimple = isSimpleOptions(options)

    if (isSimple) {
        if (Array.isArray(value)) {
            throw Error("Value is not in proper format!")
        }

        if (!innerValue && value) {
            setInnerValue(findInOptions(options as Option[], 0, value))
            return
        }
        if (innerValue && value && ((innerValue as Option).key !== value.key)) {
            setInnerValue(findInOptions(options as Option[], 0, value))
            return
        }
        return
    }
    if (!isSimple) {
        if (!Array.isArray(value) && value !== undefined) {
            throw Error("Value is not in proper format!")
        }

        if (!innerValue && value) {
            const tempValue: (Option | undefined)[] = Array(options.length).fill(undefined)
            value.forEach((val) => {
                if (val) {
                    const index = getColumnIdentificator(val.key) //Number(val.key.split("-")[1])
                    tempValue[index] = findInOptions((options as Option[][])[index], index, val)
                }
            })
            setInnerValue(tempValue)
            return
        }
        if (innerValue && value) {
            const tempValue = innerValue as (Option | undefined)[]
            tempValue.map((val, index) => {
                //ORIGINAL VLAUE IS DEFINED WORKFLOW
                if (val) {
                    const tempIndex = getColumnIdentificator(val.key) //Number(val.key.split("-"))
                    let valueToOverwrite: Option | undefined = val
                    //FIND RIGHT COLUMN IN PARENT VALUES
                    value.forEach((parVal) => {
                        if (parVal) {
                            const index = getColumnIdentificator(parVal.key) //Number(parVal.key.split("-")[1])
                            if (index === tempIndex && findInOptions((options as Option[][])[tempIndex], index, parVal)?.key !== val.key) {
                                valueToOverwrite = findInOptions((options as Option[][])[tempIndex], index, parVal)
                            }
                        }
                    })

                    //RETURN UPDATED VALUE
                    return valueToOverwrite
                }

                //ORIGINAL VLAUE IS NOT DEFINED WORKFLOW
                const newValue = value.find((parentValue) => {
                    if (parentValue) {
                        const parIndex = getColumnIdentificator(parentValue.key)  //Number(parentValue.key.split("-")[1])
                        if (parIndex === index && findInOptions((options as Option[][])[parIndex], parIndex, parentValue)?.key === parentValue.key) {
                            return true
                        }
                    }
                    return false
                })
                return newValue ?? val
            })
            setInnerValue(tempValue)
            return
        }
    }
    return
}

export const isSimpleOptions = (options: BasicSelectProps["options"]) => {
    return !Array.isArray(options[0])
}

export const findInOptions = (options: Option[], index: number, value?: Option): Option | undefined => options.find((option) => option.key === `${value?.key}-${index}`)

export const verifyMutiDimensionalOptions = (
    options: BasicSelectProps["options"],
    value?: BasicSelectProps["value"],
    defaultValue?: BasicSelectProps["defaultValue"],) => {
    const isSimple = isSimpleOptions(options)
    try {
        if (!isSimple) {
            if (value) {
                const innerValue = value as (Option | undefined)[]
                if (innerValue.length !== options.length) {
                    throw Error("Value array isn´t same lenght as number of option columns!")
                }
            }
            if (defaultValue) {
                const innerDefaultValue = defaultValue as (Option | undefined)[]
                if (innerDefaultValue.length !== options.length) {
                    throw Error("DefaultValue array isn´t same lenght as number of option columns!")
                }
            }
        }
    } catch {
        return undefined
    }

}

export const transformToInputValue = (value: BasicSelectProps["value"]) => {
    if (Array.isArray(value)) {
        return value.map((item) => item?.value ?? undefined).filter((item) => item !== undefined).join(";")
    }
    return value?.value ?? undefined
}

export const getColumnIdentificator = (key: string) => {
    const index = key.split("-").pop()
    if (isNaN(Number(index))) {
        throw Error("Insuficient shape of key.")
    }
    return Number(index)
}

export const isFilled = (options: BasicSelectProps["options"], value: BasicSelectProps["value"]) => {
    const isSimple = isSimpleOptions(options)
    if (!value) {
        return false
    }

    if (isSimple) {
        const innerValue = value as (undefined | Option)
        return innerValue ? true : false
    }

    const innerValue = value as (undefined[] | Option[])
    const arrayLen = innerValue.length
    const undefinedOptions = innerValue.filter((option) => option === undefined)
    const nullOptions = innerValue.filter((option) => option?.value === null)

    if (arrayLen === undefinedOptions.length) {
        return false
    }
    if (arrayLen === nullOptions.length) {
        return false
    }
    if (arrayLen === (nullOptions.length + undefinedOptions.length)) {
        return false
    }
    return true
}

