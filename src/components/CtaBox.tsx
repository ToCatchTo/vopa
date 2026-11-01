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
        maxWidth: fluid(322, 674),
        minHeight: fluid(280, 304),
        pt: fluid(22, 41),
        pb: fluid(32, 51),
        px: fluid(18, 40),
        bgcolor: colors.green,
        borderRadius: '51px',
        color: colors.white,
        textAlign: 'center',
        ...sx,
      } as SxProps<Theme>}
    >
      <Box component="h2" sx={{ ...text.ctaTitle, m: 0 }}>
        <MultiLine text={title} />
      </Box>
      <Box component="p" sx={{ ...text.bodyMedium, m: 0, mt: fluid(10, 6), maxWidth: fluid(285, 484) }}>
        <MultiLine text={description} />
      </Box>
      <Box sx={{ flexGrow: 1, minHeight: fluid(22, 24) }} />
      {/* Text tlačítka se zalomí do dvou řádků, když se nevejde (vždy na mobilu) */}
      <PillButton
        label={content.ctaButton}
        to={content.paths.inquiry}
        sx={{ width: { xs: '265px', sm: 'auto' }, maxWidth: '100%', whiteSpace: 'normal', textAlign: 'center', lineHeight: { xs: '20px', sm: 1.15 } }}
      />
    </Box>
  )
}
