import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArrowShape } from '../../components';

export default {
    title: '@lbui/Shapes/ArrowShape',
    component: ArrowShape,
    argTypes: {

    }
} as ComponentMeta<typeof ArrowShape>;

const Template: ComponentStory<typeof ArrowShape> = (args) => (<ArrowShape {...args} />);

export const Default = Template.bind({})
