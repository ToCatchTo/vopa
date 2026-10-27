import { Box } from '@mui/material'
import CtaBox from '@/components/CtaBox'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HeroBoxes from '@/components/HeroBoxes'
import JsonLd from '@/components/JsonLd'
import PhotoColumn from '@/components/PhotoColumn'
import Seo from '@/components/Seo'
import ServiceDetail from '@/components/ServiceDetail'
import SplitLayout from '@/components/SplitLayout'
import content, { type ServiceContent } from '@/content/content'
import { SEO, serviceJsonLd, type SeoMeta } from '@/seo'
import { layout } from '@/theme/layout'
import { fluid } from '@/utils/fluid'

interface ServicePageProps {
  service: ServiceContent
}

// Detail služby
export default function ServicePage({ service }: ServicePageProps) {
  const seo: SeoMeta = SEO[service.path as keyof typeof SEO]
  return (
    <>
      <Seo path={service.path} title={seo.title} description={seo.description} />
      <JsonLd data={serviceJsonLd(service.title, seo.description, service.path)} />
      <Header />
      <main>
        <SplitLayout
          leftBackground={{ image: service.heroImage }}
          sx={{ minHeight: { md: fluid(1500, 2354) } }}
          left={
            <Box sx={{ pt: { xs: '24px', md: fluid(200, 410) }, pb: { xs: '40px', md: 0 } }}>
              <HeroBoxes
                variant="service"
                title={[service.title]}
                description={service.intro}
                sx={{ ml: layout.leftColumn.ml, mr: { xs: '20px', md: 0 }, position: 'relative', zIndex: 1 }}
              />
              <PhotoColumn
                src={service.photo}
                alt={service.photoAlt}
                count={content.servicePhotoCount}
                sx={{ ...layout.leftColumn, mt: fluid(32, 98), display: { xs: 'none', md: 'block' } }}
              />
            </Box>
          }
          right={
            <Box sx={{ ...layout.rightNarrowColumn, pt: { xs: '40px', md: fluid(350, 544) }, pb: { xs: '56px', md: 0 } }}>
              <Box sx={{ minHeight: { md: fluid(450, 650) } }}>
                <ServiceDetail sections={service.sections} />
              </Box>
              <CtaBox
                title={service.cta.title}
                text={service.cta.text}
                sx={{ mt: fluid(48, 106), ml: { xs: 0, md: fluid(-69, 0) }, width: { md: fluid(350, 674) }, maxWidth: 'none' }}
              />
            </Box>
          }
        />
      </main>
      <Footer />
    </>
  )
}
