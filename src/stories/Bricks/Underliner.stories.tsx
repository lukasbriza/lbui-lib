import React from 'react';
import { StoryFn, Meta, StoryObj } from '@storybook/react';
import { Underliner } from '../../components';

const meta: Meta<typeof Underliner> = {
    title: '@lbui/Bricks/Underliner',
    component: Underliner,
}
export default meta
type Story = StoryObj<typeof Underliner>

const Template: StoryFn<typeof Underliner> = (args) => (<Underliner {...args}><div>Element</div></Underliner>);

export const Default: Story = Template.bind({})