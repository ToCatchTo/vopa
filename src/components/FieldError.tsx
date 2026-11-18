import { Box } from '@mui/material'
import { colors } from '@/theme/theme'
import { text } from '@/theme/textStyles'
import { fluid } from '@/utils/fluid'

interface FieldErrorProps {
  id: string
  messages?: string[]
}

// Chybová hláška pod polem formuláře
export default function FieldError({ id, messages }: FieldErrorProps) {
  if (!messages?.length) return null
  return (
    <Box id={id} sx={{ ...text.small, mt: fluid(6, 8), px: fluid(32, 35), color: colors.error }}>
      {messages.join(' ')}
    </Box>
  )
}
