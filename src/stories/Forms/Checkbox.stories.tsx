import React from 'react'
import { StoryFn, Meta, StoryObj } from '@storybook/react'
import { Checkbox } from '../../components'
import { useForm } from 'react-hook-form'

const meta: Meta<typeof Checkbox> = {
    title: '@lbui/Forms/Checkbox',
    component: Checkbox,
}
export default meta
type Story = StoryObj<typeof Checkbox>

const Template: StoryFn<typeof Checkbox> = (args) => <Checkbox {...args} />;

const HookForm: StoryFn<typeof Checkbox> = (args) => {
    const { handleSubmit, register, watch, formState: { defaultValues } } = useForm({ defaultValues: { input: true } })
    const values = watch()
    console.log(values)
    const submit = (data: { input: boolean }) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <Checkbox {...args} {...register("input")} defaultChecked={defaultValues?.input} />
            <button style={{ marginTop: "15px" }} type="submit">submit</button>
        </form>
    )
}


export const Default: Story = Template.bind({});
Default.args = {
    label: "label",
    defaultChecked: true
}

export const ReactHookForm: Story = HookForm.bind({})
ReactHookForm.args = {
    label: "label",
    clickEffect: true,
    styleClass: { click: 'clickEffectClass' }
}

