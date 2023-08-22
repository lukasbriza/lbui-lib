import React from 'react';
import { StoryFn, Meta, StoryObj } from '@storybook/react';
import { Card } from '../../components';

const meta: Meta<typeof Card> = {
    title: '@lbui/Bricks/Card',
    component: Card,
}
export default meta
type Story = StoryObj<typeof Card>

const Template: StoryFn<typeof Card> = (args) => (
    <Card {...args} />
);


export const WithDescription: Story = Template.bind({})
WithDescription.args = {
    body: <div style={{ width: '200px', height: '100px' }}>Body</div>,
    description: <div style={{ width: '200px', height: '50px' }}>Description</div>
}
export const OnlyBody: Story = Template.bind({})
OnlyBody.args = {
    body: <div style={{ width: '100px', height: '100px' }}>Body</div>
}
export const StringBody: Story = Template.bind({})
StringBody.args = {
    body: "StringBody"
}