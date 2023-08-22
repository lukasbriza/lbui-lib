import React from 'react';
import { StoryFn, Meta, StoryObj } from '@storybook/react';
import { Turn } from '../../components';

const meta: Meta<typeof Turn> = {
    title: '@lbui/Animations/Turn',
    component: Turn
}
export default meta
type Story = StoryObj<typeof Turn>

const Template: StoryFn<typeof Turn> = (args) => (
    <Turn {...args}>
        <div
            style={{
                width: '100px',
                height: '100px',
                background: '#e35f21',
                color: 'white',
                lineHeight: '100px',
                textAlign: 'center',
            }}>Turn item</div>
    </Turn>
);

export const Togglable: Story = Template.bind({})
Togglable.args = {
    on: false,
    to: 360,
    base: 0,
    appear: false,
}
export const Appear: Story = Template.bind({})
Appear.args = {

    appear: true,
    on: true,
    to: 360,
    base: 0,
}