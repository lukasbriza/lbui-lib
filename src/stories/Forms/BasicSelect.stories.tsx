import React from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { useArgs } from "@storybook/preview-api";
import { BasicSelect } from '../../components/forms/BasicSelect/BasicSelect';
import { useForm } from 'react-hook-form';

const meta: Meta<typeof BasicSelect> = {
    title: "@lbui/Forms/BasicSelect",
    component: BasicSelect,
}
export default meta
type Story = StoryObj<typeof BasicSelect>

const Template: StoryFn<typeof BasicSelect> = (args) => {
    const { name, ...otherArgs } = args
    const { handleSubmit, register, setValue } = useForm()

    const [, setArgs] = useArgs()

    const hadnleStatechange = (value) => {
        args.onStateChange?.(value)
        setArgs(value)
    }

    const submit = (data: any) => {
        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit(submit)}>
            <BasicSelect {...otherArgs} {...register(name)} onStateChange={hadnleStatechange} />
            <button type='submit' style={{ marginTop: "30px", cursor: "pointer" }}>Submit</button>
            <button type="button" onClick={() => { setValue("select", [{ value: "col1", key: "col1" }, { value: "col2", key: "col2" }]) }}>test</button>
        </form>
    )
}

export const Default: Story = Template.bind({})
Default.args = {
    label: "BasicSelect:",
    name: "select",
    options: [[{ value: "col1", key: "col1" }, { value: "col11", key: "col11" }], [{ value: "col2", key: "col2" }, { value: "col21", key: "col21" }]],

}

export const NonClearable: Story = Template.bind({})
NonClearable.args = {
    label: "BasicSelect:",
    name: "select",
    options: [[{ value: "col1", key: "col1" }, { value: "col11", key: "col11" }], [{ value: "col2", key: "col2" }, { value: "col21", key: "col21" }]],
    option: {
        clearable: false
    }
}

export const NoLabel: Story = Template.bind({})
NoLabel.args = {
    name: "select",
    options: [[{ value: "col1", key: "col1" }, { value: "col11", key: "col11" }], [{ value: "col2", key: "col2" }, { value: "col21", key: "col21" }]],
    option: {
        clearable: false
    }
}