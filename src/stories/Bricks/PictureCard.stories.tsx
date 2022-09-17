import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PictureCard } from '../../components';

export default {
    title: '@lbui/Bricks/PictureCard',
    component: PictureCard,
    argTypes: {
    }
} as ComponentMeta<typeof PictureCard>;

const Template: ComponentStory<typeof PictureCard> = (args) => (
    <PictureCard style={{ width: '200px' }} {...args} />
);


export const Default = Template.bind({})
Default.args = {
    src: '/testimg.webp',
    body: <div style={{
        position: 'relative',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        color: 'white',
        textAlign: 'center'
    }}>Content
    </div>
}