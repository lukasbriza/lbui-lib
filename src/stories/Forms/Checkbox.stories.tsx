import React from 'react'
import { StoryFn, Meta, StoryObj } from '@storybook/react'
import { Checkbox } from '../../components'

const meta: Meta<typeof Checkbox> = {
    title: '@lbui/Forms/Checkbox',
    component: Checkbox,
}
export default meta
type Story = StoryObj<typeof Checkbox>

const Template: StoryFn<typeof Checkbox> = (args) => <Checkbox {...args} />;



export const Default: Story = Template.bind({});
Default.args = {
    label: "label"
}

