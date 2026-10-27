import { createTheme } from '@mui/material/styles'

// Barvy a typografie podle XD návrhu (doplní se po načtení designu)
const theme = createTheme({
  palette: {
    primary: { main: '#000000' },
  },
  typography: {
    fontFamily: 'sans-serif',
  },
})

export default theme
