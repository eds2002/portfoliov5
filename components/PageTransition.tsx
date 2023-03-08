import Lenis from '@studio-freight/lenis'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import React, { useCallback, useContext, useEffect } from 'react'
import { ProjectsContext } from '../context/ProjectsProvider'
import slugify from '../utils/slugify'

export default function PageTransition() {
  const router = useRouter()
  const { projects } = useContext(ProjectsContext)

  const pageTitle = useCallback(() => {
    const { tab } = router.query

    const projectObj = projects.filter(
      (prj) => slugify(prj.projectName!) === tab
    )[0]
    return projectObj?.projShortName ?? 'Home'
  }, [router.query])

  return (
    <motion.div
      initial={{ y: '100vh' }}
      animate={{ y: '0%' }}
      exit={{ y: '-100%' }}
      transition={{ duration: 0.8, ease: [0.44, 0.38, 0, 0.99] }}
      className="fixed inset-0 z-20 flex items-center justify-center bg-primary-50"
    >
      <CircleTop />
      <motion.p
        initial={{ y: 50, scale: 0.7, opacity: 0.5 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        exit={{ y: 50, scale: 0.7, opacity: 0.5 }}
        transition={{ duration: 0.8, ease: [0.44, 0.38, 0, 0.99] }}
        className="relative z-20 text-5xl font-bold text-center text-black"
      >
        {pageTitle()}
      </motion.p>
      <CircleBottom />
    </motion.div>
  )
}

const CircleTop = () => (
  <div className="absolute top-0 bottom-[unset] translate-y-full w-full circle-container h-[15vh] z-0 select-none pointer-events-none">
    <motion.div
      initial={{ height: '0%' }}
      animate={{ height: '750%' }}
      exit={{ height: '0%' }}
      transition={{ duration: 0.8, ease: [0.44, 0.38, 0, 0.99] }}
      className="absolute w-[150%]  block rounded-[50%] transform-gpu bg-primary-50 left-[50%] -translate-x-[50%] -translate-y-[73.3%]"
    />
  </div>
)
const CircleBottom = () => (
  <div className="absolute bottom-0 top-[unset] translate-y-full w-full circle-container h-[15vh] z-0 select-none pointer-events-none">
    <motion.div
      initial={{ height: '750%' }}
      animate={{ height: '750%' }}
      exit={{ height: '0%' }}
      transition={{ duration: 0.8, ease: [0.44, 0.38, 0, 0.99] }}
      className="absolute w-[150%]  block rounded-[50%] transform-gpu bg-primary-50 left-[50%] -translate-x-[50%] -translate-y-[73.3%]"
    />
  </div>
)
