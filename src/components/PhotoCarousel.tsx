import { useState } from 'react'
import { Box } from '@mui/material'
import type { SxProps, Theme } from '@mui/material/styles'
import content from '@/content/content'
import { hoverDarken } from '@/theme/interactions'

interface PhotoCarouselProps {
  photos: string[]
  alt: string
  sx?: SxProps<Theme>
}

// Fotogalerie služby se šipkami (mobilní verze sloupce fotografií), točí se donekonečna
export default function PhotoCarousel({ photos, alt, sx }: PhotoCarouselProps) {
  const count = photos.length
  // Pás s kopií poslední fotky na začátku a první na konci
  const slides = [photos[count - 1], ...photos, photos[0]]
  // Aktuální pozice v pásu (1 = první skutečná fotka)
  const [position, setPosition] = useState(1)
  const [animate, setAnimate] = useState(true)

  const move = (step: number) => {
    setAnimate(true)
    setPosition((prev) => Math.min(Math.max(prev + step, 0), count + 1))
  }

  // Po dojetí na kopii skok bez animace na odpovídající skutečnou fotku
  const onTransitionEnd = () => {
    if (position === 0 || position === count + 1) {
      setAnimate(false)
      setPosition(position === 0 ? count : 1)
    }
  }

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
        <Box
          onTransitionEnd={onTransitionEnd}
          sx={{
            display: 'flex',
            transform: `translateX(-${position * 100}%)`,
            transition: animate ? 'transform 0.4s ease-out' : 'none',
          }}
        >
          {slides.map((src, i) => (
            <Box
              key={i}
              component="img"
              src={src}
              alt={i === 1 ? alt : ''}
              loading="lazy"
              decoding="async"
              aria-hidden={i !== position}
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
