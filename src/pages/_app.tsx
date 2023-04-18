// ** Style Imports
import '@/styles/globals.css'

// ** Next Imports
import type { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div className="inner_body">
      <Component {...pageProps} />
    </div>
  )
}

export default App
