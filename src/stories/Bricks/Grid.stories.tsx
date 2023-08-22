import React from 'react';
import { StoryFn, Meta, StoryObj } from '@storybook/react';
import { Grid } from '../../components';

const meta: Meta<typeof Grid> = {
    title: '@lbui/Bricks/Grid',
    component: Grid,
}
export default meta
type Story = StoryObj<typeof Grid>

const Template: StoryFn<typeof Grid> = (args) => (
    <Grid {...args}>
        <div style={{ width: '50px', height: '50px', background: 'rgb(227, 95, 33)' }}>1</div>
        <div style={{ width: '50px', height: '50px', background: 'rgb(227, 95, 33)' }}>2</div>
        <div style={{ width: '50px', height: '50px', background: 'rgb(227, 95, 33)' }}>3</div>
        <div style={{ width: '50px', height: '50px', background: 'rgb(227, 95, 33)' }}>4</div>
        <div style={{ width: '50px', height: '50px', background: 'rgb(227, 95, 33)' }}>5</div>
        <div style={{ width: '50px', height: '50px', background: 'rgb(227, 95, 33)' }}>6</div>
        <div style={{ width: '50px', height: '50px', background: 'rgb(227, 95, 33)' }}>7</div>
    </Grid>
);


export const Default: Story = Template.bind({})
Default.args = {

};
