import { Box } from '@mui/material'
import content from '@/content/content'
import Logo from '@/components/Logo'
import { layout } from '@/theme/layout'
import { text } from '@/theme/textStyles'
import { fluid } from '@/utils/fluid'

// Představení společnosti a pro koho pracujeme
export default function CompanyIntro() {
  const { intro } = content.home
  return (
    <Box component="section" sx={{ ...layout.leftColumn, pt: fluid(56, 200) }}>
      <Box component="h2" sx={{ ...text.serifHeading, m: 0, textAlign: 'center' }}>
        {intro.title}
      </Box>
      <Box sx={{ mt: fluid(20, 41) }}>
        {intro.paragraphs.map((paragraph) => (
          <Box component="p" key={paragraph} sx={{ ...text.bodyMedium, m: 0 }}>
            {paragraph}
          </Box>
        ))}
      </Box>
      <Box component="h3" sx={{ ...text.heading, m: 0, mt: fluid(28, 45) }}>
        {intro.clientsTitle}
      </Box>
      <Box component="ul" sx={{ ...text.bodyMedium, m: 0, mt: fluid(8, 12), pl: '18px', listStyle: '"•  "', '& li': { pl: '2px' } }}>
        {intro.clients.map((client) => (
          <li key={client}>{client}</li>
        ))}
      </Box>
      <Logo linked={false} sx={{ width: fluid(180, 260), mx: 'auto', mt: fluid(40, 77) }} />
    </Box>
  )
}
