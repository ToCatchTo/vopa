import { Box } from '@mui/material'
import content from '@/content/content'
import { visuallyHidden } from '@/theme/textStyles'

// Domovská stránka
export default function HomePage() {
  return (
    <Box component="main">
      <Box component="h1" sx={visuallyHidden}>
        {content.brand.name}
      </Box>
    </Box>
  )
}
