import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TemplateName } from '../../components';

export default {
    title: '@lbui/folder/TemplateName',
    component: TemplateName,
    argTypes: {
    }
} as ComponentMeta<typeof TemplateName>;

const Template: ComponentStory<typeof TemplateName> = (args) => (<TemplateName />);