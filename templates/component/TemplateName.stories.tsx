import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { TemplateName } from '../../components';

export default {
    title: '@lbui/folder/TemplateName',
    component: TemplateName,
    argTypes: {
    }
} as Meta<typeof TemplateName>;

const Template: StoryFn<typeof TemplateName> = (args) => (<TemplateName />);