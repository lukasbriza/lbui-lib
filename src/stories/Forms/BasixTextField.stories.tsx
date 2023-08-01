import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BasicTextField } from '../../components';
import { useForm } from 'react-hook-form';


export default {
    title: '@lbui/Forms/BasicTextField',
    component: BasicTextField,
    argTypes: {
        rootClass: {
            description: "class applied to the root div element"
        },
        className: {
            description: "class applied to the input element"
        },
        labelClass: {
            description: "class applied to the label element"
        },
        labelFocusClass: {
            description: "class applied to the label during focusIn event"
        },
        labelFilledClass: {
            description: "class applied to the label during focusOut event when input is not empty"
        },
        errorLabelClass: {
            description: "class applied to the label if error props is true"
        },
        errorInputClass: {
            description: "class applied to the input if error props is true"
        },
        error: {
            description: "defines if apply error class (default is set to false)"
        },
        focusIn: {
            description: "callback called on focusIn event"
        },
        focusOut: {
            description: "callback called on focusOut event"
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
} as ComponentMeta<typeof BasicTextField>;

const Template: ComponentStory<typeof BasicTextField> = (args) => <BasicTextField {...args} />;

const HookForm: ComponentStory<typeof BasicTextField> = (args) => {
    const { handleSubmit, register } = useForm({ defaultValues: { input: "" } })
    const submit = (data: { input: string }) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <BasicTextField {...args} {...register("input")} />
            <button style={{ marginTop: "15px" }} type="submit">submit</button>
        </form>
    )
}



export const Default = Template.bind({});
Default.args = {
    name: "TextField",
    label: "Label",
}

export const ReactHookForm = HookForm.bind({})
ReactHookForm.args = {
    name: "TextField",
    label: "Label"
}