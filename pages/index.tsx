import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import About from '../components/About'
import Hero from '../components/Hero'
import { languages } from '../constants/languages'
import { motion, useScroll, useTransform } from 'framer-motion'
import Works from '../components/Works'
import Copyright from '../components/Copyright'

const Home: NextPage = () => {
  const { scrollYProgress } = useScroll()
  const height = useTransform(scrollYProgress, [0.5, 1], ['500%', '0%'])
  const [displayContent, setDisplayContent] = useState(false)
  return (
    <>
      <Head>
        <title>Eduardo Sanchez</title>
        <meta
          name="description"
          content="Eduardo Sanchez is a front end developer who creates wonderful user experiences through the web."
        />
      </Head>
      <main className="overflow-x-hidden text-primary-50">
        {displayContent && (
          <>
            <div className="relative ">
              <Hero />
              <Works />
              <div className="absolute bottom-0 top-[unset] translate-y-full w-full circle-container h-[15vh]  select-none pointer-events-none z-[1] ">
                <motion.div
                  initial={{ height: '500%' }}
                  style={{ height }}
                  transition={{ duration: 1, ease: [0.45, 0, 0, 1] }}
                  className="absolute w-[150%]  block rounded-[50%] transform-gpu bg-primary-850 left-[50%] -translate-x-[50%] -translate-y-[50%] shadow-xl"
                />
              </div>
            </div>
            <About />
            <Copyright />
          </>
        )}
        <Loader setDisplayContent={setDisplayContent} />
      </main>
    </>
  )
}

function Loader({
  setDisplayContent,
}: {
  setDisplayContent: (val: boolean) => void
}) {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((oldNum) => oldNum + 1)
    }, 200)
    return () => {
      clearInterval(timer)
    }
  }, [])

  useEffect(() => {
    if (index >= 7) {
      setDisplayContent(true)
    }
  }, [index, setDisplayContent])
  return (
    <>
      {index < 25 && (
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: index > 5 ? '-100vh' : 0 }}
          transition={{ duration: 1, ease: [0.45, 0, 0, 1] }}
          className="fixed inset-0 flex items-center justify-center bg-primary-50 text-primary-900 z-[9999999]"
        >
          {/* Background, hides the circle from the bottom */}
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-primary-50">
            <p className="text-5xl font-bold">{languages[index].hello}</p>
          </div>
          <div className="absolute bottom-0 top-[unset] translate-y-full w-full circle-container h-[15vh] z-0 select-none pointer-events-none">
            <motion.div
              initial={{ height: '750%' }}
              animate={{ height: index > 5 ? '0%' : '750%' }}
              transition={{ duration: 1, ease: [0.45, 0, 0, 1] }}
              className="absolute w-[150%]  block rounded-[50%] transform-gpu bg-primary-50 left-[50%] -translate-x-[50%] -translate-y-[73.3%]"
            />
          </div>
        </motion.div>
      )}
    </>
  )
}

export default Home
