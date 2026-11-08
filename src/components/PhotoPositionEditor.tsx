import { useRef, useState } from 'react'
import { Box } from '@mui/material'
import type { SxProps, Theme } from '@mui/material/styles'
import type { ServicePhoto } from '@/content/content'
import { formatPosition, parsePosition, savePosition, storedPosition, type PhotoPoint } from '@/utils/photoPosition'

interface PhotoPositionEditorProps {
  photo: ServicePhoto
  alt: string
  sx?: SxProps<Theme>
  onChange: (src: string, position: string) => void
}

const labelSx: SxProps<Theme> = {
  position: 'absolute',
  left: 8,
  bottom: 8,
  display: 'flex',
  gap: '6px',
  alignItems: 'center',
  px: '8px',
  py: '4px',
  borderRadius: '6px',
  bgcolor: 'rgba(0, 0, 0, 0.7)',
  color: '#fff',
  fontSize: '13px',
  fontFamily: 'monospace',
  '& button': { font: 'inherit', cursor: 'pointer', border: 0, borderRadius: '4px', px: '6px', py: '2px' },
}

// Ladění výřezu fotky tažením myší (jen v dev režimu, do produkce se nedostane)
export default function PhotoPositionEditor({ photo, alt, sx, onChange }: PhotoPositionEditorProps) {
  const [point, setPoint] = useState<PhotoPoint>(() => parsePosition(storedPosition(photo.src, photo.position)))
  const drag = useRef<{ startX: number; startY: number; start: PhotoPoint; overflowX: number; overflowY: number } | null>(null)

  const update = (next: PhotoPoint) => {
    setPoint(next)
    const value = formatPosition(next)
    savePosition(photo.src, value)
    onChange(photo.src, value)
  }

  const onPointerDown = (event: React.PointerEvent<HTMLImageElement>) => {
    const img = event.currentTarget
    const box = img.getBoundingClientRect()
    // O kolik je fotka při object-fit: cover větší než rámeček
    const scale = Math.max(box.width / img.naturalWidth, box.height / img.naturalHeight)
    drag.current = {
      startX: event.clientX,
      startY: event.clientY,
      start: point,
      overflowX: img.naturalWidth * scale - box.width,
      overflowY: img.naturalHeight * scale - box.height,
    }
    img.setPointerCapture(event.pointerId)
    event.preventDefault()
  }

  const onPointerMove = (event: React.PointerEvent<HTMLImageElement>) => {
    const state = drag.current
    if (!state) return
    const clamp = (value: number) => Math.min(100, Math.max(0, value))
    // Tažení doprava/dolů posouvá fotku za kurzorem
    const x = state.overflowX > 1 ? clamp(state.start.x - ((event.clientX - state.startX) / state.overflowX) * 100) : state.start.x
    const y = state.overflowY > 1 ? clamp(state.start.y - ((event.clientY - state.startY) / state.overflowY) * 100) : state.start.y
    update({ x, y })
  }

  const reset = () => {
    savePosition(photo.src, null)
    const original = parsePosition(photo.position)
    setPoint(original)
    onChange(photo.src, formatPosition(original))
  }

  return (
    <Box sx={{ position: 'relative', ...sx } as SxProps<Theme>}>
      <Box
        component="img"
        src={photo.src}
        alt={alt}
        draggable={false}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={() => (drag.current = null)}
        sx={{
          display: 'block',
          width: '100%',
          aspectRatio: '536 / 324',
          objectFit: 'cover',
          objectPosition: formatPosition(point),
          cursor: 'move',
          touchAction: 'none',
          outline: '2px dashed rgba(255, 255, 255, 0.8)',
          outlineOffset: '-4px',
        }}
      />
      <Box sx={labelSx}>
        {formatPosition(point)}
        <button type="button" onClick={reset}>
          zpět
        </button>
      </Box>
    </Box>
  )
}
