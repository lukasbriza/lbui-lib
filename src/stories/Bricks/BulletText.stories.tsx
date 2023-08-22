import React from 'react';
import { StoryFn, Meta, StoryObj } from '@storybook/react';
import { BulletText } from '../../components';

const meta: Meta<typeof BulletText> = {
    title: '@lbui/Bricks/BulletText',
    component: BulletText
}
export default meta
type Story = StoryObj<typeof BulletText>

const Template: StoryFn<typeof BulletText> = (args) => (
    <BulletText {...args}>BulletText</BulletText>
);


export const Default: Story = Template.bind({})
Default.args = {

}
