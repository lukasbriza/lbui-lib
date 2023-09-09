import React from 'react';

import { StoryFn, Meta, StoryObj } from '@storybook/react';
import { BasicTextField } from '../../components';
import { useForm } from 'react-hook-form';

const meta: Meta<typeof BasicTextField> = {
    title: '@lbui/Forms/BasicTextField',
    component: BasicTextField,
}
export default meta
type Story = StoryObj<typeof BasicTextField>

const Template: StoryFn<typeof BasicTextField> = (args) => <BasicTextField {...args} />;

const HookForm: StoryFn<typeof BasicTextField> = (args) => {
    const { handleSubmit, register } = useForm({ defaultValues: { TextField: "" } })

    const submit = (data: { TextField: string }) => {
        console.log(data)
    }


    return (
        <form onSubmit={handleSubmit(submit)}>
            <BasicTextField {...args} {...register(args.name as "TextField")} />
            <button style={{ marginTop: "15px" }} type="submit">submit</button>
        </form>
    )
}



export const Default: Story = Template.bind({});
Default.args = {
    name: "TextField",
    label: "Label",
}

export const DefaultValue: Story = Template.bind({});
DefaultValue.args = {
    name: "TextField",
    label: "Label",
    defaultValue: "SomeDefaultValue"
}

export const ReactHookForm: Story = HookForm.bind({})
ReactHookForm.args = {
    name: "TextField",
    label: "Label"
}

