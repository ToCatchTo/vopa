import { fluid } from '@/utils/fluid'

// Rozměry rozložení z návrhu (mobil 393px, desktop 1920px)
// Boční okraj obsahu na mobilu
export const mobileGutter = '36px'
const mobileWidth = `calc(100% - 2 * ${mobileGutter})`

// Šířka, od které se drží zalomení řádků přesně podle návrhu
export const designWidthQuery = '@media (min-width: 1800px)'

export const layout = {
  // Hlavní obsah roztažený mezi hlavičku a patičku
  main: { flexGrow: 1, display: 'flex', flexDirection: 'column' } as const,
  // Boční okraj stránky (logo, patička)
  pageGutter: { xs: mobileGutter, md: fluid(11, 140) },
  // Levý sloupec obsahu v levé polovině
  leftColumn: {
    ml: { xs: mobileGutter, md: fluid(11, 278) },
    width: { xs: mobileWidth, md: fluid(227, 536) },
  },
  // Pravý sloupec obsahu v pravé polovině
  rightColumn: {
    ml: { xs: mobileGutter, md: fluid(0, 146) },
    width: { xs: mobileWidth, md: fluid(233, 674) },
  },
  // Úzký pravý sloupec (texty služeb, kontakt)
  rightNarrowColumn: {
    ml: { xs: mobileGutter, md: fluid(0, 146) },
    width: { xs: mobileWidth, md: fluid(233, 536) },
  },
}
