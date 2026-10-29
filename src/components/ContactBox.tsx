import { Box } from '@mui/material'
import type { SxProps, Theme } from '@mui/material/styles'
import { Link as RouterLink } from 'react-router-dom'
import content from '@/content/content'
import PillButton from '@/components/PillButton'
import { hoverDarken } from '@/theme/interactions'
import { colors } from '@/theme/theme'
import { text } from '@/theme/textStyles'
import { fluid } from '@/utils/fluid'

interface ContactBoxProps {
  sx?: SxProps<Theme>
}

// Zelený box „Odpovíme do 24h.“ s tlačítkem na poptávku (na mobilu i s logem)
export default function ContactBox({ sx }: ContactBoxProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: { xs: 'flex-end', md: 'center' },
        justifyContent: 'space-between',
        gap: fluid(12, 24),
        height: { xs: '149px', md: fluid(84, 135) },
        pl: { xs: '18px', md: fluid(20, 45) },
        pr: { xs: '17px', md: fluid(16, 44) },
        pb: { xs: '21px', md: 0 },
        bgcolor: colors.green,
        borderRadius: '0 0 50px 50px',
        ...sx,
      } as SxProps<Theme>}
    >
      <Box
        component={RouterLink}
        to={content.paths.home}
        sx={{ display: { xs: 'block', md: 'none' }, width: '85px', flexShrink: 0, ...hoverDarken }}
      >
        <Box component="img" src="/icons/logo_white.svg" alt={content.brand.logoAlt} sx={{ display: 'block', width: '100%', height: 'auto' }} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: { xs: '5px', md: fluid(12, 24) },
          flexGrow: { md: 1 },
        }}
      >
        <Box
          component="p"
          sx={{
            ...text.button,
            fontSize: { xs: '14px', md: text.button.fontSize },
            lineHeight: { xs: '18px', md: text.button.lineHeight },
            fontWeight: { xs: 400, md: 700 },
            m: 0,
            color: colors.white,
            whiteSpace: 'nowrap',
          }}
        >
          {content.header.responseNote}
        </Box>
        <PillButton
          label={content.header.inquiryButton}
          to={content.paths.inquiry}
          sx={{ height: fluid(52, 70), width: { xs: '156px', md: 'auto' }, fontSize: fluid(16, 24), lineHeight: fluid(21, 31) }}
        />
      </Box>
    </Box>
  )
}
