import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Underlining } from '../../components';

export default {
    title: '@lbui/Animations/Underlining',
    component: Underlining,
    argTypes: {
        on: {
            description: "Toggle between fadeIn and fadeOut animations"
        },
        className: {
            description: "Add custom class to component root"
        },
        lineClass: {
            description: "Add custom class to line component"
        },
        children: {
            description: "Elements passed through component"
        },
        hoverable: {
            description: "Define, if animation is played on hover action"
        },
        origin: {
            description: "Sets the origin of animation"
        },
        stretchConfig: {
            description: "Configuration of stretch animation"
        },
        shrinkConfig: {
            description: "Configuration of shrink animation"
        }
    }
} as Meta<typeof Underlining>;

const Template: StoryFn<typeof Underlining> = (args) => (<Underlining {...args}><div>Component</div></Underlining>);

export const Hoverable = Template.bind({})
Hoverable.args = {
    hoverable: true
}
export const NotHoverable = Template.bind({})
NotHoverable.args = {
    hoverable: false,
    on: false
}
