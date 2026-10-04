import type { CSSProperties, ReactNode } from 'react'
import { abs } from '@/lib/abs'

type Vars = CSSProperties & Record<`--${string}`, string>


interface DropProps {
  d: string
  f: string
  style: CSSProperties
  children: ReactNode
}

/** Item da colagem: cai do topo e flutua. */
export function Drop({ d, f, style, children }: DropProps) {
  const vars: Vars = { '--d': d, '--f': f, position: 'absolute', ...style }
  return (
    <div className="drop" aria-hidden="true" style={vars}>
      {children}
    </div>
  )
}

interface PolaroidProps {
  d: string
  f: string
  left: string
  top: string
  width: number
  side: number
  bottom: number
  rotate: string
  shadow: number
  z: number
  bg?: string
  photoHeight: number
  photoBg: string
  caption: string
  captionLeft?: number
  captionBottom?: number
  captionSize?: number
  captionTilt?: string
  children: ReactNode
}

export function Polaroid(p: PolaroidProps) {
  return (
    <Drop
      d={p.d}
      f={p.f}
      style={{
        left: p.left,
        top: p.top,
        width: `${p.width}cqw`,
        padding: `${p.side}cqw ${p.side}cqw ${p.bottom}cqw`,
        background: p.bg ?? '#F5F0E5',
        rotate: p.rotate,
        boxShadow: `0 1.2cqw 2.6cqw rgba(50,30,10,${p.shadow})`,
        zIndex: p.z,
      }}
    >
      <div style={{ position: 'relative', height: `${p.photoHeight}cqw`, background: p.photoBg, overflow: 'hidden' }}>
        {p.children}
      </div>
      <div
        style={abs({
          left: `${p.captionLeft ?? 1.2}cqw`,
          bottom: `${p.captionBottom ?? 0.7}cqw`,
          fontSize: `${p.captionSize ?? 0.95}cqw`,
          color: '#4A4038',
          transform: p.captionTilt ? `rotate(${p.captionTilt})` : undefined,
        })}
      >
        {p.caption}
      </div>
    </Drop>
  )
}

interface StampProps {
  d: string
  f: string
  left: string
  top: string
  width: number
  ratio: string
  rotate: string
  z: number
  bg: string
  ink: string
  label: string
  glyph: string
  glyphSize: number
  price: string
  labelSize?: number
  labelSpacing?: boolean
  vPad?: number
  outline?: { color: string; width: number; offset: number }
}

export function Stamp(p: StampProps) {
  const labelSize = p.labelSize ?? 0.8
  return (
    <Drop
      d={p.d}
      f={p.f}
      style={{
        left: p.left,
        top: p.top,
        width: `${p.width}cqw`,
        aspectRatio: p.ratio,
        padding: '0.75cqw',
        background: 'radial-gradient(circle, transparent 0 0.3cqw, #F6F1E6 0.34cqw) -0.45cqw -0.45cqw / 0.9cqw 0.9cqw',
        rotate: p.rotate,
        filter: 'drop-shadow(0 0.6cqw 0.9cqw rgba(40,25,10,.25))',
        zIndex: p.z,
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          background: p.bg,
          border: '0.3cqw solid #F6F1E6',
          outline: p.outline ? `${p.outline.width}cqw solid ${p.outline.color}` : undefined,
          outlineOffset: p.outline ? `${p.outline.offset}cqw` : undefined,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: `${p.vPad ?? 0.9}cqw 0.4cqw`,
          color: p.ink,
        }}
      >
        <span style={{ fontSize: `${labelSize}cqw`, letterSpacing: '0.1em' }}>{p.label}</span>
        <span style={{ fontFamily: 'serif', fontSize: `${p.glyphSize}cqw`, lineHeight: 1 }}>{p.glyph}</span>
        <span style={{ fontSize: `${labelSize}cqw`, fontWeight: 700 }}>{p.price}</span>
      </div>
    </Drop>
  )
}
