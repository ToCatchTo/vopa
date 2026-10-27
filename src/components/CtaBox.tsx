import { Box } from '@mui/material'
import type { SxProps, Theme } from '@mui/material/styles'
import content from '@/content/content'
import MultiLine from '@/components/MultiLine'
import PillButton from '@/components/PillButton'
import { colors } from '@/theme/theme'
import { text } from '@/theme/textStyles'
import { fluid } from '@/utils/fluid'

interface CtaBoxProps {
  title: string
  text: string
  sx?: SxProps<Theme>
}

// Zelený box s výzvou k odeslání poptávky
export default function CtaBox({ title, text: description, sx }: CtaBoxProps) {
  return (
    <Box
      component="aside"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        maxWidth: fluid(350, 674),
        minHeight: fluid(0, 304),
        pt: fluid(28, 41),
        pb: fluid(28, 51),
        px: fluid(20, 40),
        bgcolor: colors.green,
        borderRadius: fluid(32, 51),
        color: colors.white,
        textAlign: 'center',
        ...sx,
      } as SxProps<Theme>}
    >
      <Box component="h2" sx={{ ...text.ctaTitle, m: 0 }}>
        <MultiLine text={title} />
      </Box>
      <Box component="p" sx={{ ...text.bodyMedium, m: 0, mt: fluid(8, 6), maxWidth: fluid(300, 484) }}>
        <MultiLine text={description} />
      </Box>
      <Box sx={{ flexGrow: 1, minHeight: fluid(20, 24) }} />
      <PillButton label={content.ctaButton} to={content.paths.inquiry} />
    </Box>
  )
}
