import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Poppins } from '@next/font/google'

const poppins = Poppins({
  style: ['normal'],
  weight: ['400', '500', '600', '700', '800', '900'],
})
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={poppins.className}>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
