import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MenuList, MenuItem } from '../../components';

export default {
    title: '@lbui/Navigation/MenuList',
    component: MenuList,
    argTypes: {
        children: {
            description: "React node passed through component"
        },
        orientation: {
            description: "Define orientation of MenuItems",
        },
        className: {
            description: "Custom class applied to MenuList"
        }
    }
} as ComponentMeta<typeof MenuList>;

const Template: ComponentStory<typeof MenuList> = (args) => (
    <MenuList {...args} >
        <MenuItem label="MenuItem" underliner={true} />
        <MenuItem label="MenuItem" underliner={true} />
        <MenuItem label="MenuItem" underliner={true} />
        <MenuItem label="MenuItem" underliner={true} />
    </MenuList>
);

export const Default = Template.bind({})
