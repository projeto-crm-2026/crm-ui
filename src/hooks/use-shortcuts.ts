import type { KeyboardEvent } from 'react'

type Modifiers = {
  meta?: boolean
  shift?: boolean
  ctrl?: boolean
  alt?: boolean
}

export type ShortcutDefinition = {
  keys: string[]
  modifiers?: Modifiers | Modifiers[]
  enabled?: boolean | (() => boolean)
  preventDefault?: boolean
  handler: (event: KeyboardEvent) => void
}

function isModifierMatch(
  event: KeyboardEvent,
  modifiers: Modifiers | Modifiers[] = {}
): boolean {
  if (Array.isArray(modifiers))
    return modifiers.some(modifier => isModifierMatch(event, modifier))

  return (
    event.metaKey === !!modifiers.meta &&
    event.shiftKey === !!modifiers.shift &&
    event.altKey === !!modifiers.alt &&
    event.ctrlKey === !!modifiers.ctrl
  )
}

function isEnabled(shortcut: ShortcutDefinition) {
  if (shortcut.enabled === undefined) return true

  return typeof shortcut.enabled === 'function'
    ? shortcut.enabled()
    : shortcut.enabled
}

export function useShortcuts(definitions: ShortcutDefinition[]) {
  function executeShortcut(event: KeyboardEvent) {
    const matchedShortcut = definitions.find(
      shortcut =>
        isEnabled(shortcut) &&
        shortcut.keys.includes(event.key) &&
        isModifierMatch(event, shortcut.modifiers)
    )

    if (!matchedShortcut) return false

    if (matchedShortcut.preventDefault !== false) event.preventDefault()
    matchedShortcut.handler(event)

    return true
  }

  return {
    executeShortcut
  }
}
