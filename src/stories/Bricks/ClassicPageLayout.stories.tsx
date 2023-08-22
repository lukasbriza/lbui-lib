import React from 'react';
import { StoryFn, Meta, StoryObj } from '@storybook/react';
import { ClassicPageLayout } from '../../components';

const meta: Meta<typeof ClassicPageLayout> = {
    title: '@lbui/Bricks/ClassicPageLayout',
    component: ClassicPageLayout,
}
export default meta
type Story = StoryObj<typeof ClassicPageLayout>

const Template: StoryFn<typeof ClassicPageLayout> = (args) => (
    <ClassicPageLayout {...args}>
        <div style={{ height: '200vh' }}>Children</div>
    </ClassicPageLayout>
);

export const Default: Story = Template.bind({})
Default.args = {
    menu: <div>Menu</div>,
    footer: <div>Footer</div>,
    options: { stickyMenu: true, hideMenuOnScroll: true }
}
