import React from 'react';
import { BasicInput } from '../../components';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: "@lbui/Forms/BasicInput",
    component: BasicInput,
} as ComponentMeta<typeof BasicInput>;

const Template: ComponentStory<typeof BasicInput> = (args) => {
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