import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import React, { useCallback } from 'react'

export default function PageTransition() {
  const router = useRouter()

  const pageTitle = useCallback(() => {
    const { tab } = router.query
    switch (tab) {
      case 'sanchez-cleaning':
        return 'Sanchez Cleaning'
      case 'hufi':
        return 'Hufi'
      case 'transakt-beta':
        return 'Transakt'
      case 'poshly-finance':
        return 'Poshly'
      case 'bula':
        return 'Bula'
      case 'todo-app':
        return 'Todo'
      default: {
        return 'Home'
      }
    }
  }, [router.query])

  return (
    <motion.div
      initial={{ y: '100vh' }}
      animate={{ y: '0%' }}
      exit={{ y: '-100%' }}
      transition={{ duration: 0.8, ease: [0.44, 0.38, 0, 0.99] }}
      className="fixed inset-0 z-20 flex items-center justify-center bg-white"
    >
      <CircleTop />
      <motion.p className="relative z-20 text-5xl font-bold text-black">
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
