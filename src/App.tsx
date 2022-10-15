import '@/styles/global.css'
import { Heading } from './components/Heading'
import { Logo } from './components/Logo'
import { Text } from './components/Text'

export function App() {
  return (
    <div className="w-screen h-screen bg-gray-900 flex items-center justify-center text-gray-100">
      <header className="flex flex-col items-center">
        <Logo />

        <Heading size="lg" className="mt-4 mb-2">
          Ignite Lab
        </Heading>

        <Text size="lg" className="text-gray-400">
          Faça login e comece a usar!
        </Text>
      </header>
    </div>
  )
}
