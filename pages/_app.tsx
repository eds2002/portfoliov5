import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { hotjar } from 'react-hotjar'
import { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import PageTransition from '../components/PageTransition'

function MyApp({ Component, pageProps, router }: AppProps) {
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

  const onExitComplete = () => {
    window.scrollTo({ top: 0 })
  }
  return (
    <AnimatePresence onExitComplete={onExitComplete} mode="popLayout">
      <PageTransition />
      <Component key={router.route} {...pageProps} />
    </AnimatePresence>
  )
}

export default MyApp
