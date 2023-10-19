import React from 'react'
import Routes from './Routes'
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles'

const theme = createTheme({
  palette: {
    secondary: {
      main: '#FFFFFF',
    },
  },
})

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Routes />
    </MuiThemeProvider>
  )
}

export default App
