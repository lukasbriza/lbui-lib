import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Underliner } from '../../components';

export default {
    title: '@lbui/Bricks/Underliner',
    component: Underliner,
    argTypes: {
        depth: {
            description: "Define height of component"
        },
        fullWidth: {
            description: "Toggle full width of parent component"
        },
        className: {
            description: "Add custom class to component root"
        },
        underlinerClass: {
            description: "Add custom class to undelriner component"
        },
        width: {
            description: "Define width of ocmponent"
        },
        color: {
            description: "Define color of element",
            control: 'color'
        },
    }
} as ComponentMeta<typeof Underliner>;

const Template: ComponentStory<typeof Underliner> = (args) => (<Underliner {...args}><div>Element</div></Underliner>);

export const Default = Template.bind({})