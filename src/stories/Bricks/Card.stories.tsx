import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Card } from '../../components';

export default {
    title: '@lbui/Bricks/Card',
    component: Card,
    argTypes: {
    }
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
    <Card {...args} />
);


export const WithDescription = Template.bind({})
WithDescription.args = {
    body: <div style={{ width: '200px', height: '100px' }}>Body</div>,
    description: <div style={{ width: '200px', height: '50px' }}>Description</div>
}
export const OnlyBody = Template.bind({})
OnlyBody.args = {
    body: <div style={{ width: '100px', height: '100px' }}>Body</div>
}