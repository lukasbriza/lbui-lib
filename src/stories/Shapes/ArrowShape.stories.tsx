import React from 'react';
import { StoryFn, Meta, StoryObj } from '@storybook/react';
import { ArrowShape } from '../../components';

const meta: Meta<typeof ArrowShape> = {
    title: '@lbui/Shapes/ArrowShape',
    component: ArrowShape
}
export default meta
type Story = StoryObj<typeof ArrowShape>

const Template: StoryFn<typeof ArrowShape> = (args) => (<ArrowShape {...args} />);

export const Default: Story = Template.bind({})
