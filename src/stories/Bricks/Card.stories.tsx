import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Card } from '../../components';

export default {
    title: '@lbui/Bricks/Card',
    component: Card,
    argTypes: {
        body: {
            description: "Element passed as body of card."
        },
        description: {
            description: "Element passed as description of card."
        },
        elevation: {
            description: "Define elevation of card"
        },
        className: {
            description: "Add custom class to component root"
        },
        square: {
            description: "Define squared or sharp corners"
        }
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
export const StringBody = Template.bind({})
StringBody.args = {
    body: "StringBody"
}