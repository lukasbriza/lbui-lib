import React from 'react';
import { BasicInput } from '../../components';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';

const meta: Meta<typeof BasicInput> = {
    title: "@lbui/Forms/BasicInput",
    component: BasicInput,
}
export default meta
type Story = StoryObj<typeof BasicInput>

const Template: StoryFn<typeof BasicInput> = (args) => {
    return <BasicInput {...args} onStateChange={(state) => console.log(state)} />
}

const HookForm: StoryFn<typeof BasicInput> = (args) => {
    const { register, handleSubmit } = useForm({ defaultValues: { input: "" } })

    const submit = (data: { input: string }) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <BasicInput {...args} {...register("input")} />
            <button type="submit">Submit</button>
        </form>)
}

export const Default: Story = Template.bind({})
Default.args = {
    label: "Label",
}

export const ReactHookForm: Story = HookForm.bind({})
ReactHookForm.args = {
    name: "input",
    label: "Label",
}