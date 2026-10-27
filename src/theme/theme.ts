import { createTheme } from '@mui/material/styles'

// Barvy podle XD návrhu
export const colors = {
  green: '#137C3E',
  darkGreen: '#354D3F',
  lightGreen: '#F0F7F3',
  white: '#FFFFFF',
  grey: '#707070',
  black: '#000000',
  shadow: 'rgba(0, 0, 0, 0.16)',
}

// Overlay zelených boxů v hero sekci
export const greenOverlay = 'rgba(19, 124, 62, 0.9)'

export const fonts = {
  sans: '"DM Sans", Arial, sans-serif',
  serif: '"DM Serif Display", Georgia, serif',
}

const theme = createTheme({
  palette: {
    primary: { main: colors.green, contrastText: colors.white },
    secondary: { main: colors.darkGreen },
    background: { default: colors.white },
    text: { primary: colors.darkGreen },
  },
  typography: {
    fontFamily: fonts.sans,
  },
  breakpoints: {
    values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  },
})

export default theme
