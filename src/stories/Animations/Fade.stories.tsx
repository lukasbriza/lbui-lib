import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Fade } from '../../components';

export default {
    title: '@lbui/Animations/Fade',
    component: Fade,
    argTypes: {
        appear: {
            description: "Allow animation on component mount"
        },
        on: {
            description: "Toggle between fadeIn and fadeOut animations"
        },
        className: {
            description: "Add custom class to component root"
        },
        onEnd: {
            description: "Callback called on end of every animation"
        },
        configIn: {
            description: "Configuration passed to the fadeIn animation"
        },
        configOff: {
            description: "Configuration passed to the fadeOut animation"
        },
        children: {
            description: "Elements passed through component"
        }
    }
} as Meta<typeof Fade>;

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

export const Appear = Template.bind({})

export const Togglable = Template.bind({})
Togglable.args = {
    appear: false,
    on: true
}