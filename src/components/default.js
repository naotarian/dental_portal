import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      light: '#6adae7',
      main: '#0e90c4',
      dark: '#71ccda',
      contrastText: '#fff',
    },
    secondary: {
      // light: '#ff7961',
      light: '#27AE60',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
  typography: {
    fontFamily: [
      '"Yu Gothic"',
      'YuGothic',
      '"Hiragino Sans"',
      '"Hiragino Kaku Gothic ProN"',
      'Verdana',
      '"メイリオ"',
      'Meiryo',
      'sans-serif',
    ].join(','),
    body1: {
      fontWeight: 500,
      color: 'rgba(0, 0, 0, 0.6)',
    },
    body1White: {
      fontWeight: 500,
      color: '#fff',
    },
    body2: {
      fontWeight: 700,
      color: 'rgba(0, 0, 0, 0.6)',
      // fontSize: '1.5rem'
    },
    h1: {
      fontSize: 22,
      lineHeight: 2,
      fontWeight: 700,
    },
    h2: {
      fontSize: 18,
      lineHeight: 2,
      fontWeight: 700,
    },
    button: {
      textTransform: 'none',
    },
  },
})

export default theme
