import React from 'react';
import { StoryFn, Meta, StoryObj } from '@storybook/react';
import { MenuList, MenuItem } from '../../components';

const meta: Meta<typeof MenuList> = {
    title: '@lbui/Navigation/MenuList',
    component: MenuList
}
export default meta
type Story = StoryObj<typeof MenuList>

const Template: StoryFn<typeof MenuList> = (args) => (
    <MenuList {...args} >
        <MenuItem label="MenuItem" underliner={true} />
        <MenuItem label="MenuItem" underliner={true} />
        <MenuItem label="MenuItem" underliner={true} />
        <MenuItem label="MenuItem" underliner={true} />
    </MenuList>
);

export const Default: Story = Template.bind({})
