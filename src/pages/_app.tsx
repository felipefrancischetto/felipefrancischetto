import '../styles/globals.css'
import 'remixicon/fonts/remixicon.css'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
