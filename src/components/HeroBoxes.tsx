import { Box } from '@mui/material'
import MultiLine from '@/components/MultiLine'
import type { SxProps, Theme } from '@mui/material/styles'
import { fadeUp } from '@/theme/interactions'
import { designWidthQuery } from '@/theme/layout'
import { colors, greenOverlay } from '@/theme/theme'
import { text } from '@/theme/textStyles'
import { fluid } from '@/utils/fluid'

interface HeroBoxesProps {
  // Řádky nadpisu (každý na samostatném řádku na desktopu)
  title: string[]
  description: string
  variant: 'home' | 'service'
  animated?: boolean
  sx?: SxProps<Theme>
}

// Rozměry boxů podle varianty
const variants = {
  home: {
    title: text.heroTitle,
    titleBox: { pt: fluid(16, 26), pb: fluid(8, 20) },
    textBox: { pt: fluid(8, 6), pb: fluid(20, 48) },
  },
  service: {
    title: text.serviceTitle,
    titleBox: { pt: fluid(16, 55), pb: 0, minWidth: { md: fluid(227, 536) } },
    // Box smí přesahovat do pravé poloviny jen o kousek
    textBox: { pt: fluid(12, 33), pb: fluid(20, 53), maxWidth: { md: `calc(50vw - ${fluid(11, 278)} + ${fluid(0, 52)})` } },
  },
}

// Zelené boxy s nadpisem a popisem v úvodu stránky
export default function HeroBoxes({ title, description, variant, animated = false, sx }: HeroBoxesProps) {
  const v = variants[variant]
  const boxBase = { bgcolor: greenOverlay, color: colors.white, px: fluid(20, 64) }
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', ...(animated ? fadeUp(0.15) : {}), ...sx } as SxProps<Theme>}>
      <Box sx={{ ...boxBase, ...v.titleBox, maxWidth: '100%' }}>
        <Box component="h1" sx={{ ...v.title, m: 0 }}>
          {title.map((line, i) => (
            <Box component="span" key={line} sx={{ display: { md: 'block' } }}>
              {i > 0 && ' '}
              {line}
            </Box>
          ))}
        </Box>
      </Box>
      <Box sx={{ ...boxBase, ...v.textBox, [designWidthQuery]: { width: 'max-content', maxWidth: 'none' } } as SxProps<Theme>}>
        <Box component="p" sx={{ ...text.heroText, m: 0 }}>
          <MultiLine text={description} />
        </Box>
      </Box>
    </Box>
  )
}
