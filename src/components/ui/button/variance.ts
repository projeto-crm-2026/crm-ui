import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
  [
    'rounded-sm',
    'duration-300',
    'justify-center',
    'transition-all',
    'items-center',
    'gap-2',
    'disabled:cursor-not-allowed',
    'h-fit'
  ],
  {
    variants: {
      variant: {
        primary: [
          'font-medium',
          'text-slate-50',
          'bg-neutral-700',
          'lg:hover:brightness-125',
          'flex',
          'font-normal',
          'py-2',
          'px-6',
          'w-full'
        ],
        secondary: [
          'font-medium',
          'text-slate-50',
          'bg-blue-500',
          'lg:hover:brightness-125',
          'flex',
          'font-normal',
          'py-2',
          'px-6',
          'w-full'
        ],
        outlineWhite: [
          'font-medium',
          'border',
          'border-slate-50',
          'bg-transparent',
          'text-slate-50',
          'lg:hover:text-slate-700',
          'lg:hover:bg-slate-50',
          'flex',
          'font-normal',
          'py-2',
          'px-4',
          'w-full'
        ],
        outlineBlue: [
          'font-medium',
          'border',
          'border-blue-500',
          'bg-transparent',
          'text-blue-500',
          'lg:hover:text-blue-50',
          'lg:hover:bg-blue-500',
          'flex',
          'font-normal',
          'py-2',
          'px-4',
          'w-full'
        ],
        outlineDark: [
          'font-medium',
          'border',
          'border-neutral-400',
          'lg:hover:bg-neutral-50',
          'text-neutral-500',
          'flex',
          'font-normal',
          'py-2',
          'px-4',
          'w-full'
        ],
        ghostWhite: [
          'font-medium',
          'bg-transparent',
          'text-slate-50',
          'lg:hover:text-slate-700',
          'lg:hover:bg-slate-50',
          'flex',
          'font-normal',
          'py-2',
          'px-6',
          'w-full'
        ],
        ghostDark: [
          'font-medium',
          'bg-transparent',
          'text-neutral-700',
          'lg:hover:bg-neutral-700',
          'lg:hover:text-neutral-50',
          'flex',
          'font-normal',
          'py-2',
          'px-6',
          'w-full'
        ],
        ghost: [],
        link: [
          'text-neutral-700',
          'bg-transparent',
          'lg:hover:underline',
          'py-0',
          'px-0',
          'font-light',
          'inline'
        ],
        onlyIconLight: [
          'rounded-sm',
          'p-1.5',
          'duration-default',
          'text-neutral-400',
          'lg:hover:bg-neutral-100'
        ],
        onlyIconDark: [
          'rounded-sm',
          'p-1.5',
          'duration-default',
          'lg:hover:bg-neutral-600'
        ],
        onlyIconPrimary: [
          'rounded-sm',
          'p-1.5',
          'duration-default',
          'text-neutral-50',
          'bg-neutral-700',
          'lg:hover:brightness-125'
        ]
      },
      size: {
        small: ['text-sm'],
        medium: ['text-base'],
        large: ['text-lg']
      },
      container: {
        fluid: ['lg:w-full'],
        fixed: ['lg:w-fit']
      },
      isLoading: {
        true: [''],
        false: ['']
      },
      isDisabled: {
        true: ['opacity-70', 'cursor-not-allowed', 'pointer-events-none'],
        false: []
      }
    },
    compoundVariants: [
      {
        variant: 'link',
        container: 'fixed'
      }
    ],
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
      container: 'fixed'
    }
  }
)
