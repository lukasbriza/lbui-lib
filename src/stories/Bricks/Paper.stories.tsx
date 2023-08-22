import React from 'react';
import { StoryFn, Meta, StoryObj } from '@storybook/react';
import { Paper } from '../../components';

const meta: Meta<typeof Paper> = {
    title: '@lbui/Bricks/Paper',
    component: Paper,
}
export default meta
type Story = StoryObj<typeof Paper>

const Template: StoryFn<typeof Paper> = (args) => (
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

export const Default: Story = Template.bind({})
