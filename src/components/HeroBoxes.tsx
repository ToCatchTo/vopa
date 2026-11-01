import { Box } from '@mui/material'
import MultiLine from '@/components/MultiLine'
import type { SxProps, Theme } from '@mui/material/styles'
import { fadeUp } from '@/theme/interactions'
import { designWidthQuery } from '@/theme/layout'
import { colors, greenOverlay } from '@/theme/theme'
import { text } from '@/theme/textStyles'
import { fluid } from '@/utils/fluid'
import { nbsp } from '@/utils/typography'

interface HeroBoxesProps {
  // Řádky nadpisu (každý začíná na novém řádku)
  title: string[]
  description: string
  variant: 'home' | 'service'
  animated?: boolean
  sx?: SxProps<Theme>
}

// Šířka popisu služby: k polovině obrazovky plus přesah do pravé poloviny
const serviceBoxWidth = `calc(50vw - ${fluid(11, 278)} + ${fluid(30, 52)})`

// Rozměry boxů podle varianty
const variants = {
  home: {
    title: text.heroTitle,
    titleBox: { pt: fluid(12, 26), pb: fluid(8, 20) },
    // Perex nesmí sahat až k okraji obrazovky
    textBox: { pt: fluid(0, 6), pb: fluid(30, 48), maxWidth: { md: fluid(420, 760) } },
  },
  service: {
    title: text.serviceTitle,
    titleBox: { pt: fluid(12, 55), pb: 0, minWidth: { md: fluid(227, 536) } },
    // Box vždy o kousek přesahuje do pravé poloviny (i na širokých obrazovkách)
    textBox: { pt: fluid(16, 33), pb: fluid(30, 53), minWidth: { md: serviceBoxWidth }, maxWidth: { md: serviceBoxWidth } },
  },
}

// Zelené boxy s nadpisem a popisem v úvodu stránky
export default function HeroBoxes({ title, description, variant, animated = false, sx }: HeroBoxesProps) {
  const v = variants[variant]
  const boxBase = { bgcolor: greenOverlay, color: colors.white, px: fluid(20, 64) }
  return (
    // Na mobilu tvoří oba boxy jeden blok o výšce z návrhu
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'stretch', md: 'flex-start' }, minHeight: { xs: '275px', md: 0 }, ...(animated ? fadeUp(0.15) : {}), ...sx } as SxProps<Theme>}>
      <Box sx={{ ...boxBase, ...v.titleBox, maxWidth: '100%' }}>
        <Box component="h1" sx={{ ...v.title, m: 0 }}>
          {title.map((line) => (
            <Box component="span" key={line} sx={{ display: 'block' }}>
              {nbsp(line)}
            </Box>
          ))}
        </Box>
      </Box>
      <Box sx={{ ...boxBase, ...v.textBox, flexGrow: { xs: 1, md: 0 }, [designWidthQuery]: { width: 'max-content', maxWidth: 'none' } } as SxProps<Theme>}>
        <Box component="p" sx={{ ...text.heroText, m: 0 }}>
          <MultiLine text={description} />
        </Box>
      </Box>
    </Box>
  )
}
