import { Box } from '@mui/material'
import type { SxProps, Theme } from '@mui/material/styles'
import { fluid } from '@/utils/fluid'
import type { ServicePhoto } from '@/content/content'

interface PhotoColumnProps {
  photos: ServicePhoto[]
  alt: string
  sx?: SxProps<Theme>
}

// Sloupec fotografií pod úvodem stránky služby
export default function PhotoColumn({ photos, alt, sx }: PhotoColumnProps) {
  return (
    <Box sx={sx}>
      {photos.map((photo, i) => (
        <Box
          key={photo.src}
          component="img"
          src={photo.src}
          alt={i === 0 ? alt : ''}
          loading="lazy"
          decoding="async"
          sx={{
            display: 'block',
            width: '100%',
            // Rámeček fotky v návrhu 536 × 324
            aspectRatio: '536 / 324',
            objectFit: 'cover',
            objectPosition: photo.position ?? 'center',
            mt: i === 0 ? 0 : fluid(16, 30),
          }}
        />
      ))}
    </Box>
  )
}
