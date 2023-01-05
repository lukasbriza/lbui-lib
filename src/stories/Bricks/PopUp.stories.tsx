import React, { useContext } from 'react';
import { uniqueId } from 'lodash'
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PopUpProvider, PopUpContext } from '../../components';

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


    const handleClick = () => {
        context.show({ hookId: uniqueId('modal') })
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

