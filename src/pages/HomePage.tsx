import { Box } from '@mui/material'
import CompanyIntro from '@/components/CompanyIntro'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HomeHero from '@/components/HomeHero'
import JsonLd from '@/components/JsonLd'
import Seo from '@/components/Seo'
import ServicesOverview from '@/components/ServicesOverview'
import SplitLayout from '@/components/SplitLayout'
import content from '@/content/content'
import { SEO, localBusinessJsonLd } from '@/seo'
import { layout } from '@/theme/layout'
import { fluid } from '@/utils/fluid'

// Domovská stránka
export default function HomePage() {
  const path = content.paths.home
  return (
    <>
      <Seo path={path} description={SEO[path].description} />
      <JsonLd data={localBusinessJsonLd()} />
      <Header logo="large" />
      <Box component="main" sx={layout.main}>
        <HomeHero />
        <SplitLayout
          left={<CompanyIntro />}
          right={<ServicesOverview />}
          reverseOnMobile
          sx={{ minHeight: { md: fluid(900, 1373) } }}
          rightSx={{ pb: { xs: '64px', md: 0 } }}
        />
      </Box>
      <Footer />
    </>
  )
}
