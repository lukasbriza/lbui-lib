import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { Checkbox } from '../../components'


export default {
    title: '@lbui/Forms/Checkbox',
    component: Checkbox,
    argTypes: {
    }
} as Meta<typeof Checkbox>;

const Template: StoryFn<typeof Checkbox> = (args) => <Checkbox {...args} />;



export const Default = Template.bind({});
Default.args = {
    label: "label"
}

