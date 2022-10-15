import { Meta, StoryObj } from '@storybook/react'
import { Envelope, Lock } from 'phosphor-react'
import { TextInput, TextInputRootProps } from '.'

export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
  args: {
    children: [<TextInput.Input placeholder="Placeholder" />],
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<TextInputRootProps>

export const NoIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: [<TextInput.Input type="text" placeholder="Placeholder" />],
  },
}

export const Email: StoryObj<TextInputRootProps> = {
  args: {
    children: [
      <TextInput.Icon>
        <Envelope size={24} />
      </TextInput.Icon>,
      <TextInput.Input type="email" placeholder="Placeholder" />,
    ],
  },
}

export const Password: StoryObj<TextInputRootProps> = {
  args: {
    children: [
      <TextInput.Icon>
        <Lock size={24} />
      </TextInput.Icon>,
      <TextInput.Input type="password" placeholder="Placeholder" />,
    ],
  },
}
