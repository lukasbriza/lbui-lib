import React, { useRef } from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { BasicSelect } from '../../components/forms/BasicSelect/BasicSelect';
import { useForm, ChangeHandler } from 'react-hook-form';

const meta: Meta<typeof BasicSelect> = {
    title: "@lbui/Forms/BasicSelect",
    component: BasicSelect,
}
export default meta
type Story = StoryObj<typeof BasicSelect>

const Template: StoryFn<typeof BasicSelect> = (args) => {
    const ref = useRef(null)
    const { handleSubmit, register, control } = useForm()

    const submit = (data: any) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <BasicSelect {...args} {...register(args.name)} />
            <button type='submit' style={{ marginTop: "30px", cursor: "pointer" }}>Submit</button>
        </form>
    )
}

export const Default: Story = Template.bind({})
Default.args = {
    label: "BasicSelect:",
    name: "select",
    option: [{ key: "0", value: "test-value1" }, { key: "1", value: "test-value2" }]
}