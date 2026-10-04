import type { CSSProperties } from 'react'

/** Posiciona um filho absolutamente (valores em cqw vêm do contêiner do hero). */
export const abs = (s: CSSProperties): CSSProperties => ({ position: 'absolute', ...s })
