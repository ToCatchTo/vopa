import type { SxProps, Theme } from '@mui/material/styles'
import { fluid } from '@/utils/fluid'
import { fonts } from '@/theme/theme'

// Vizuálně skrytý prvek dostupný pro čtečky a roboty
export const visuallyHidden: SxProps<Theme> = {
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: 0,
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0 0 0 0)',
  whiteSpace: 'nowrap',
  border: 0,
}

// Typografické styly z návrhu (mobil → desktop 1920px)
export const text = {
  heroTitle: { fontFamily: fonts.sans, fontWeight: 700, fontSize: fluid(36, 90), lineHeight: fluid(46, 117) },
  serviceTitle: { fontFamily: fonts.sans, fontWeight: 700, fontSize: fluid(34, 60), lineHeight: fluid(44, 79) },
  serifHeading: { fontFamily: fonts.serif, fontWeight: 400, fontSize: fluid(28, 40), lineHeight: fluid(38, 54) },
  ctaTitle: { fontFamily: fonts.sans, fontWeight: 700, fontSize: fluid(22, 32), lineHeight: fluid(29, 42) },
  personName: { fontFamily: fonts.sans, fontWeight: 700, fontSize: fluid(22, 30), lineHeight: fluid(29, 39) },
  heroText: { fontFamily: fonts.sans, fontWeight: 400, fontSize: fluid(18, 30), lineHeight: fluid(25, 39) },
  heading: { fontFamily: fonts.sans, fontWeight: 700, fontSize: fluid(19, 24), lineHeight: fluid(25, 31) },
  bodyLarge: { fontFamily: fonts.sans, fontWeight: 400, fontSize: fluid(18, 24), lineHeight: fluid(24, 31) },
  lead: { fontFamily: fonts.sans, fontWeight: 400, fontSize: fluid(16, 22), lineHeight: fluid(22, 29) },
  body: { fontFamily: fonts.sans, fontWeight: 400, fontSize: fluid(15, 18), lineHeight: fluid(21, 24) },
  bodyMedium: { fontFamily: fonts.sans, fontWeight: 500, fontSize: fluid(15, 18), lineHeight: fluid(21, 24) },
  input: { fontFamily: fonts.sans, fontWeight: 500, fontSize: fluid(14, 16), lineHeight: fluid(19, 21) },
  small: { fontFamily: fonts.sans, fontWeight: 500, fontSize: fluid(13, 14), lineHeight: fluid(17, 18) },
  button: { fontFamily: fonts.sans, fontWeight: 700, fontSize: fluid(17, 24), lineHeight: fluid(22, 31) },
} satisfies Record<string, SxProps<Theme>>

// Podtržený odkaz v barvě textu
export const inlineLink: SxProps<Theme> = {
  color: 'inherit',
  textDecoration: 'underline',
  textUnderlineOffset: '2px',
  transition: 'filter 0.2s ease-out',
  '&:hover': { filter: 'brightness(0.6)' },
}
