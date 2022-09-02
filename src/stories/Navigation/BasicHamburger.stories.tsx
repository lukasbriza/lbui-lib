import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BasicHamburger } from '../../components';

export default {
    title: '@lbui/Navigation/BasicHamburger',
    component: BasicHamburger,
    argTypes: {
        show: {
            description: "Apply show or hide class on element",
        },
        color: {
            description: "Define color of lines"
        },
        lineType: {
            description: "Make lines sharp or rounded"
        },
        className: {
            description: "Apply custom class to the root of ocmponent"
        },
        onClick: {
            description: "Callback called after you click on element"
        },
        prohibitAnimation: {
            description: "Turn off animations, you can define them by yourself"
        }

    }
} as ComponentMeta<typeof BasicHamburger>;

const Template: ComponentStory<typeof BasicHamburger> = (args) => <BasicHamburger {...args} />;

export const Hamburger = Template.bind({})
