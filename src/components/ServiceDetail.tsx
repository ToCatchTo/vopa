import { Box } from '@mui/material'
import MultiLine from '@/components/MultiLine'
import type { ServiceSection } from '@/content/content'
import { text } from '@/theme/textStyles'
import { fluid } from '@/utils/fluid'
import { nbsp } from '@/utils/typography'

interface ServiceDetailProps {
  sections: ServiceSection[]
}

// Textový popis služby rozdělený do sekcí
export default function ServiceDetail({ sections }: ServiceDetailProps) {
  return (
    <Box>
      {sections.map((section, i) => (
        <Box component="section" key={section.heading} sx={{ pt: i === 0 ? 0 : fluid(42, 48) }}>
          <Box component="h2" sx={{ ...text.heading, m: 0 }}>
            <MultiLine text={section.heading} />
          </Box>
          {section.paragraphs.map((paragraph, j) => (
            <Box component="p" key={paragraph} sx={{ ...text.body, m: 0, mt: j === 0 ? 0 : fluid(21, 24) }}>
              {nbsp(paragraph)}
            </Box>
          ))}
          {section.list && (
            <Box component="ul" sx={{ ...text.body, m: 0, pl: '14px', listStyle: '"•  "' }}>
              {section.list.map((item) => (
                <li key={item}>{nbsp(item)}</li>
              ))}
            </Box>
          )}
        </Box>
      ))}
    </Box>
  )
}
