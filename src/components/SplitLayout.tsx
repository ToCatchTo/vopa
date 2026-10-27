import type { ReactNode } from 'react'
import { Box, Grid } from '@mui/material'
import type { SxProps, Theme } from '@mui/material/styles'
import { colors } from '@/theme/theme'

interface SplitLayoutProps {
  left: ReactNode
  right: ReactNode
  // Pozadí levé poloviny: světle zelená nebo zesvětlená fotka
  leftBackground?: 'light' | { image: string }
  sx?: SxProps<Theme>
  leftSx?: SxProps<Theme>
  rightSx?: SxProps<Theme>
}

// Rozložení na dvě poloviny (levá s pozadím, pravá bílá)
export default function SplitLayout({ left, right, leftBackground = 'light', sx, leftSx, rightSx }: SplitLayoutProps) {
  const isLight = leftBackground === 'light'
  return (
    <Grid container sx={{ position: 'relative', flexGrow: 1, ...sx } as SxProps<Theme>}>
      <Grid
        size={{ xs: 12, md: 6 }}
        sx={{ position: 'relative', bgcolor: isLight ? colors.lightGreen : colors.white, ...leftSx } as SxProps<Theme>}
      >
        {!isLight && (
          <Box
            aria-hidden
            sx={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url(${leftBackground.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.25,
            }}
          />
        )}
        <Box sx={{ position: 'relative', height: '100%' }}>{left}</Box>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }} sx={{ position: 'relative', ...rightSx } as SxProps<Theme>}>
        {right}
      </Grid>
    </Grid>
  )
}
