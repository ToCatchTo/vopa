import { Box } from '@mui/material'
import type { SxProps, Theme } from '@mui/material/styles'
import { Link as RouterLink } from 'react-router-dom'
import content from '@/content/content'
import { hoverDarken } from '@/theme/interactions'

interface LogoProps {
  sx?: SxProps<Theme>
  linked?: boolean
}

// Logo firmy, volitelně jako odkaz na úvod
export default function Logo({ sx, linked = true }: LogoProps) {
  const image = (
    <Box
      component="img"
      src="/icons/logo.svg"
      alt={content.brand.logoAlt}
      sx={{ display: 'block', width: '100%', height: 'auto' }}
    />
  )
  if (!linked) return <Box sx={sx}>{image}</Box>
  return (
    <Box component={RouterLink} to={content.paths.home} sx={{ display: 'block', ...hoverDarken, ...sx } as SxProps<Theme>}>
      {image}
    </Box>
  )
}
