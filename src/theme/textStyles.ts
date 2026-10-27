import type { SxProps, Theme } from '@mui/material/styles'

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
