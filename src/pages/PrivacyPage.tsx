import { Box } from '@mui/material'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Seo from '@/components/Seo'
import content from '@/content/content'
import { colors } from '@/theme/theme'
import { SEO } from '@/seo'
import { layout, mobileGutter } from '@/theme/layout'
import { text } from '@/theme/textStyles'
import { fluid } from '@/utils/fluid'
import { nbsp } from '@/utils/typography'

// Informace o zpracování osobních údajů – jednoduchá textová stránka
export default function PrivacyPage() {
  const { privacy, paths } = content
  return (
    <>
      <Seo path={paths.privacy} {...SEO[paths.privacy]} />
      <Header showContactBox={false} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          ml: layout.leftColumn.ml,
          width: { xs: `calc(100% - 2 * ${mobileGutter})`, md: `min(${fluid(600, 900)}, calc(100% - 2 * ${fluid(11, 278)}))` },
          pt: { xs: '300px', md: fluid(260, 330) },
          pb: fluid(80, 140),
        }}
      >
        <Box component="h1" sx={{ ...text.serifHeading, m: 0 }}>
          {nbsp(privacy.title)}
        </Box>
        {privacy.sections.map((section) => (
          <Box component="section" key={section.heading} sx={{ pt: fluid(36, 52) }}>
            <Box component="h2" sx={{ ...text.heading, color: colors.green, m: 0 }}>
              {nbsp(section.heading)}
            </Box>
            {section.blocks.map((block, i) =>
              typeof block === 'string' ? (
                <Box component="p" key={i} sx={{ ...text.body, m: 0, mt: fluid(12, 16) }}>
                  {nbsp(block)}
                </Box>
              ) : (
                <Box component="ul" key={i} sx={{ ...text.body, m: 0, mt: fluid(8, 10), pl: '14px', listStyle: '"•  "' }}>
                  {block.list.map((item) => (
                    <Box component="li" key={item} sx={{ mt: '4px' }}>
                      {nbsp(item)}
                    </Box>
                  ))}
                </Box>
              ),
            )}
          </Box>
        ))}
      </Box>
      <Footer />
    </>
  )
}
