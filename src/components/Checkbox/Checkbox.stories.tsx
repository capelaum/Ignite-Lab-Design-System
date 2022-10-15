import { Meta, StoryObj } from '@storybook/react'
import { Checkbox, CheckboxProps } from '.'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {
    children: 'Checkbox',
    text: 'Checkbox',
  },
  argTypes: {},
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {}
