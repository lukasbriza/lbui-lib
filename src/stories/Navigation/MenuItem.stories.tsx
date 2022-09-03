import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MenuItem } from '../../components';
import { Icon } from '../../lib';

export default {
    title: '@lbui/Navigation/MenuItem',
    component: MenuItem,
    argTypes: {
        label: {
            description: "Text displayed in item"
        },
        iconPosition: {
            description: "Position of added icon against label"
        },
        icon: {
            description: "Added icon"
        }
    }
} as ComponentMeta<typeof MenuItem>;

const Template: ComponentStory<typeof MenuItem> = (args) => (<MenuItem {...args} />);

export const Default = Template.bind({})
Default.args = {
    label: 'MenuItem'
}

export const WithIcon = Template.bind({})
WithIcon.args = {
    label: 'MenuItem',
    iconPosition: 'left',
    icon: <Icon />
}

export const WithUnderliner = Template.bind({})
WithUnderliner.args = {
    label: 'MenuItem',
    underliner: true,
    underlinerOrigin: "center"
}
