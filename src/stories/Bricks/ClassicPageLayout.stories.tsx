import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ClassicPageLayout } from '../../components';

export default {
    title: '@lbui/Bricks/ClassicPageLayout',
    component: ClassicPageLayout,
    argTypes: {
        className: {
            description: "Class applied to the root component"
        },
        menuClass: {
            description: "Class applied to the menu component"
        },
        bodyClass: {
            description: "Class applied to the body component"
        },
        footerClass: {
            description: "Class applied to the footer component"
        },
        menu: {
            description: "Element passed to menu section",
        },
        footer: {
            description: "Element passed to footer section",
        },
        maxWidth: {
            description: "Maximum width of root component in px",
        },
        options: {
            description: "Additional options to component"
        }
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
