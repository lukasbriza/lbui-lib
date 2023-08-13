import React from 'react';
import { TimeInput } from '../../components';
import { Meta, StoryFn } from '@storybook/react';

export default {
    title: '@lbui/Forms/TimeInput',
    component: TimeInput
} as Meta<typeof TimeInput>

const Template: StoryFn<typeof TimeInput> = (args) => <TimeInput {...args} />

export const Default = Template.bind({})
Default.args = {
    name: "TimeFrom",
    label: "Od"
}