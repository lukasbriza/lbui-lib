import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { ArrowShape } from '../../components';

export default {
    title: '@lbui/Shapes/ArrowShape',
    component: ArrowShape,
    argTypes: {
        className: {
            description: "Apply custom class to the root of the component",
        },
        lineWidth: {
            description: " Apply width in px to line width"
        },
        lineHeight: {
            description: " Apply height in px to line height"
        },
        rounded: {
            description: "Define if corners are rounded"
        },
        color: {
            description: "Define backgorund color of component"
        }
    }
} as Meta<typeof ArrowShape>;

const Template: StoryFn<typeof ArrowShape> = (args) => (<ArrowShape {...args} />);

export const Default = Template.bind({})
