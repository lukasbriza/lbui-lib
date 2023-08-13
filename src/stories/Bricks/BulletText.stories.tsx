import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { BulletText } from '../../components';

export default {
    title: '@lbui/Bricks/BulletText',
    component: BulletText,
    argTypes: {
        className: {
            description: 'apply custom class to the root of element'
        },
        bulletClass: {
            description: 'apply custom class to the bullet component'
        },
        bulletSize: {
            description: 'size * 2px applied to the with and height of bullet (default 3)'
        },
        bulletType: {
            description: 'define type of bullet (round|square|diamond)(default round)'
        }
    }
} as Meta<typeof BulletText>;

const Template: StoryFn<typeof BulletText> = (args) => (
    <BulletText {...args}>BulletText</BulletText>
);


export const Default = Template.bind({})
Default.args = {

}
