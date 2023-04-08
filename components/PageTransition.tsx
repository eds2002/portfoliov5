import Lenis from '@studio-freight/lenis'
import { AnimationControls, motion, useAnimation } from 'framer-motion'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect } from 'react'
import { useProjectsStore } from '../utils/projectsStore'

export default function PageTransition() {
  const router = useRouter()
  const animationControls = useAnimation()

  useEffect(() => {
    async function test() {
      animationControls.set('hidden')
      animationControls.start('visible')
      await new Promise((resolve) => setTimeout(resolve, 500))
      animationControls.start('exit')
    }
    router.events.on('routeChangeStart', test)

    return () => {
      router.events.off('routeChangeStart', test)
    }
  }, [router.events, animationControls])

  const selectedName = useProjectsStore((state: any) => state.selectedProject)

  return (
    <motion.div
      key="loading"
      initial="hidden"
      exit="exit"
      animate={animationControls}
      variants={containerVariants}
      onAnimationComplete={(variant) => {
        if (variant === 'exit') {
          animationControls.set('hidden')
          window.scrollTo({ top: 0 })
        }
      }}
      transition={{ duration: 1, ease: [0.44, 0.38, 0, 0.99] }}
      className="fixed inset-0 z-20 flex items-center justify-center bg-primary-50"
    >
      <CircleTop animate={animationControls} />
      <motion.p
        initial={{ y: 50, scale: 0.7, opacity: 0.5 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        exit={{ y: 50, scale: 0.7, opacity: 0.5 }}
        transition={{ duration: 1, ease: [0.44, 0.38, 0, 0.99] }}
        className="relative z-20 text-5xl font-bold text-center text-black"
      >
        {selectedName}
      </motion.p>
      <CircleBottom animate={animationControls} />
    </motion.div>
  )
}

const containerVariants = {
  hidden: {
    y: '100vh',
  },
  visible: {
    y: 0,
  },
  exit: {
    y: '-100vh',
  },
}

const CircleTop = ({ animate }: { animate: any }) => {
  const variants = {
    hidden: {
      height: '0%',
    },
    visible: {
      height: '750%',
    },
    exit: {
      height: '0%',
    },
  }
  return (
    <div className="absolute top-0 bottom-[unset] translate-y-full w-full circle-container h-[15vh] z-0 select-none pointer-events-none">
      <motion.div
        initial="hidden"
        animate={animate}
        variants={variants}
        transition={{ duration: 1, ease: [0.44, 0.38, 0, 0.99] }}
        className="absolute w-[150%]  block rounded-[50%] transform-gpu bg-primary-50 left-[50%] -translate-x-[50%] -translate-y-[73.3%]"
      />
    </div>
  )
}
const CircleBottom = ({ animate }: { animate: AnimationControls }) => {
  const variants = {
    hidden: {
      height: '750%',
    },
    visible: {
      height: '750%',
    },
    exit: {
      height: '0%',
    },
  }
  return (
    <div className="absolute bottom-0 top-[unset] translate-y-full w-full circle-container h-[15vh] z-0 select-none pointer-events-none">
      <motion.div
        initial={'hidden'}
        animate={animate}
        exit="exit"
        variants={variants}
        transition={{ duration: 1, ease: [0.44, 0.38, 0, 0.99] }}
        className="absolute w-[150%]  block rounded-[50%] transform-gpu bg-primary-50 left-[50%] -translate-x-[50%] -translate-y-[73.3%]"
      />
    </div>
  )
}
