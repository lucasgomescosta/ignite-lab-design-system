import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx'
import { InputHTMLAttributes, ReactNode } from 'react';



export interface TextInputRootProps {
  children: ReactNode
}

function TextInputRoot({ children }: TextInputRootProps) {
  return (
    <div className="flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300">
      {children}
    </div>
  )
}

export interface TextInpuIconProps {
  children: ReactNode
}

function TextInputIcon({children}: TextInpuIconProps) {
  return (
    <Slot className="w-6 h-6 text-gray-400">
      {children}
    </Slot>
  )
}

export interface TextInputInputProps  extends InputHTMLAttributes<HTMLInputElement>{}

function TextInputInput(props: TextInputInputProps){
  return (
      <input 
        className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none"
        {...props}
      />
  )
}

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon
}