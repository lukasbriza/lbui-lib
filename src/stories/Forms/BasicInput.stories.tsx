import React from 'react';
import { BasicInput } from '../../components';
import { Meta, StoryFn } from '@storybook/react';

export default {
    title: "@lbui/Forms/BasicInput",
    component: BasicInput,
} as Meta<typeof BasicInput>;

const Template: StoryFn<typeof BasicInput> = (args) => {
    return <BasicInput {...args} onStateChange={(state) => console.log(state)} />
}

export const Default = Template.bind({})
Default.args = {
    styleClass: {
        focusInput: "focusedInput",
        fillInput: "filledInput"
    },
    label: "Label",
}