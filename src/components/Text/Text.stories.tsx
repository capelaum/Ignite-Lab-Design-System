import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '.'

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Span',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<TextProps>

export const Small: StoryObj<TextProps> = {
  args: {
    size: 'sm',
  },
}

export const Default: StoryObj<TextProps> = {
  args: {
    size: 'md',
  },
}

export const Large: StoryObj<TextProps> = {
  args: {
    size: 'lg',
  },
}

export const CustomComponent: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: <p>Paragraph</p>,
  },
  argTypes: {
    children: {
      table: { disable: true },
    },
  },
}
