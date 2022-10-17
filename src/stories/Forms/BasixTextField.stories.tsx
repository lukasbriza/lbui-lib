import React, { useRef, useEffect } from 'react';
import { FieldValues, useForm } from 'react-hook-form'
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BasicTextField, BasicTextFieldHF } from '../../components';


export default {
    title: '@lbui/Forms/BasicTextField',
    component: BasicTextField,
    argTypes: {
    }
} as ComponentMeta<typeof BasicTextField>;

const Template: ComponentStory<typeof BasicTextField> = (args) => <BasicTextField {...args} />;

type FormInputs = {
    input: string
}

const HookForms: ComponentStory<typeof BasicTextField> = (args) => {
    const { handleSubmit, control } = useForm<FormInputs>()
    const ref = useRef<HTMLInputElement>(null)

    return (
        <form onSubmit={handleSubmit((e: FieldValues) => {
            console.log(e);
            console.log(ref)
        })}>
            <BasicTextFieldHF control={control} ref={ref} {...args} />
            <input style={{ marginTop: '20px' }} type="submit" />
        </form>
    )
}

export const Default = Template.bind({});
Default.args = {
    name: "TextField",
    label: "Label"
}

export const HookFormInput = HookForms.bind({})
HookFormInput.args = {
    name: "input",
    label: "Label"
}