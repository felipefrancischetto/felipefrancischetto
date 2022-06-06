import '../styles/globals.css'
import 'remixicon/fonts/remixicon.css'

import type { AppProps } from 'next/app'
import Home from '../layout/Home/Home'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Home>
      <Component {...pageProps} />
    </Home>
  )
}

export default MyApp
