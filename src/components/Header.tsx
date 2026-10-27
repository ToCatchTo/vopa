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

// Hlavička: logo se posouvá s obsahem, kontaktní box a menu jsou fixně nahoře
export default function Header({ logo = 'small', showContactBox = true }: HeaderProps) {
  // Výška fixního bloku na mobilu (místo v toku stránky)
  const stackHeight = showContactBox
    ? `calc(${fluid(84, 135)} + ${fluid(16, 30)} + ${fluid(60, 88)})`
    : `calc(${fluid(16, 79)} + ${fluid(60, 88)})`
  return (
    <Box
      component="header"
      sx={{
        position: { xs: 'relative', md: 'absolute' },
        top: 0,
        left: 0,
        right: 0,
        zIndex: 20,
        px: layout.pageGutter,
        pointerEvents: { md: 'none' },
        '& > *': { pointerEvents: 'auto' },
      }}
    >
      <Box sx={{ height: stackHeight, display: { md: 'none' } }} />
      {logo !== 'none' && <Logo sx={logoStyles[logo]} />}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: { xs: '20px', md: 'auto' },
          right: layout.pageGutter,
          // Šířka podle obsahu boxu, aby se text i tlačítko vešly na všech desktopech
          width: { md: fluid(352, 540) },
          zIndex: 30,
        }}
      >
        {showContactBox && <ContactBox />}
        <Box sx={{ mt: showContactBox ? fluid(16, 30) : fluid(16, 79) }}>
          <MenuDropdown />
        </Box>
      </Box>
    </Box>
  )
}
