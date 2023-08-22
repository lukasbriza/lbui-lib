import React from 'react';
import { StoryFn, Meta, StoryObj } from '@storybook/react';
import { RoundBadge } from '../../components';
import { Icon } from '../../lib'

const meta: Meta<typeof RoundBadge> = {
    title: '@lbui/Navigation/RoundBadge',
    component: RoundBadge
}
export default meta
type Story = StoryObj<typeof RoundBadge>

const Template: StoryFn<typeof RoundBadge> = (args) => <RoundBadge {...args} />

export const Default: Story = Template.bind({})
Default.args = {
    defaultNode: <Icon />,
    hoverNode: <div>HoverNode</div>,
    transition: false,
}
