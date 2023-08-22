import React from 'react'
import { StoryFn, Meta, StoryObj } from '@storybook/react'
import { HelperText, FilledTextField } from '../../components'

const meta: Meta<typeof HelperText> = {
    title: '@lbui/Forms/HelperText',
    component: HelperText,
}
export default meta
type Story = StoryObj<typeof HelperText>

const Template: StoryFn<typeof HelperText> = (args) => {
    return (
        <HelperText {...args} >
            <FilledTextField name="FilledInput" label="label" />
        </HelperText>
    )
};



export const Default: Story = Template.bind({});
Default.args = {
    text: "helpertext",
    position: "bottom",
    show: true
}

export const Error: Story = Template.bind({});
Error.args = {
    text: "helpertext",
    isError: true,
}

export const Animated: Story = Template.bind({})
Animated.args = {
    text: "helpertext",
    options: { animation: true }
}
