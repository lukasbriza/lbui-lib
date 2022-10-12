import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BulletShape } from '../../components';

export default {
    title: '@lbui/Shapes/BulletShape',
    component: BulletShape,
    argTypes: {

    }
} as ComponentMeta<typeof BulletShape>;

const Template: ComponentStory<typeof BulletShape> = (args) => (<BulletShape {...args} />);

export const Round = Template.bind({})

export const Diamond = Template.bind({})
Diamond.args = {
    type: 'diamond',
}

export const Square = Template.bind({})
Diamond.args = {
    type: 'square',
}

