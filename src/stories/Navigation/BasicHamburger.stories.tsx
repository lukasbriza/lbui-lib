import React from 'react';
import { StoryFn, Meta, StoryObj } from '@storybook/react';
import { BasicHamburger } from '../../components';

const meta: Meta<typeof BasicHamburger> = {
    title: '@lbui/Navigation/BasicHamburger',
    component: BasicHamburger
}
export default meta
type Story = StoryObj<typeof BasicHamburger>

const Template: StoryFn<typeof BasicHamburger> = (args) => <BasicHamburger {...args} />;

export const Default: Story = Template.bind({})
