import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ClassicPageLayout } from '../../components';

export default {
    title: '@lbui/Bricks/ClassicPageLayout',
    component: ClassicPageLayout,
    argTypes: {
        className: {
            description: ""
        },
        menuClass: {
            description: ""
        },
        bodyClass: {
            description: ""
        },
        footerClass: {
            description: ""
        },
        menu: {
            description: "",
        },
        footer: {
            description: "",
        },
        maxWidth: {
            description: "",
        },
    }
} as ComponentMeta<typeof ClassicPageLayout>;

const Template: ComponentStory<typeof ClassicPageLayout> = (args) => (
    <ClassicPageLayout {...args}>
        <div style={{ height: '200vh' }}>Children</div>
    </ClassicPageLayout>
);

export const Default = Template.bind({})
Default.args = {
    menu: <div>Menu</div>,
    footer: <div>Footer</div>,
    options: { stickyMenu: true, hideMenuOnScroll: true }
}
