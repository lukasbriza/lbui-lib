import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { RoundBadge } from '../../components';
import { Icon } from '../../lib'

export default {
    title: '@lbui/Navigation/RoundBadge',
    component: RoundBadge,
    argTypes: {
    }
} as Meta<typeof RoundBadge>;

const Template: StoryFn<typeof RoundBadge> = (args) => <RoundBadge {...args} />

export const Default = Template.bind({})
Default.args = {
    defaultNode: <Icon />,
    hoverNode: <div>HoverNode</div>,
    transition: false,
}
