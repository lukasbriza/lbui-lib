import React from 'react';
import { StoryFn, Meta, StoryObj } from '@storybook/react';
import { Fade } from '../../components';

const meta: Meta<typeof Fade> = {
    title: '@lbui/Animations/Fade',
    component: Fade
}
export default meta
type Story = StoryObj<typeof Fade>

const Template: StoryFn<typeof Fade> = (args) => (
    <Fade {...args}>
        <div style={{
            width: '200px',
            height: '200px',
            lineHeight: '200px',
            textAlign: 'center',
            background: '#e35f21',
            color: 'white'
        }}>Fade animation</div>
    </Fade>
);

export const Appear: Story = Template.bind({})

export const Togglable: Story = Template.bind({})
Togglable.args = {
    appear: false,
    on: true
}