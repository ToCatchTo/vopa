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
import { fluid } from '@/utils/fluid'

// Domovská stránka
export default function HomePage() {
  const path = content.paths.home
  return (
    <>
      <Seo path={path} description={SEO[path].description} />
      <JsonLd data={localBusinessJsonLd()} />
      <Header logo="large" />
      <main>
        <HomeHero />
        <SplitLayout
          left={<CompanyIntro />}
          right={<ServicesOverview />}
          sx={{ minHeight: { md: fluid(900, 1373) } }}
          rightSx={{ pb: { xs: fluid(56, 0), md: 0 } }}
        />
      </main>
      <Footer />
    </>
  )
}
