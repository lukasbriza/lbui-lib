import React from 'react';
import { StoryFn, Meta, StoryObj } from '@storybook/react';
import { BulletShape } from '../../components';

const meta: Meta<typeof BulletShape> = {
    title: '@lbui/Shapes/BulletShape',
    component: BulletShape
}
export default meta
type Story = StoryObj<typeof BulletShape>

const Template: StoryFn<typeof BulletShape> = (args) => (<BulletShape {...args} />);

export const Round: Story = Template.bind({})

export const Diamond: Story = Template.bind({})
Diamond.args = {
    type: 'diamond',
}

export const Square: Story = Template.bind({})
Diamond.args = {
    type: 'square',
}

