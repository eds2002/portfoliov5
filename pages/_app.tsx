import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { hotjar } from 'react-hotjar'
import { useEffect } from 'react'

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
    <main>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
