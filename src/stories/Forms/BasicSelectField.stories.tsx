import React from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { BasicSelectField } from '../../components';
import { useArgs } from "@storybook/preview-api";


const meta: Meta<typeof BasicSelectField> = {
    title: "@lbui/Forms/BasicSelectField",
    component: BasicSelectField,

}
export default meta
type Story = StoryObj<typeof BasicSelectField>

const Template: StoryFn<typeof BasicSelectField> = (args) => {
    const [, setArgs] = useArgs()

    const hadnleStatechange = (value) => {
        args.onStateChange?.(value)
        setArgs(value)
    }
    return (
        <BasicSelectField {...args} onStateChange={hadnleStatechange} />
    )
}

export const Default: Story = Template.bind({})
Default.args = {
    label: "BasicSelectField",
    name: "select",
    options: [[{ value: "col1", key: "col1" }, { value: "col11", key: "col11" }], [{ value: "col2", key: "col2" }, { value: "col21", key: "col21" }]],

}