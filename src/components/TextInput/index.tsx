import { Slot } from '@radix-ui/react-slot'
import { InputHTMLAttributes, ReactNode } from 'react'

export interface TextInputRootProps {
  children: ReactNode
}

export interface TextInputIconProps {
  children: ReactNode
}

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputRoot({ children }: TextInputRootProps) {
  return (
    <div className="flex items-center h-12 gap-3 px-4 py-3 rounded bg-gray-800  focus-within:ring-2 ring-cyan-300">
      {children}
    </div>
  )
}

function TextInputIcon({ children }: TextInputIconProps) {
  return <Slot className="w-6 h-6 text-gray-400">{children}</Slot>
}

export function TextInputInput(props: TextInputInputProps) {
  return (
    <input
      {...props}
      className="bg-transparent flex-1 text-gray-100 outline-none text-xs placeholder:text-gray-400"
    />
  )
}

TextInputIcon.displayName = 'TextInput.Root'
TextInputIcon.displayName = 'TextInput.Icon'
TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
}
