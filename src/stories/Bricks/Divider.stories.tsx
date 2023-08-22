import React from 'react';
import { StoryFn, Meta, StoryObj } from '@storybook/react';
import { Divider } from '../../components';

const meta: Meta<typeof Divider> = {
    title: '@lbui/Bricks/Divider',
    component: Divider,
}
export default meta
type Story = StoryObj<typeof Divider>

const Template: StoryFn<typeof Divider> = (args) => (<Divider {...args} />);

export const Default: Story = Template.bind({})

export const CustomWidth: Story = Template.bind({})
CustomWidth.args = {
    fullWidth: false,
    width: 10,
    depth: 1
}