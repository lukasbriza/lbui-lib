import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Fade } from '../../components';

export default {
    title: '@lbui/Animations/Fade',
    component: Fade,
    argTypes: {
    }
} as ComponentMeta<typeof Fade>;

const Template: ComponentStory<typeof Fade> = (args) => (
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

export const Appear = Template.bind({})

export const Togglable = Template.bind({})
Togglable.args = {
    appear: false,
    on: true
}