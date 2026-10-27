import { Box } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import content from '@/content/content'
import CtaBox from '@/components/CtaBox'
import { layout } from '@/theme/layout'
import { inlineLink, text } from '@/theme/textStyles'
import { fluid } from '@/utils/fluid'

// Přehled služeb s ikonami a odkazy na detail
export default function ServicesOverview() {
  const { services, cta } = content.home
  return (
    <Box component="section" sx={{ ...layout.rightColumn, pt: fluid(56, 200) }}>
      <Box component="h2" sx={{ ...text.serifHeading, m: 0, textAlign: 'center' }}>
        {services.title}
      </Box>
      <Box component="h3" sx={{ ...text.heading, m: 0, mt: fluid(20, 41), textAlign: 'center' }}>
        {services.subtitle}
      </Box>
      <Box component="ul" sx={{ listStyle: 'none', m: 0, p: 0, pt: fluid(12, 17) }}>
        {services.items.map((item) => (
          <Box component="li" key={item.path} sx={{ display: 'flex', gap: fluid(14, 21), pt: fluid(16, 20), minHeight: { md: fluid(60, 86) } }}>
            <Box sx={{ width: '36px', flexShrink: 0, display: 'flex', justifyContent: 'center', pt: '4px' }}>
              <Box component="img" src={item.icon} alt="" sx={{ maxWidth: '36px', height: 'auto' }} />
            </Box>
            <Box component="p" sx={{ ...text.body, m: 0 }}>
              <strong>{item.name}</strong> – {item.description} →{' '}
              <Box component={RouterLink} to={item.path} sx={inlineLink}>
                {item.linkLabel}
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
      <CtaBox title={cta.title} text={cta.text} sx={{ mt: fluid(48, 137), mx: 'auto' }} />
    </Box>
  )
}
