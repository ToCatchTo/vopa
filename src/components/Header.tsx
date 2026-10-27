import { Box } from '@mui/material'
import ContactBox from '@/components/ContactBox'
import Logo from '@/components/Logo'
import MenuDropdown from '@/components/MenuDropdown'
import { layout } from '@/theme/layout'
import { fluid } from '@/utils/fluid'

interface HeaderProps {
  logo?: 'large' | 'small' | 'none'
  showContactBox?: boolean
}

// Rozměry a pozice loga podle varianty
const logoStyles = {
  large: { width: fluid(96, 260), mt: { xs: '16px', md: fluid(40, 83) } },
  small: { width: fluid(96, 170), mt: { xs: '16px', md: fluid(60, 126) } },
}

// Hlavička: logo, kontaktní box a menu (na desktopu přes obsah stránky)
export default function Header({ logo = 'small', showContactBox = true }: HeaderProps) {
  return (
    <Box
      component="header"
      sx={{
        position: { xs: 'relative', md: 'absolute' },
        top: 0,
        left: 0,
        right: 0,
        zIndex: 20,
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: { xs: 'stretch', md: 'flex-start' },
        justifyContent: 'space-between',
        px: layout.pageGutter,
        pointerEvents: { md: 'none' },
        '& > *': { pointerEvents: 'auto' },
      }}
    >
      {logo !== 'none' ? (
        <Logo sx={{ ...logoStyles[logo], display: { xs: 'none', md: 'block' } }} />
      ) : (
        <Box />
      )}
      <Box sx={{ width: { xs: '100%', md: fluid(300, 536) } }}>
        {showContactBox && <ContactBox />}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px', mt: showContactBox ? fluid(16, 30) : fluid(16, 79) }}>
          {logo !== 'none' && <Logo sx={{ ...logoStyles[logo], mt: 0, display: { xs: 'block', md: 'none' }, flexShrink: 0 }} />}
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <MenuDropdown />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
