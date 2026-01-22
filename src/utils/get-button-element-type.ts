import type { AnchorHTMLAttributes } from 'react'
import type React from 'react'

interface GetButtonElementTypeProps {
  as?: keyof React.JSX.IntrinsicElements
  href?: string
  target?: AnchorHTMLAttributes<HTMLAnchorElement>['target']
}

type ButtonElementType = 'button' | 'a'

export const getButtonElementType = ({
  as = 'button',
  href,
  target
}: GetButtonElementTypeProps): ButtonElementType => {
  if (!href) return as as ButtonElementType

  const isExternal = /^https?:\/\//.test(href)

  if (isExternal || target === '_blank') {
    return 'a'
  }

  return 'button'
}
