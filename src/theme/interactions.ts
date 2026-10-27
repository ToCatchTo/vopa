import type { SxProps, Theme } from '@mui/material/styles'
import { keyframes } from '@emotion/react'

// Ztmavení klikatelných prvků při najetí myší
export const hoverDarken = {
  transition: 'filter 0.2s ease-out',
  '&:hover': { filter: 'brightness(0.78)' },
} satisfies SxProps<Theme>

// Telefon a e-mail: ztmavení a podtržení
export const hoverContactLink = {
  color: 'inherit',
  textDecoration: 'none',
  textUnderlineOffset: '3px',
  transition: 'filter 0.2s ease-out',
  '&:hover': { filter: 'brightness(0.78)', textDecoration: 'underline' },
} satisfies SxProps<Theme>

// Najetí zespodu s prolnutím
const fadeUpKeyframes = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
`

// Prolnutí se zvětšením
const popInKeyframes = keyframes`
  from { opacity: 0; transform: scale(0.6); }
  to { opacity: 1; transform: scale(1); }
`

// Animace s volitelným zpožděním, vypnutá při omezení pohybu v systému
const animation = (frames: string, delay: number, duration: number, active: boolean): SxProps<Theme> => ({
  opacity: active ? undefined : 0,
  animation: active ? `${frames} ${duration}s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s both` : 'none',
  '@media (prefers-reduced-motion: reduce)': { opacity: 1, animation: 'none' },
})

export const fadeUp = (delay = 0, active = true) => animation(`${fadeUpKeyframes}`, delay, 0.8, active)
export const popIn = (delay = 0, active = true) => animation(`${popInKeyframes}`, delay, 0.6, active)
