import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RoundBadge } from '../../components';
import { Icon } from '../../lib'

export default {
    title: '@lbui/Navigation/RoundBadge',
    component: RoundBadge,
    argTypes: {
    }
} as ComponentMeta<typeof RoundBadge>;

const Template: ComponentStory<typeof RoundBadge> = (args) => <RoundBadge {...args} />

export const Default = Template.bind({})
Default.args = {
    defaultNode: <Icon />,
    hoverNode: <div>HoverNode</div>,
    transition: false,
}
