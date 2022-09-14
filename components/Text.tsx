import React from 'react'
import { twMerge } from 'tailwind-merge'

type TextProps = {
  children?: React.ReactNode,
  className?: string;
}

export const Text:React.FC<TextProps> = ({ children, className = '' }) => {
  return (
    <p className={twMerge('text-base lg:text-lg text-text font-medium', className)}>
      {children}
    </p>
  )
}