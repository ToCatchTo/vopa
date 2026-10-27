import { Box } from '@mui/material'
import ContactDetails from '@/components/ContactDetails'
import CtaBox from '@/components/CtaBox'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import JsonLd from '@/components/JsonLd'
import Seo from '@/components/Seo'
import SplitLayout from '@/components/SplitLayout'
import content from '@/content/content'
import { SEO, localBusinessJsonLd } from '@/seo'
import { layout } from '@/theme/layout'
import { text, visuallyHidden } from '@/theme/textStyles'
import { fluid } from '@/utils/fluid'

// Kontaktní stránka
export default function ContactPage() {
  const path = content.paths.contact
  const { contactPage } = content
  return (
    <>
      <Seo path={path} title={SEO[path].title} description={SEO[path].description} />
      <JsonLd data={localBusinessJsonLd()} />
      <Header />
      <Box component="main" sx={layout.main}>
        <Box component="h1" sx={visuallyHidden}>
          {content.hiddenHeadings.contact}
        </Box>
        <SplitLayout
          sx={{ minHeight: { md: fluid(800, 1079) } }}
          left={
            <Box sx={{ pt: { xs: '32px', md: fluid(260, 399) }, pb: { xs: '40px', md: 0 } }}>
              <Box component="p" sx={{ ...layout.leftColumn, ...text.serifHeading, m: 0 }}>
                {contactPage.lead}
              </Box>
              <CtaBox
                title={contactPage.cta.title}
                text={contactPage.cta.text}
                sx={{ mt: fluid(32, 72), ml: { xs: '20px', md: fluid(0, 209) }, maxWidth: { xs: 'calc(100% - 40px)', md: `min(${fluid(350, 674)}, calc(100% - ${fluid(0, 209)} - 24px))` } }}
              />
            </Box>
          }
          right={
            <Box sx={{ ...layout.rightColumn, pt: { xs: '40px', md: fluid(260, 444) }, pb: { xs: '48px', md: 0 } }}>
              <ContactDetails />
            </Box>
          }
        />
      </Box>
      <Footer showContactBar={false} />
    </>
  )
}
