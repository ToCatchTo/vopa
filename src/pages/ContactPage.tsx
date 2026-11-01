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
import { nbsp } from '@/utils/typography'

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
            <Box sx={{ pt: { xs: '307px', md: fluid(260, 399) }, pb: { xs: '65px', md: fluid(60, 70) } }}>
              <Box component="p" sx={{ ...layout.leftColumn, ...text.serifLead, m: 0 }}>
                {nbsp(contactPage.lead)}
              </Box>
              <CtaBox
                title={contactPage.cta.title}
                text={contactPage.cta.text}
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  mt: fluid(32, 72),
                  // S menší obrazovkou se box postupně zmenšuje a drží odstup od pravé poloviny
                  ml: fluid(40, 209),
                  maxWidth: `min(${fluid(300, 674)}, calc(100% - ${fluid(40, 209)} - ${fluid(40, 77)}))`,
                }}
              />
            </Box>
          }
          right={
            <Box sx={{ ...layout.rightColumn, pt: { xs: '57px', md: fluid(260, 444) }, pb: { xs: '122px', md: fluid(60, 70) } }}>
              <ContactDetails />
              {/* Na mobilu je výzva až pod kontaktními údaji */}
              <CtaBox title={contactPage.cta.title} text={contactPage.cta.text} sx={{ display: { xs: 'flex', md: 'none' }, mt: '75px' }} />
            </Box>
          }
        />
      </Box>
      <Footer showContactBar={false} />
    </>
  )
}
