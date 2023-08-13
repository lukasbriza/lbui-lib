import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Turn } from '../../components';

export default {
    title: '@lbui/Animations/Turn',
    component: Turn,
    argTypes: {
        appear: {
            description: "Allow animation on component mount"
        },
        on: {
            description: "Toggle between turnOn and turnOff animations"
        },
        className: {
            description: "Add custom class to component root"
        },
        onEnd: {
            description: "Callback called on end of every animation"
        },
        configOn: {
            description: "Configuration passed to the turnOn animation"
        },
        configOff: {
            description: "Configuration passed to the turnOff animation"
        },
        children: {
            description: "Elements passed through component"
        }
    }
} as Meta<typeof Turn>;

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

export const Togglable = Template.bind({})
Togglable.args = {
    on: false,
    to: 360,
    base: 0,
    appear: false,
}
export const Appear = Template.bind({})
Appear.args = {

    appear: true,
    on: true,
    to: 360,
    base: 0,
}