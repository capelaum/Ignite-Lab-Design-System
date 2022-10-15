import { Checkbox } from '@radix-ui/react-checkbox'
import { Envelope, Lock } from 'phosphor-react'
import { FormEvent, useState } from 'react'
import { Button } from '../components/Button'
import { Heading } from '../components/Heading'
import { Logo } from '../components/Logo'
import { Text } from '../components/Text'
import { TextInput } from '../components/TextInput'

export function SignIn() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false)

  function handleSignIn(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setIsUserSignedIn(true)
  }

  return (
    <div className="max-w-screen overflow-hidden min-h-screen px-6 py-10 bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      <header className="flex flex-col items-center mb-10">
        <Logo />

        <Heading size="lg" className="mt-4 mb-2">
          Ignite Lab
        </Heading>

        <Text size="lg" className="text-gray-400">
          Faça login e comece a usar!
        </Text>
      </header>

      <form
        onSubmit={handleSignIn}
        className="flex flex-col items-stretch gap-4 w-full max-w-[400px]"
      >
        {isUserSignedIn && <Text>Login realizado!</Text>}
        <label htmlFor="email">
          <Text size="sm" className="font-semibold block mb-3">
            Endereço de e-mail
          </Text>

          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="password">
          <Text size="sm" className="font-semibold block mb-3">
            Sua senha
          </Text>

          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input
              id="password"
              type="password"
              placeholder="********"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Text size="sm" className="text-gray-200">
            Lembrar de mim por 30 dias
          </Text>
        </label>

        <Button className="mt-4" type="submit">
          Entrar na plataforma
        </Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text
          asChild
          className="text-gray-400 underline hover:text-gray-200"
          size="sm"
        >
          <a href="#">Esqueceu sua senha?</a>
        </Text>

        <Text
          asChild
          className="text-gray-400 underline hover:text-gray-200"
          size="sm"
        >
          <a href="#">Não possui conta? Crie uma agora!</a>
        </Text>
      </footer>
    </div>
  )
}
