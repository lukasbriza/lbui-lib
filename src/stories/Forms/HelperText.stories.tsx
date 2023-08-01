import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { HelperText, FilledTextField } from '../../components'


export default {
    title: '@lbui/Forms/HelperText',
    component: HelperText,
    argTypes: {
    }
} as ComponentMeta<typeof HelperText>;

const Template: ComponentStory<typeof HelperText> = (args) => {
    return (
        <HelperText {...args} >
            <FilledTextField name="FilledInput" label="label" />
        </HelperText>
    )
};



export const Default = Template.bind({});
Default.args = {
    text: "helpertext",
    position: "bottom",
    show: true
}

export const Error = Template.bind({});
Error.args = {
    text: "helpertext",
    error: true,
}

export const Animated = Template.bind({})
Animated.args = {
    text: "helpertext",
    showWithanimation: true
}
