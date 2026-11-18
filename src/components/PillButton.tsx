import { Box } from '@mui/material'
import type { SxProps, Theme } from '@mui/material/styles'
import { Link as RouterLink } from 'react-router-dom'
import { colors } from '@/theme/theme'
import { hoverDarken } from '@/theme/interactions'
import { text } from '@/theme/textStyles'
import { fluid } from '@/utils/fluid'

interface PillButtonProps {
  label: string
  to?: string
  type?: 'button' | 'submit'
  variant?: 'white' | 'green'
  disabled?: boolean
  sx?: SxProps<Theme>
}

// Zaoblené tlačítko (odkaz nebo odeslání formuláře)
export default function PillButton({ label, to, type = 'button', variant = 'white', disabled = false, sx }: PillButtonProps) {
  const isWhite = variant === 'white'
  const style: SxProps<Theme> = {
    ...text.button,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: fluid(60, 70),
    px: fluid(22, 32),
    border: 0,
    borderRadius: '48px',
    bgcolor: isWhite ? colors.white : colors.green,
    color: isWhite ? colors.green : colors.white,
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    ...hoverDarken,
    '&:focus-visible': {
      outline: `3px solid ${isWhite ? colors.white : colors.green}`,
      outlineOffset: '3px',
    },
    '&:disabled': { opacity: 0.6, cursor: 'default', filter: 'none' },
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
    <Box component="button" type={type} disabled={disabled} sx={style}>
      {label}
    </Box>
  )
}
