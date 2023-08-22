import React from 'react';
import { StoryFn, Meta, StoryObj } from '@storybook/react';
import { MenuBar, BasicHamburger } from '../../components';

const meta: Meta<typeof MenuBar> = {
    title: '@lbui/Navigation/MenuBar',
    component: MenuBar,
}
export default meta
type Story = StoryObj<typeof MenuBar>

const Template: StoryFn<typeof MenuBar> = (args) => (
    <MenuBar {...args} >
        <BasicHamburger />
    </MenuBar>
);

export const Bar: Story = Template.bind({})
Bar.args = {
    className: "test"
}
