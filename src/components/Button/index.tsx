import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { ReactNode } from 'react'

export interface ButtonProps {
  children: ReactNode
  asChild: boolean
}

export function Button({ children, asChild }: ButtonProps) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      className={clsx(
        'px-4 py-3 text-black bg-cyan-500 hover:bg-cyan-300 transition-colors rounded font-semibold w-full text-sm focus:ring-2 ring-gray-200'
      )}
    >
      {children}
    </Comp>
  )
}
