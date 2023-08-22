import React from 'react';
import { StoryFn, Meta, StoryObj } from '@storybook/react';
import { FilledTextField } from '../../components';
import { useForm } from 'react-hook-form';

const meta: Meta<typeof FilledTextField> = {
    title: '@lbui/Forms/FilledTextField',
    component: FilledTextField
}
export default meta
type Story = StoryObj<typeof FilledTextField>

const Template: StoryFn<typeof FilledTextField> = (args) => <FilledTextField {...args} />;

const HookForm: StoryFn<typeof FilledTextField> = (args) => {
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


export const Default: Story = Template.bind({});
Default.args = {
    name: "TextField",
    label: "label"
}

export const ReactHookForm: Story = HookForm.bind({})
ReactHookForm.args = {
    label: "label"
}
