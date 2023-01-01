import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import About from '../components/About'
import Hero from '../components/Hero'
import Works from '../components/Works'
import { languages } from '../constants/languages'
import { motion } from 'framer-motion'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Eduardo Sanchez</title>
        <meta
          name="description"
          content="Eduardo Sanchez is a front end developer who creates wonderful user experiences through the web."
        />
      </Head>
      <main className="text-primary-50">
        <Hero />
        <Works />
        <About />
        <Loader />
      </main>
    </>
  )
}

function Loader() {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((oldNum) => (oldNum > 90 ? 0 : oldNum + 1))
    }, 600)
    return () => {
      clearInterval(timer)
    }
  }, [])
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: index > 5 ? '-100vh' : 0 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      className="fixed inset-0 flex items-center justify-center bg-primary-50 text-primary-900"
    >
      {/* Background, hides the circle from the bottom */}
      <div className="absolute inset-0 z-10 flex items-center justify-center bg-primary-50">
        <p className="text-5xl font-bold">{languages[index].hello}</p>
      </div>
      <div className="absolute bottom-0 top-[unset] translate-y-full w-full circle-container h-[15vh] z-0 select-none pointer-events-none">
        <motion.div
          initial={{ height: '750%' }}
          animate={{ height: index > 5 ? '0%' : '750%' }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="absolute w-[150%]  block rounded-[50%] transform-gpu bg-primary-100 left-[50%] -translate-x-[50%] -translate-y-[73.3%]"
        />
      </div>
    </motion.div>
  )
}

export default Home
