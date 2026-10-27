import { Box } from '@mui/material'
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
            <Box sx={{ pt: { xs: '32px', md: fluid(240, 347) }, pb: { xs: '32px', md: 0 } }}>
              <Logo sx={{ width: fluid(200, 398), ml: { xs: 'auto', md: fluid(0, 416) }, mr: { xs: 'auto', md: 0 } }} />
            </Box>
          }
          right={
            <Box sx={{ ...layout.rightNarrowColumn, pt: { xs: '40px', md: fluid(260, 375) }, pb: { xs: '56px', md: 0 } }}>
              <Box component="p" sx={{ ...text.serifHeading, m: 0 }}>
                {content.inquirySent.message}
              </Box>
              <Box component="p" sx={{ ...text.personName, m: 0, mt: fluid(32, 60) }}>
                {content.contact.person}
              </Box>
              <Box component="p" sx={{ ...text.bodyLarge, m: 0, mt: fluid(2, 5) }}>
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
