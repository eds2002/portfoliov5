import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Roboto } from '@next/font/google'

const roboto = Roboto({
  subsets: ['cyrillic-ext'],
  style: ['normal'],
  weight: ['300', '400', '500', '700', '900'],
})
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
