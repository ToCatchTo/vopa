import { Box } from '@mui/material'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Seo from '@/components/Seo'
import content from '@/content/content'
import { layout } from '@/theme/layout'
import { inlineLink, text } from '@/theme/textStyles'
import { fluid } from '@/utils/fluid'

// Neexistující stránka
export default function NotFoundPage() {
  const { pathname } = useLocation()
  const { notFound } = content
  return (
    <>
      <Seo path={pathname} title={notFound.title} description={notFound.text} noindex />
      <Header showContactBox={false} />
      <Box component="main" sx={{ ...layout.leftColumn, flexGrow: 1, pt: { xs: '40px', md: fluid(260, 399) }, minHeight: { md: fluid(700, 1079) } }}>
        <Box component="h1" sx={{ ...text.serifHeading, m: 0 }}>
          {notFound.title}
        </Box>
        <Box component="p" sx={{ ...text.body, m: 0, mt: fluid(16, 24) }}>
          {notFound.text}{' '}
          <Box component={RouterLink} to={content.paths.home} sx={inlineLink}>
            {notFound.link}
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  )
}
