// ** Style Imports
import '@/styles/globals.css'

// ** Redux Imports
import { Provider } from 'react-redux'
import { store } from '@/store'

// ** Next Imports
import type { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <div className="inner_body">
        <Component {...pageProps} />
      </div>
    </Provider>
  )
}

export default App
