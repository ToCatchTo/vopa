import { useState } from 'react'
import { Box } from '@mui/material'
import type { SxProps, Theme } from '@mui/material/styles'
import { fluid } from '@/utils/fluid'
import type { ServicePhoto } from '@/content/content'
import { storedPosition } from '@/utils/photoPosition'
import PhotoPositionEditor from '@/components/PhotoPositionEditor'

interface PhotoColumnProps {
  photos: ServicePhoto[]
  alt: string
  sx?: SxProps<Theme>
}

// Sloupec fotografií pod úvodem stránky služby
export default function PhotoColumn({ photos, alt, sx }: PhotoColumnProps) {
  if (import.meta.env.DEV) return <PhotoColumnEditor photos={photos} alt={alt} sx={sx} />
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

// Dev režim: fotky jdou posouvat tažením a pozice se dají zkopírovat
function PhotoColumnEditor({ photos, alt, sx }: PhotoColumnProps) {
  const [positions, setPositions] = useState<Record<string, string>>(() =>
    Object.fromEntries(photos.map((photo) => [photo.src, storedPosition(photo.src, photo.position)])),
  )
  const [copied, setCopied] = useState(false)

  const copyAll = async () => {
    const text = photos.map((photo) => `${photo.src}: ${positions[photo.src] ?? storedPosition(photo.src, photo.position)}`).join('\n')
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      window.prompt('Zkopíruj pozice:', text)
    }
  }

  return (
    <Box sx={sx}>
      {photos.map((photo, i) => (
        <PhotoPositionEditor
          key={photo.src}
          photo={photo}
          alt={i === 0 ? alt : ''}
          onChange={(src, position) => setPositions((prev) => ({ ...prev, [src]: position }))}
          sx={{ mt: i === 0 ? 0 : fluid(16, 30) }}
        />
      ))}
      <Box
        component="button"
        type="button"
        onClick={copyAll}
        sx={{ mt: '12px', px: '12px', py: '8px', border: 0, borderRadius: '8px', bgcolor: '#222', color: '#fff', cursor: 'pointer', fontFamily: 'monospace' }}
      >
        {copied ? 'Zkopírováno' : 'Kopírovat pozice fotek'}
      </Box>
    </Box>
  )
}
