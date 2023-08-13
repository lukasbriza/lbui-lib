import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { TypographyProvider, Typography } from '../../components';

export default {
    title: '@lbui/Bricks/Typography',
    component: TypographyProvider,
    argTypes: {
    }
} as Meta<typeof TypographyProvider>;

const Template: StoryFn<typeof TypographyProvider> = (args) => (<TypographyProvider {...args}></TypographyProvider>);


export const Default = Template.bind({})
Default.args = {
    children: [
        <Typography type="h1" variant={['bold']}>h1. Header</Typography>,
        <Typography type="h2">h2. Header</Typography>,
        <Typography type="h3">h3. Header</Typography>,
        <Typography type="h4">h4. Header</Typography>,
        <Typography type="h5">h5. Header</Typography>,
        <Typography type="h6">h6. Header</Typography>,
        <Typography type="subtitle1">subtitle1</Typography>,
        <Typography type="subtitle2">subtitle2</Typography>,
        <Typography type="body1">body1</Typography>,
        <Typography type="body2">body2</Typography>,
        <Typography type="buttonText">buttonText</Typography>,
    ]
}

export const Variants = Template.bind({})
Variants.args = {
    children: [
        <Typography type="h1" variant={["default"]}>h1.default</Typography>,
        <Typography type="h1" variant={["bold"]}>h1.bold</Typography>,
        <Typography type="h1" variant={["underline"]}>h1.underline</Typography>,
        <Typography type="h1" variant={["italic"]}>h1.italic</Typography>,
    ]
}

export const Sizes = Template.bind({})
Sizes.args = {
    children: [
        <Typography type="h1" size="small">h1.small</Typography>,
        <Typography type="h1" size="medium">h1.medium</Typography>,
        <Typography type="h1" size="large">h1.large</Typography>,
    ]
}
