import { useState, type ChangeEvent } from 'react'
import { Box } from '@mui/material'
import type { SxProps, Theme } from '@mui/material/styles'
import content from '@/content/content'
import { colors } from '@/theme/theme'
import { hoverDarken } from '@/theme/interactions'
import { text, visuallyHidden } from '@/theme/textStyles'
import { compressImage } from '@/utils/compressImage'
import { fluid } from '@/utils/fluid'

interface PhotoUploadProps {
  photos: File[]
  onChange: (photos: File[]) => void
  fieldSx: SxProps<Theme>
}

// Nahrání 1–5 fotek: po vybrání fotky se zobrazí pole pro další
export default function PhotoUpload({ photos, onChange, fieldSx }: PhotoUploadProps) {
  const { photoUpload } = content.inquiry.form
  const [processing, setProcessing] = useState(false)
  const fieldCount = Math.min(photos.length + 1, photoUpload.maxPhotos)

  const onSelect = async (index: number, e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    e.target.value = ''
    if (!file) return
    setProcessing(true)
    const compressed = await compressImage(file)
    setProcessing(false)
    const next = [...photos]
    next[index] = compressed
    onChange(next)
  }

  const onRemove = (index: number) => onChange(photos.filter((_, i) => i !== index))

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: fluid(12, 23) }}>
      {Array.from({ length: fieldCount }, (_, i) => {
        const photo = photos[i]
        const isPending = processing && i === photos.length
        return (
          <Box key={i} sx={{ position: 'relative' }}>
            <Box
              component="label"
              sx={{ ...fieldSx, display: 'flex', alignItems: 'center', gap: '16px', px: fluid(14, 21), pr: photo ? '56px' : undefined, cursor: 'pointer', ...hoverDarken } as SxProps<Theme>}
            >
              <Box component="span" sx={visuallyHidden}>
                {`${photoUpload.label} ${i + 1}`}
              </Box>
              <Box component="input" type="file" accept="image/*" onChange={(e: ChangeEvent<HTMLInputElement>) => onSelect(i, e)} sx={visuallyHidden} />
              <Box
                component="span"
                sx={{
                  ...text.input,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  width: '139px',
                  height: '34px',
                  border: `1px solid ${colors.grey}`,
                  borderRadius: '30px',
                }}
              >
                {content.inquiry.form.fileButton}
              </Box>
              <Box component="span" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {isPending ? photoUpload.processing : photo ? `${photo.name} (${formatSize(photo.size)})` : ''}
              </Box>
            </Box>
            {photo && (
              <Box
                component="button"
                type="button"
                aria-label={`${photoUpload.removeAria} ${i + 1}`}
                onClick={() => onRemove(i)}
                sx={{
                  position: 'absolute',
                  top: '50%',
                  right: '16px',
                  transform: 'translateY(-50%)',
                  width: '28px',
                  height: '28px',
                  p: 0,
                  border: `1px solid ${colors.grey}`,
                  borderRadius: '50%',
                  bgcolor: 'transparent',
                  color: colors.darkGreen,
                  fontSize: '18px',
                  lineHeight: '26px',
                  cursor: 'pointer',
                  ...hoverDarken,
                }}
              >
                ×
              </Box>
            )}
          </Box>
        )
      })}
    </Box>
  )
}

// Velikost souboru v čitelném tvaru
function formatSize(bytes: number) {
  return bytes < 1024 * 1024 ? `${Math.round(bytes / 1024)} kB` : `${(bytes / 1024 / 1024).toFixed(1)} MB`
}
