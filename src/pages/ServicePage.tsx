import { Box } from '@mui/material'
import CtaBox from '@/components/CtaBox'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HeroBoxes from '@/components/HeroBoxes'
import JsonLd from '@/components/JsonLd'
import PhotoCarousel from '@/components/PhotoCarousel'
import PhotoColumn from '@/components/PhotoColumn'
import Seo from '@/components/Seo'
import ServiceDetail from '@/components/ServiceDetail'
import SplitLayout from '@/components/SplitLayout'
import content, { type ServiceContent } from '@/content/content'
import { SEO, serviceJsonLd, type SeoMeta } from '@/seo'
import { layout, mobileGutter } from '@/theme/layout'
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
      <Box component="main" sx={layout.main}>
        <SplitLayout
          leftBackground={{ image: service.heroImage }}
          sx={{ minHeight: { md: fluid(1500, 2354) } }}
          left={
            <Box sx={{ pt: { xs: '340px', md: fluid(200, 410) }, pb: { xs: '82px', md: 0 } }}>
              <HeroBoxes
                variant="service"
                title={[service.title]}
                description={service.intro}
                sx={{ ml: layout.leftColumn.ml, mr: { xs: mobileGutter, md: `calc(-1 * ${fluid(30, 52)})` }, position: 'relative', zIndex: 1 }}
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
            <Box sx={{ ...layout.rightNarrowColumn, pt: { xs: '80px', md: fluid(350, 544) }, pb: { xs: '101px', md: fluid(60, 100) } }}>
              <Box sx={{ minHeight: { md: fluid(450, 650) } }}>
                <ServiceDetail sections={service.sections} />
              </Box>
              <PhotoCarousel
                src={service.photo}
                alt={service.photoAlt}
                count={content.servicePhotoCount}
                sx={{ display: { xs: 'block', md: 'none' }, mt: '83px', mx: `-${mobileGutter}` }}
              />
              <CtaBox
                title={service.cta.title}
                text={service.cta.text}
                sx={{ mt: { xs: '102px', md: fluid(48, 106) }, width: { md: `min(${fluid(322, 674)}, calc(50vw - ${fluid(0, 146)} - ${fluid(11, 140)}))` }, maxWidth: 'none' }}
              />
            </Box>
          }
        />
      </Box>
      <Footer />
    </>
  )
}
