import React from 'react'
import { useForm } from 'react-hook-form'
import { StoryFn, Meta } from '@storybook/react'
import { CheckboxSquared } from '../../components'


export default {
    title: '@lbui/Forms/CheckboxSquared',
    component: CheckboxSquared,
    argTypes: {
    }
} as Meta<typeof CheckboxSquared>;

const Template: StoryFn<typeof CheckboxSquared> = (args) => {
    return (
        <CheckboxSquared {...args} />
    )
};

const HookForm: StoryFn<typeof CheckboxSquared> = (args) => {
    const { handleSubmit, register } = useForm({ defaultValues: { input: false } })
    const submit = (data: { input: boolean }) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <CheckboxSquared {...args} {...register("input")} />
            <button style={{ marginTop: "15px" }} type="submit">submit</button>
        </form>
    )
}


export const Default = Template.bind({});
Default.args = {
    label: "label",
    animate: false
}

export const Animated = Template.bind({});
Animated.args = {
    label: "label",
    animate: true,
    clickEffect: false,
}

export const WithClickEffect = Template.bind({})
WithClickEffect.args = {
    label: "label",
    animate: true,
    clickEffect: true,
    styleClass: { click: 'clickEffectClass' }
}

export const ReactHookForm = HookForm.bind({})
ReactHookForm.args = {
    label: "label",
    animate: true,
    clickEffect: true,
    styleClass: { click: 'clickEffectClass' }
}



