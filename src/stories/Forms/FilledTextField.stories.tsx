import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FilledTextField } from '../../components';
import { useForm } from 'react-hook-form';


export default {
    title: '@lbui/Forms/FilledTextField',
    component: FilledTextField,
    argTypes: {
        styleClass: {
            description: "define applied classNames of diferent part of component in different states"
        },
        isError: {
            description: "defines if apply error class (default is set to false)"
        },
        name: {
            description: "value applied to the htmlFor props of label and to the id of input"
        },
        label: {
            description: "value applied as text for label"
        },
        value: {
            description: "value applied to the input element"
        },
        autoComplete: {
            description: "turn on/off autocomplete (default is off)"
        }
    }
} as ComponentMeta<typeof FilledTextField>;

const Template: ComponentStory<typeof FilledTextField> = (args) => <FilledTextField {...args} />;

const HookForm: ComponentStory<typeof FilledTextField> = (args) => {
    const { handleSubmit, register } = useForm({ defaultValues: { input: "" } })
    const submit = (data: { input: string }) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <FilledTextField {...args} {...register("input")} />
            <button style={{ marginTop: "15px" }} type="submit">submit</button>
        </form>
    )
}


export const Default = Template.bind({});
Default.args = {
    name: "TextField",
    label: "label"
}

export const ReactHookForm = HookForm.bind({})
ReactHookForm.args = {
    label: "label"
}
