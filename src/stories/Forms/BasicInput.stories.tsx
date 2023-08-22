import React from 'react';
import { BasicInput } from '../../components';
import { Meta, StoryFn, StoryObj } from '@storybook/react';

const meta: Meta<typeof BasicInput> = {
    title: "@lbui/Forms/BasicInput",
    component: BasicInput,
}
export default meta
type Story = StoryObj<typeof BasicInput>

const Template: StoryFn<typeof BasicInput> = (args) => {
    return <BasicInput {...args} onStateChange={(state) => console.log(state)} />
}

export const Default: Story = Template.bind({})
Default.args = {
    styleClass: {
        focusInput: "focusedInput",
        fillInput: "filledInput"
    },
    label: "Label",
}