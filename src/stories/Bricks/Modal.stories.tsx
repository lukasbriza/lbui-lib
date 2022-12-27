import React, { useContext } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ModalProvider, ModalContext } from '../../components/bricks/Modal/ModalProvider';


export default {
    title: '@lbui/Bricks/Modal',
    component: ModalProvider,
} as ComponentMeta<typeof ModalProvider>;

const Template: ComponentStory<any> = (args: any) => {
    return (
        <section style={{ height: '100vh', width: '100vw', position: 'relative' }}>
            <ModalProvider>
                <Children args={args} />
            </ModalProvider>
        </section>
    )
};

const Children = (props) => {
    const context = useContext(ModalContext);
    const { args } = props

    const handleClick = () => {
        context.show({
            header: 'Story header',
            buttonText: 'Story Button',
            text: 'Story text....',
            onClick: (e) => { console.log(e); context.close() },
            ...args
        })
    }
    return (
        <div
            style={{
                height: '100%',
                width: '100%',
                position: 'relative',
                background: '#976734'
            }}
        >
            <button
                onClick={handleClick}
                style={{
                    position: 'relative',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%,-50%)'
                }}>
                Modal
            </button>
        </div>
    )
}

export const Default = Template.bind({});

export const Transitioning = Template.bind({});
Transitioning.args = {
    transition: true
}

export const OutsideClick = Template.bind({});
OutsideClick.args = {
    transition: true,
    closeOnOutsideClick: true
}
