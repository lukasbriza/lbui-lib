import React, { useRef } from 'react'
import { useForm, FieldValues } from 'react-hook-form'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CheckboxSquared, CheckboxSquaredHF } from '../../components'


export default {
    title: '@lbui/Forms/CheckboxSquared',
    component: CheckboxSquared,
    argTypes: {
    }
} as ComponentMeta<typeof CheckboxSquared>;

const Template: ComponentStory<typeof CheckboxSquared> = (args) => {
    return (
        <CheckboxSquared {...args} />
    )
};

type FormInputs = {
    checkbox: boolean
}

const HookForms: ComponentStory<typeof CheckboxSquared> = (args) => {
    const { handleSubmit, control } = useForm<FormInputs>({
        defaultValues: {
            checkbox: true
        }
    })
    const ref = useRef<HTMLInputElement>(null)

    return (
        <form onSubmit={handleSubmit((e: FieldValues) => {
            console.log(e);
            console.log(ref)
        })}>
            <CheckboxSquaredHF control={control} ref={ref} {...args} />
            <input style={{ marginTop: '20px' }} type="submit" />
        </form>
    )
}



export const Default = Template.bind({});
Default.args = {
    label: "label",
    animate: false
}

export const Animated = Template.bind({});
Animated.args = {
    label: "label",
    animate: true
}

export const HookFormCheckbox = HookForms.bind({})
HookFormCheckbox.args = {
    name: "checkbox",
    label: "name of checkbox"
}
