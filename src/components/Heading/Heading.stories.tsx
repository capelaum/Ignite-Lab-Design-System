import { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '.'

export default {
  title: 'Components/Heading',
  component: Heading,
  args: {
    children: 'Heading',
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
} as Meta<HeadingProps>

export const Small: StoryObj<HeadingProps> = {
  args: {
    size: 'sm',
  },
}

export const Default: StoryObj<HeadingProps> = {
  args: {
    size: 'md',
  },
}

export const Large: StoryObj<HeadingProps> = {
  args: {
    size: 'lg',
  },
}

export const CustomComponent: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    children: <h1>H1 Heading</h1>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
}
