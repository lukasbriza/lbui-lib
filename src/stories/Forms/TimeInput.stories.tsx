import React, { useEffect } from 'react';
import { TimeInput } from '../../components';
import { Meta, StoryFn } from '@storybook/react';
import { useForm } from 'react-hook-form';

export default {
    title: '@lbui/Forms/TimeInput',
    component: TimeInput
} as Meta<typeof TimeInput>

const Template: StoryFn<typeof TimeInput> = (args) => {
    const { name, ...otherargs } = args
    const { watch, register } = useForm()
    const val = watch(name)

    useEffect(() => { console.log(val) }, [val])

    return <TimeInput {...register(name)} {...otherargs} />
}

export const Default = Template.bind({})
Default.args = {
    name: "TimeFrom",
    label: "Od"
}