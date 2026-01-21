import { type ClassValue, clsx } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'bg-color': [
        'bg-background',
        'bg-foreground',
        'bg-card',
        'bg-popover',
        'bg-primary',
        'bg-secondary',
        'bg-muted',
        'bg-accent',
        'bg-destructive'
      ],
      'text-color': [
        'text-foreground',
        'text-background',
        'text-primary',
        'text-secondary',
        'text-muted',
        'text-accent',
        'text-destructive'
      ],
      'border-color': [
        'border-border',
        'border-input',
        'border-primary',
        'border-secondary',
        'border-accent',
        'border-destructive'
      ]
    }
  }
})

export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs))
}
