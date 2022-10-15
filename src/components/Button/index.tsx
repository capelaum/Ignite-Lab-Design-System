import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { ButtonHTMLAttributes, ReactNode } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  asChild?: boolean
  className?: string
}

export function Button({ children, asChild, className, ...rest }: ButtonProps) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      {...rest}
      className={clsx(
        'px-4 py-3 text-black bg-cyan-500 hover:bg-cyan-300 transition-colors rounded font-semibold w-full text-sm focus:ring-2 ring-gray-200',
        className
      )}
    >
      {children}
    </Comp>
  )
}
