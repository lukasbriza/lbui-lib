import React from 'react';
import { StoryFn, Meta, StoryObj } from '@storybook/react';
import { MenuItem } from '../../components';
import { Icon } from '../../lib';

const meta: Meta<typeof MenuItem> = {
    title: '@lbui/Navigation/MenuItem',
    component: MenuItem,
}
export default meta
type Story = StoryObj<typeof MenuItem>

const Template: StoryFn<typeof MenuItem> = (args) => (<MenuItem {...args} />);

export const Default: Story = Template.bind({})
Default.args = {
    label: 'MenuItem'
}

export const WithIcon: Story = Template.bind({})
WithIcon.args = {
    label: 'MenuItem',
    iconPosition: 'left',
    icon: <Icon />
}

export const WithUnderliner: Story = Template.bind({})
WithUnderliner.args = {
    label: 'MenuItem',
    underliner: true,
    underlinerOrigin: "center"
}
