import { expect } from '@storybook/jest'
import { Meta, StoryObj } from '@storybook/react'
import { userEvent, waitFor, within } from '@storybook/testing-library'
import { rest } from 'msw'
import { SignIn } from './SignIn'

export default {
  title: 'Pages/Sign in',
  component: SignIn,
  args: {},
  argTypes: {},
  parameters: {
    msw: {
      handlers: [
        rest.post('/sessions', (req, res, ctx) => {
          return res(
            ctx.json({
              user: {
                id: '1',
                name: 'Luis',
                email: 'luis@email.com',
                created_at: new Date().toISOString(),
              },
            })
          )
        }),
      ],
    },
  },
} as Meta

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    userEvent.type(
      canvas.getByPlaceholderText('Digite seu e-mail'),
      'luis@email.com'
    )

    userEvent.type(canvas.getByPlaceholderText('********'), '12345678')
    userEvent.click(canvas.getByRole('checkbox'))

    userEvent.click(canvas.getByRole('button'))

    await waitFor(() => {
      return expect(canvas.getByText('Login realizado!')).toBeInTheDocument()
    })
  },
}
