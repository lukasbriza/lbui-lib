import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BulletShape } from '../../components';

export default {
    title: '@lbui/Shapes/BulletShape',
    component: BulletShape,
    argTypes: {
        className: {
            description: "Apply custom class to the root of ocmponent"
        },
        size: {
            description: "Size applied to width and height of component"
        },
        type: {
            description: "Change shape to diamond,square or round"
        }
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

