import { Box } from '@mui/material'
import content from '@/content/content'
import HeroBoxes from '@/components/HeroBoxes'
import { layout } from '@/theme/layout'
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
        justifyContent: { xs: 'flex-end', md: 'flex-start' },
        minHeight: { xs: '480px', md: fluid(600, 981) },
        pt: { xs: '160px', md: fluid(150, 410) },
      }}
    >
      <Box
        component="img"
        src="/images/maintenance_hero.webp"
        alt={home.heroImageAlt}
        fetchPriority="high"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          // Fotka v návrhu přesahuje sekci (1411 / 981)
          height: { xs: '100%', md: '143.8%' },
          objectFit: 'cover',
          objectPosition: 'center top',
        }}
      />
      <HeroBoxes
        variant="home"
        animated
        title={home.heroTitle}
        description={home.heroText}
        sx={{ position: 'relative', ml: layout.leftColumn.ml, mr: { xs: '20px', md: 0 } }}
      />
    </Box>
  )
}
