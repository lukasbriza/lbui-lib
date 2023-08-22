import React from 'react';
import { StoryFn, Meta, StoryObj } from '@storybook/react';
import { PictureCard } from '../../components';

const meta: Meta<typeof PictureCard> = {
    title: '@lbui/Bricks/PictureCard',
    component: PictureCard
}
export default meta
type Story = StoryObj<typeof PictureCard>

const Template: StoryFn<typeof PictureCard> = (args) => (
    <PictureCard style={{ width: '200px' }} {...args} />
);


export const Default: Story = Template.bind({})
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