// ** Style Imports
import '@/styles/globals.css'
import { ThemeProvider } from '@mui/material/styles'
import { GlobalStyles } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '@/theme'

// ** Redux Imports
import { Provider } from 'react-redux'
import { store } from '@/store'

// ** Next Imports
import type { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles styles={{ backgroundColor: 'blue' }} />
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default App
