import { Box } from '@mui/material'
import type { SxProps, Theme } from '@mui/material/styles'
import { Link as RouterLink } from 'react-router-dom'
import { colors } from '@/theme/theme'
import { text } from '@/theme/textStyles'
import { fluid } from '@/utils/fluid'

interface PillButtonProps {
  label: string
  to?: string
  type?: 'button' | 'submit'
  variant?: 'white' | 'green'
  sx?: SxProps<Theme>
}

// Zaoblené tlačítko (odkaz nebo odeslání formuláře)
export default function PillButton({ label, to, type = 'button', variant = 'white', sx }: PillButtonProps) {
  const isWhite = variant === 'white'
  const style: SxProps<Theme> = {
    ...text.button,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: fluid(52, 70),
    px: fluid(22, 32),
    border: 0,
    borderRadius: '48px',
    bgcolor: isWhite ? colors.white : colors.green,
    color: isWhite ? colors.green : colors.white,
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    transition: 'background-color 0.2s, color 0.2s',
    '&:hover': {
      bgcolor: isWhite ? colors.lightGreen : colors.darkGreen,
    },
    '&:focus-visible': {
      outline: `3px solid ${isWhite ? colors.white : colors.green}`,
      outlineOffset: '3px',
    },
    ...sx,
  } as SxProps<Theme>

  if (to) {
    return (
      <Box component={RouterLink} to={to} sx={style}>
        {label}
      </Box>
    )
  }
  return (
    <Box component="button" type={type} sx={style}>
      {label}
    </Box>
  )
}
