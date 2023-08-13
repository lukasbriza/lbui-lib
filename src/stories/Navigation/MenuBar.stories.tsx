import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { MenuBar, BasicHamburger } from '../../components';

export default {
    title: '@lbui/Navigation/MenuBar',
    component: MenuBar,
    argTypes: {
        children: {
            description: "Nodes passed to the component"
        },
        className: {
            description: "Apply custom class to the root of ocmponent"
        },
    }
} as Meta<typeof MenuBar>;

const Template: StoryFn<typeof MenuBar> = (args) => (
    <MenuBar {...args} >
        <BasicHamburger />
    </MenuBar>
);

export const Bar = Template.bind({})
Bar.args = {
    className: "test"
}
