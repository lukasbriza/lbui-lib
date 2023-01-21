import React, { useContext } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PopUpProvider, PopUpContext } from '../../components';
import { PopUpType } from '../../components/bricks/PopUp/types/model';

export default {
    title: '@lbui/Bricks/PopUp',
    component: PopUpProvider,
} as ComponentMeta<typeof PopUpProvider>;

const Template: ComponentStory<any> = (args: any) => {
    return (
        <section style={{ height: '100vh', width: '100vw', position: 'relative' }}>
            <PopUpProvider>
                <Children args={args} />
            </PopUpProvider>
        </section>
    )
};

const Children = (props) => {
    const context = useContext(PopUpContext);
    const { args } = props


    const handleClick = (type: PopUpType) => {
        switch (type) {
            case PopUpType.SUCCESS:
                context.show({ type: PopUpType.SUCCESS, timeoutOption: { timeoutLine: true } })
                break;
            case PopUpType.ERROR:
                context.show({ type: PopUpType.ERROR, timeoutOption: { timeoutLine: true } })
                break;
            case PopUpType.INFO:
                context.show({ type: PopUpType.INFO, timeoutOption: { timeoutLine: true } })
                break;
            case PopUpType.WARNING:
                context.show({ type: PopUpType.WARNING, timeoutOption: { timeoutLine: true } })
                break;
        }

    }
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
                <button style={{ width: '100px' }} onClick={() => handleClick(PopUpType.SUCCESS)}>
                    Success
                </button>
                <button style={{ width: '100px' }} onClick={() => handleClick(PopUpType.WARNING)}>
                    Warning
                </button>
                <button style={{ width: '100px' }} onClick={() => handleClick(PopUpType.INFO)}>
                    Info
                </button>
                <button style={{ width: '100px' }} onClick={() => handleClick(PopUpType.ERROR)}>
                    Error
                </button>
            </div>

        </div>
    )
}

export const Default = Template.bind({});

