import { Box } from '@mui/material'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import InquiryForm from '@/components/InquiryForm'
import MultiLine from '@/components/MultiLine'
import Seo from '@/components/Seo'
import SplitLayout from '@/components/SplitLayout'
import content from '@/content/content'
import { SEO } from '@/seo'
import { designWidthQuery, layout } from '@/theme/layout'
import { text, visuallyHidden } from '@/theme/textStyles'
import { fluid } from '@/utils/fluid'

// Stránka s poptávkovým formulářem
export default function InquiryPage() {
  const path = content.paths.inquiry
  const { inquiry } = content
  return (
    <>
      <Seo path={path} title={SEO[path].title} description={SEO[path].description} />
      <Header showContactBox={false} />
      <Box component="main" sx={layout.main}>
        <Box component="h1" sx={visuallyHidden}>
          {content.hiddenHeadings.inquiry}
        </Box>
        <SplitLayout
          sx={{ minHeight: { md: fluid(800, 1079) } }}
          left={
            <Box sx={{ ...layout.leftColumn, pt: { xs: '32px', md: fluid(260, 399) }, pb: { xs: '40px', md: 0 } }}>
              <Box component="p" sx={{ ...text.serifHeading, m: 0 }}>
                <MultiLine text={inquiry.lead} />
              </Box>
              <Box component="p" sx={{ ...text.lead, m: 0, mt: fluid(20, 39), [designWidthQuery]: { width: 'max-content' } }}>
                <MultiLine text={inquiry.text} />
              </Box>
            </Box>
          }
          right={
            <Box
              sx={{
                ml: { xs: '20px', md: fluid(0, 74) },
                width: { xs: 'calc(100% - 40px)', md: fluid(233, 674) },
                pt: { xs: '40px', md: fluid(200, 286) },
                pb: { xs: '56px', md: 0 },
              }}
            >
              <InquiryForm />
            </Box>
          }
        />
      </Box>
      <Footer />
    </>
  )
}
