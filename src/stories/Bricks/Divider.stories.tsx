import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Divider } from '../../components';

export default {
    title: '@lbui/Bricks/Divider',
    component: Divider,
    argTypes: {
        depth: {
            description: "Define height of component"
        },
        fullWidth: {
            description: "Toggle full width of parent component"
        },
        className: {
            description: "Add custom class to component root"
        },
        width: {
            description: "Define width of ocmponent"
        },
        color: {
            description: "Define color of element",
            control: 'color'
        },
    }
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = (args) => (<Divider {...args} />);

export const Default = Template.bind({})

export const CustomWidth = Template.bind({})
CustomWidth.args = {
    fullWidth: false,
    width: 10,
    depth: 1
}