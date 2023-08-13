import React, { useEffect, useRef } from 'react';

import { StoryFn, Meta } from '@storybook/react';
import { BasicTextField } from '../../components';
import { useForm } from 'react-hook-form';


export default {
    title: '@lbui/Forms/BasicTextField',
    component: BasicTextField,
    argTypes: {
        styleClass: {
            description: "define applied classNames of diferent part of component in different states"
        },
        isError: {
            description: "defines if apply error class (default is set to false)"
        },
        onFocus: {
            description: "callback called on focus event"
        },
        onBlur: {
            description: "callback called on blur event"
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
} as Meta<typeof BasicTextField>;

const Template: StoryFn<typeof BasicTextField> = (args) => <BasicTextField {...args} />;

const HookForm: StoryFn<typeof BasicTextField> = (args) => {
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

export const DefaultValue = Template.bind({});
DefaultValue.args = {
    name: "TextField",
    label: "Label",
    defaultValue: "SomeDefaultValue"
}

export const ReactHookForm = HookForm.bind({})
ReactHookForm.args = {
    name: "TextField",
    label: "Label"
}

