import React from 'react';
import { StoryFn, Meta, StoryObj } from '@storybook/react';
import { SquareButton } from '../../components/buttons/SquareButton/SquareButton';


const meta: Meta<typeof SquareButton> = {
  title: '@lbui/Buttons/SquareButton',
  component: SquareButton,
}
export default meta
type Story = StoryObj<typeof SquareButton>

const Template: StoryFn<typeof SquareButton> = (args) => <SquareButton {...args} />;

export const Button: Story = Template.bind({});
Button.args = {
  label: "Button",
  onClick: (e: React.BaseSyntheticEvent) => { console.log(e) },
  size: "large",
  textColor: "white"
}