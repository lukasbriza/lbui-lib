import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SquareButton } from '../../components/buttons/SquareButton/SquareButton';
import { buttonsBaseDescription } from './buttonsBaseDescription'

export default {
  title: '@lbui/Buttons/SquareButton',
  component: SquareButton,
  argTypes: {
    ...buttonsBaseDescription
  }
} as ComponentMeta<typeof SquareButton>;

const Template: ComponentStory<typeof SquareButton> = (args) => <SquareButton {...args} />;

export const Button = Template.bind({});
Button.args = {
  label: "Button",
  onClick: (e: React.BaseSyntheticEvent) => { console.log(e) },
  size: "large",
  textColor: "white"
}