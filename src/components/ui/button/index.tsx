'use client'

import { createElement } from 'react'

import { getButtonElementType } from '@/utils/get-button-element-type'

import { Spin } from '../spin'
import type { ButtonProps } from './types'
import { buttonVariants } from './variance'

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size,
  container,
  className,
  children,
  isLoading,
  disabled,
  icon = null,
  ...props
}) => {
  const spinShouldBeDark =
    variant?.includes('dark') ||
    variant?.includes('primary') ||
    variant?.includes('tertiary')
  const spin = <Spin variant={spinShouldBeDark ? 'dark' : 'light'} />

  return createElement(
    getButtonElementType({ ...props }),
    {
      className: buttonVariants({
        variant,
        size,
        container,
        isDisabled: disabled,
        className,
        isLoading
      }),
      disabled: isLoading || disabled,
      ...props
    },
    <>
      {isLoading ? spin : icon}
      {children}
    </>
  )
}
