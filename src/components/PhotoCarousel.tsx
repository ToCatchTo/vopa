import { useState } from 'react'
import { Box } from '@mui/material'
import type { SxProps, Theme } from '@mui/material/styles'
import content from '@/content/content'
import { hoverDarken } from '@/theme/interactions'

interface PhotoCarouselProps {
  src: string
  alt: string
  count: number
  sx?: SxProps<Theme>
}

// Fotogalerie služby se šipkami (mobilní verze sloupce fotografií)
export default function PhotoCarousel({ src, alt, count, sx }: PhotoCarouselProps) {
  const [index, setIndex] = useState(0)
  // Posun o jednu fotku dopředu nebo dozadu, na konci se začíná znovu
  const move = (step: number) => setIndex((prev) => (prev + step + count) % count)

  const arrowSx = (rotation: number): SxProps<Theme> => ({
    display: 'block',
    width: '50px',
    height: '50px',
    p: 0,
    border: 0,
    borderRadius: '50%',
    bgcolor: 'transparent',
    cursor: 'pointer',
    ...hoverDarken,
    '& img': { display: 'block', width: '100%', height: '100%', transform: `rotate(${rotation}deg)` },
  })

  return (
    <Box sx={sx}>
      <Box sx={{ overflow: 'hidden' }}>
        <Box sx={{ display: 'flex', transform: `translateX(-${index * 100}%)`, transition: 'transform 0.4s ease-out' }}>
          {Array.from({ length: count }, (_, i) => (
            <Box
              key={i}
              component="img"
              src={src}
              alt={i === 0 ? alt : ''}
              loading="lazy"
              decoding="async"
              aria-hidden={i !== index}
              sx={{ display: 'block', flex: '0 0 100%', width: '100%', aspectRatio: '393 / 240', objectFit: 'cover' }}
            />
          ))}
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: '56px', mt: '18px' }}>
        <Box component="button" type="button" aria-label={content.carousel.prevAria} onClick={() => move(-1)} sx={arrowSx(90)}>
          <img src="/icons/menu_toggle_icon.svg" alt="" />
        </Box>
        <Box component="button" type="button" aria-label={content.carousel.nextAria} onClick={() => move(1)} sx={arrowSx(-90)}>
          <img src="/icons/menu_toggle_icon.svg" alt="" />
        </Box>
      </Box>
    </Box>
  )
}
