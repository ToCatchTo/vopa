import { Box } from '@mui/material'
import content from '@/content/content'
import HeroBoxes from '@/components/HeroBoxes'
import { layout, mobileGutter } from '@/theme/layout'
import { fluid } from '@/utils/fluid'

// Úvodní sekce domovské stránky s fotkou na celou šířku
export default function HomeHero() {
  const { home } = content
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        minHeight: { xs: '697px', md: fluid(600, 981) },
        pt: { xs: '340px', md: fluid(150, 410) },
        pb: { xs: '82px', md: 0 },
      }}
    >
      <Box
        component="img"
        src="/images/home_hero.webp"
        alt={home.heroImageAlt}
        fetchPriority="high"
        sx={{
          position: 'absolute',
          top: 0,
          // Fotka v návrhu přesahuje sekci: 2140 × 1572 posunutá o 220 doleva (sekce 1920 × 981)
          left: { xs: 0, md: '-11.46%' },
          width: { xs: '100%', md: '111.46%' },
          height: { xs: '100%', md: '160.2%' },
          objectFit: 'cover',
          objectPosition: { xs: '33% 100%', md: 'center top' },
        }}
      />
      <HeroBoxes
        variant="home"
        animated
        title={home.heroTitle}
        description={home.heroText}
        sx={{ position: 'relative', ml: layout.leftColumn.ml, mr: { xs: mobileGutter, md: 0 } }}
      />
    </Box>
  )
}
