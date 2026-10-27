import { Box } from '@mui/material'
import content from '@/content/content'
import PillButton from '@/components/PillButton'
import { colors, greenOverlay } from '@/theme/theme'
import { text } from '@/theme/textStyles'
import { fluid } from '@/utils/fluid'

// Zelený box „Odpovíme do 24h.“ s tlačítkem na poptávku
export default function ContactBox() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: fluid(12, 24),
        height: fluid(84, 135),
        pl: fluid(20, 45),
        pr: fluid(16, 44),
        bgcolor: greenOverlay,
        borderRadius: `0 0 ${fluid(30, 50)} ${fluid(30, 50)}`,
      }}
    >
      <Box component="p" sx={{ ...text.button, m: 0, color: colors.white, whiteSpace: 'nowrap' }}>
        {content.header.responseNote}
      </Box>
      <PillButton label={content.header.inquiryButton} to={content.paths.inquiry} />
    </Box>
  )
}
