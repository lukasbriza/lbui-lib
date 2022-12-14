import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Paper } from '../../components';

export default {
    title: '@lbui/Bricks/Paper',
    component: Paper,
    argTypes: {
        className: {
            description: "Add custom class to component root"
        },
        elevation: {
            description: "Level of surface elevation"
        },
        square: {
            description: "Define corners of element",
        },
    }
} as ComponentMeta<typeof Paper>;

const Template: ComponentStory<typeof Paper> = (args) => (
    <Paper {...args} >
        <div
            style={{
                width: '100px',
                height: '100px',
                textAlign: 'center',
                lineHeight: '100px'
            }}
        >
            Element
        </div>
    </Paper>
);

export const Default = Template.bind({})
