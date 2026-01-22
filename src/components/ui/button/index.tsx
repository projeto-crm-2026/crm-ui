'use client'

import * as React from 'react'
import { createElement } from 'react'

import { getButtonElementType } from '@/utils/get-button-element-type'

import { buttonVariants } from '../button/variance'
import { Spin } from '../spin'
import type { ButtonProps } from './types'

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size,
      container,
      className,
      children,
      isLoading,
      disabled,
      icon = null,
      ...props
    },
    ref
  ) => {
    const spinShouldBeDark =
      variant?.includes('dark') ||
      variant?.includes('primary') ||
      variant?.includes('tertiary')

    const spin = <Spin variant={spinShouldBeDark ? 'dark' : 'light'} />

    return createElement(
      getButtonElementType(props),
      {
        ref,
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
)

Button.displayName = 'Button'
