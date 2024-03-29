import React from 'react';
import { StoryFn, Meta, StoryObj } from '@storybook/react';
import { PopUpProvider, usePopUpService } from '../../components';


const meta: Meta<typeof PopUpProvider> = {
    title: '@lbui/Bricks/PopUp',
    component: PopUpProvider,
}
export default meta
type Story = StoryObj<typeof PopUpProvider>

const Template: StoryFn<any> = (args: any) => {
    return (
        <section style={{ height: '100vh', width: '100vw', position: 'relative' }}>
            <PopUpProvider>
                <Children args={args} />
            </PopUpProvider>
        </section>
    )
};

const Children = (props) => {
    const { success, error, info, warning, ids } = usePopUpService()

    return (
        <div
            style={{
                height: '100%',
                width: '100%',
                position: 'relative',
                background: 'grey',

            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    position: 'relative',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%,-50%)'
                }}
            >
                <button style={{ width: '100px' }} onClick={() => success()}>
                    Success
                </button>
                <button style={{ width: '100px' }} onClick={() => warning()}>
                    Warning
                </button>
                <button style={{ width: '100px' }} onClick={() => info()}>
                    Info
                </button>
                <button style={{ width: '100px' }} onClick={() => error()}>
                    Error
                </button>
            </div>
            <div style={{ position: "absolute", left: "10px", bottom: "40px" }}>ID´s:{ids.join(",")}</div>
        </div>
    )
}

export const Default: Story = Template.bind({});
