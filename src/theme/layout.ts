import { fluid } from '@/utils/fluid'

// Rozměry rozložení z návrhu (desktop 1920px)
// Šířka, od které se drží zalomení řádků přesně podle návrhu
export const designWidthQuery = '@media (min-width: 1800px)'

export const layout = {
  // Hlavní obsah roztažený mezi hlavičku a patičku
  main: { flexGrow: 1, display: 'flex', flexDirection: 'column' } as const,
  // Boční okraj stránky (logo, patička)
  pageGutter: { xs: '20px', md: fluid(11, 140) },
  // Levý sloupec obsahu v levé polovině
  leftColumn: {
    ml: { xs: '20px', md: fluid(11, 278) },
    width: { xs: 'calc(100% - 40px)', md: fluid(227, 536) },
  },
  // Pravý sloupec obsahu v pravé polovině
  rightColumn: {
    ml: { xs: '20px', md: fluid(0, 146) },
    width: { xs: 'calc(100% - 40px)', md: fluid(233, 674) },
  },
  // Úzký pravý sloupec (texty služeb, kontakt)
  rightNarrowColumn: {
    ml: { xs: '20px', md: fluid(0, 146) },
    width: { xs: 'calc(100% - 40px)', md: fluid(233, 536) },
  },
}
