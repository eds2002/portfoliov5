import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Roboto } from '@next/font/google'
import { hotjar } from 'react-hotjar'
import { useEffect } from 'react'

const roboto = Roboto({
  subsets: ['cyrillic-ext'],
  style: ['normal'],
  weight: ['300', '400', '500', '700', '900'],
})
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    hotjar.initialize(
      process.env.NEXT_PUBLIC_HJID as any,
      process.env.NEXT_PUBLIC_HSJV as any
    )

    hotjar.identify('USER_ID', { userProperty: 'value' })

    hotjar.event('button-click')

    // Update SPA state
    hotjar.stateChange('/my/page')

    if (hotjar.initialized()) {
      hotjar.identify('USER_ID', { userProperty: 'value' })
    }
  }, [])
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
