import { Box } from '@mui/material'
import ContactBox from '@/components/ContactBox'
import Logo from '@/components/Logo'
import MenuDropdown from '@/components/MenuDropdown'
import { layout, mobileGutter } from '@/theme/layout'
import { fluid } from '@/utils/fluid'

interface HeaderProps {
  logo?: 'large' | 'small' | 'none'
  showContactBox?: boolean
}

// Rozměry a pozice loga podle varianty
const logoStyles = {
  large: { width: fluid(96, 260), mt: fluid(40, 83) },
  small: { width: fluid(96, 170), mt: fluid(60, 126) },
}

// Hlavička: logo se posouvá s obsahem, kontaktní box a menu jsou fixně nahoře
// Na mobilu je logo součástí kontaktního boxu, který se zobrazuje vždy
export default function Header({ logo = 'small', showContactBox = true }: HeaderProps) {
  return (
    <Box
      component="header"
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 20,
        px: layout.pageGutter,
        pointerEvents: 'none',
        '& > *': { pointerEvents: 'auto' },
      }}
    >
      {logo !== 'none' && <Logo sx={{ ...logoStyles[logo], display: { xs: 'none', md: 'block' } }} />}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: { xs: mobileGutter, md: 'auto' },
          right: layout.pageGutter,
          // Šířka podle obsahu boxu, aby se text i tlačítko vešly na všech desktopech
          width: { md: fluid(352, 540) },
          zIndex: 30,
        }}
      >
        <ContactBox sx={{ display: showContactBox ? 'flex' : { xs: 'flex', md: 'none' } }} />
        <Box sx={{ mt: showContactBox ? fluid(18, 30) : { xs: '18px', md: fluid(18, 79) } }}>
          <MenuDropdown />
        </Box>
      </Box>
    </Box>
  )
}
