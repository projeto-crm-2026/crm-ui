import { useState } from 'react';

let id = 0;

export function useUid(prefix: string) {
  const [uid] = useState(() => `tui-${prefix}:${++id}`);

  return uid;
}
