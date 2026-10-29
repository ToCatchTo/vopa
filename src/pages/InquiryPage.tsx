import { Box } from '@mui/material'
import type { SxProps, Theme } from '@mui/material/styles'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import InquiryForm from '@/components/InquiryForm'
import MultiLine from '@/components/MultiLine'
import Seo from '@/components/Seo'
import SplitLayout from '@/components/SplitLayout'
import content from '@/content/content'
import { SEO } from '@/seo'
import { designWidthQuery, layout, mobileGutter } from '@/theme/layout'
import { text, visuallyHidden } from '@/theme/textStyles'
import { fluid } from '@/utils/fluid'

// Doplňující text o službách
function InquiryText({ sx }: { sx: SxProps<Theme> }) {
  return (
    <Box component="p" sx={{ ...text.lead, m: 0, ...sx } as SxProps<Theme>}>
      <MultiLine text={content.inquiry.text} />
    </Box>
  )
}

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
            <Box sx={{ ...layout.leftColumn, pt: { xs: '307px', md: fluid(260, 399) }, pb: { xs: '29px', md: 0 } }}>
              <Box component="p" sx={{ ...text.serifLead, m: 0 }}>
                <MultiLine text={inquiry.lead} />
              </Box>
              <InquiryText sx={{ display: { xs: 'none', md: 'block' }, mt: fluid(20, 39), [designWidthQuery]: { width: 'max-content' } }} />
            </Box>
          }
          right={
            <Box
              sx={{
                ml: { xs: mobileGutter, md: fluid(0, 74) },
                width: { xs: `calc(100% - 2 * ${mobileGutter})`, md: fluid(233, 674) },
                pt: { xs: '40px', md: fluid(200, 286) },
                pb: { xs: '53px', md: 0 },
              }}
            >
              <InquiryForm />
              {/* Na mobilu je doplňující text až pod formulářem */}
              <InquiryText sx={{ display: { xs: 'block', md: 'none' }, mt: '97px' }} />
            </Box>
          }
        />
      </Box>
      <Footer />
    </>
  )
}
