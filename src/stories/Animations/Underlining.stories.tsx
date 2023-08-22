import React from 'react';
import { StoryFn, Meta, StoryObj } from '@storybook/react';
import { Underlining } from '../../components';

const meta: Meta<typeof Underlining> = {
    title: '@lbui/Animations/Underlining',
    component: Underlining,
}
export default meta
type Story = StoryObj<typeof Underlining>

const Template: StoryFn<typeof Underlining> = (args) => (<Underlining {...args}><div>Component</div></Underlining>);

export const Hoverable: Story = Template.bind({})
Hoverable.args = {
    hoverable: true
}
export const NotHoverable: Story = Template.bind({})
NotHoverable.args = {
    hoverable: false,
    on: false
}
