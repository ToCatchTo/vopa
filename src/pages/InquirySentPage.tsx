import { Box } from '@mui/material'
import type { SxProps, Theme } from '@mui/material/styles'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Logo from '@/components/Logo'
import Seo from '@/components/Seo'
import SplitLayout from '@/components/SplitLayout'
import content from '@/content/content'
import { SEO } from '@/seo'
import { layout } from '@/theme/layout'
import { text, visuallyHidden } from '@/theme/textStyles'
import { fluid } from '@/utils/fluid'
import { nbsp } from '@/utils/typography'

// Text poděkování (na mobilu ve světlé části, na desktopu vpravo)
function SentMessage({ sx }: { sx: SxProps<Theme> }) {
  return (
    <Box component="p" sx={{ ...text.serifLead, m: 0, ...sx } as SxProps<Theme>}>
      {nbsp(content.inquirySent.message)}
    </Box>
  )
}

// Potvrzení odeslané poptávky
export default function InquirySentPage() {
  const path = content.paths.inquirySent
  return (
    <>
      <Seo path={path} title={SEO[path].title} description={SEO[path].description} noindex />
      <Header logo="none" showContactBox={false} />
      <Box component="main" sx={layout.main}>
        <Box component="h1" sx={visuallyHidden}>
          {content.hiddenHeadings.inquirySent}
        </Box>
        <SplitLayout
          sx={{ minHeight: { md: fluid(800, 1079) } }}
          left={
            <Box sx={{ pt: { xs: '379px', md: fluid(240, 347) }, pb: { xs: '94px', md: 0 } }}>
              <Logo sx={{ display: { xs: 'none', md: 'block' }, width: fluid(200, 398), ml: fluid(0, 416) }} />
              <SentMessage sx={{ ...layout.leftColumn, display: { xs: 'block', md: 'none' } }} />
            </Box>
          }
          right={
            <Box sx={{ ...layout.rightNarrowColumn, pt: { xs: '48px', md: fluid(260, 375) }, pb: { xs: '56px', md: 0 } }}>
              <SentMessage sx={{ display: { xs: 'none', md: 'block' } }} />
              <Box component="p" sx={{ ...text.personName, m: 0, mt: { md: fluid(32, 60) } }}>
                {content.contact.person}
              </Box>
              <Box component="p" sx={{ ...text.bodyLarge, m: 0, mt: fluid(1, 5) }}>
                {content.brand.legalName}
              </Box>
            </Box>
          }
        />
      </Box>
      <Footer showContactBar={false} />
    </>
  )
}
