import { Box } from '@mui/material'
import type { SxProps, Theme } from '@mui/material/styles'
import { fluid } from '@/utils/fluid'

interface PhotoColumnProps {
  src: string
  alt: string
  count: number
  sx?: SxProps<Theme>
}

// Sloupec fotografií pod úvodem stránky služby
export default function PhotoColumn({ src, alt, count, sx }: PhotoColumnProps) {
  return (
    <Box sx={sx}>
      {Array.from({ length: count }, (_, i) => (
        <Box
          key={i}
          component="img"
          src={src}
          alt={i === 0 ? alt : ''}
          loading="lazy"
          decoding="async"
          sx={{
            display: 'block',
            width: '100%',
            aspectRatio: '536 / 324',
            objectFit: 'cover',
            mt: i === 0 ? 0 : fluid(16, 30),
          }}
        />
      ))}
    </Box>
  )
}
