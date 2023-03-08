import { useContext, useEffect, useState } from 'react'
import Head from 'next/head'
import About from '../components/About'
import Hero from '../components/Hero'
import { languages } from '../constants/languages'
import {
  AnimatePresence,
  motion,
  MotionValue,
  useAnimationControls,
  useScroll,
  useTransform,
} from 'framer-motion'
import Works from '../components/Works'
import Copyright from '../components/Copyright'
import Lenis from '@studio-freight/lenis'
import { useRouter } from 'next/router'
import ExpandProject from '../components/ExpandProject'
import { delay } from '../utils/delay'
import PageTransition from '../components/PageTransition'
import { client } from '../utils/sanityClient'
import { Project } from '../interfaces'
import { ProjectsContext } from '../context/ProjectsProvider'
import { EASE_CONFIG, EASE_IN_OUT_BACK } from '../constants/animationValues'

export default function Home({ projects }: { projects: Project[] }) {
  const { setProjects } = useContext(ProjectsContext)
  const { scrollYProgress } = useScroll()
  const height = useTransform(scrollYProgress, [0.5, 1], ['500%', '0%'])
  const [displayContent, setDisplayContent] = useState(false)
  const router = useRouter()
  const [expand, setExpand] = useState(false)
  const [project, setProject] = useState('')
  const [transition, setTransition] = useState(false)

  useEffect(() => {
    if (!router.query.tab) {
      ;(async () => {
        setTransition(true)
        await delay(1000)
        window.scrollTo(0, 0)
        setTransition(false)
        setProject('')
      })()
    } else {
      ;(async () => {
        setTransition(true)
        await delay(1000)
        setProject(router.query.tab as string)
      })()
    }
  }, [router.query, setExpand, setProject])

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: 'vertical', // vertical, horizontal
      gestureDirection: 'vertical', // vertical, horizontal, both
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  })

  useEffect(() => {
    setProjects(projects)
  }, [projects])

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
            {project ? (
              <ExpandProject project={project} setTransition={setTransition} />
            ) : (
              <motion.div
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.85,
                  type: 'spring',
                  bounce: 0,
                }}
              >
                <div className="relative ">
                  <Hero />
                  <Works />
                  <CircleBottom height={height} />
                </div>
                <About />
                <Copyright />
              </motion.div>
            )}
          </>
        )}
        <AnimatePresence>{transition && <PageTransition />}</AnimatePresence>
        <Loader
          displayContent={displayContent}
          setDisplayContent={setDisplayContent}
        />
      </main>
    </>
  )
}

const CircleBottom = ({ height }: { height: MotionValue<string> }) => (
  <div className="absolute bottom-0 top-[unset] translate-y-full w-full circle-container h-[15vh]  select-none pointer-events-none z-[1] ">
    <motion.div
      initial={{ height: '500%' }}
      style={{ height }}
      transition={{ duration: 1, ease: [0.45, 0, 0, 1] }}
      className="absolute w-[150%]  block rounded-[50%] transform-gpu bg-primary-850 left-[50%] -translate-x-[50%] -translate-y-[50%] shadow-xl"
    />
  </div>
)

function Loader({
  setDisplayContent,
  displayContent,
}: {
  setDisplayContent: (val: boolean) => void
  displayContent: boolean
}) {
  return (
    <>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: displayContent ? '-100vh' : 0 }}
        transition={{ duration: 1, ease: [0.45, 0, 0, 1] }}
        className="fixed inset-0 flex items-center justify-center bg-primary-50 text-primary-900 z-[9999999]"
      >
        {/* Background, hides the circle from the bottom */}
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-primary-50">
          <div className="text-3xl font-semibold">
            <AnimatedLogo setAnimateContent={setDisplayContent} />
          </div>
        </div>
        <div className="absolute bottom-0 top-[unset] translate-y-full w-full circle-container h-[15vh] z-0 select-none pointer-events-none">
          <motion.div
            initial={{ height: '750%' }}
            animate={{ height: displayContent ? '0%' : '750%' }}
            transition={{ duration: 1, ease: [0.45, 0, 0, 1] }}
            className="absolute w-[150%]  block rounded-[50%] transform-gpu bg-primary-50 left-[50%] -translate-x-[50%] -translate-y-[73.3%]"
          />
        </div>
      </motion.div>
    </>
  )
}

const AnimatedLogo = ({
  setAnimateContent,
}: {
  setAnimateContent: (val: boolean) => void
}) => {
  const text = ['E', 'd', 'u', 'a', 'r', 'd', 'o']
  const animateVariants = useAnimationControls()

  const container = {
    hidden: {
      x: 75,
      transition: {
        staggerChildren: -0.01,
        x: {
          delay: 0.5,
          duration: 0.2,
          ease: EASE_CONFIG,
        },
      },
    },
    show: {
      x: 0,
      transition: {
        staggerChildren: 0.05,
        x: {
          delay: 0.65,
          type: 'spring',
          bounce: 0.5,
        },
        bounce: 0,
      },
    },
    slideUp: {
      x: 75,
    },
  }

  const item = {
    hidden: (index: number) => ({
      opacity: index < 2 ? 1 : 0,
      x: index < 2 ? 0 : index * -50,
      scale: index < 2 ? 1 : 0.5,
      transition: {
        x: {
          duration: 0.2,
          ease: EASE_IN_OUT_BACK,
        },
        opacity: {
          delay: 0.4,
          duration: 0.3,
        },
      },
    }),
    show: () => ({
      opacity: 1,
      x: 0,
      scale: 1,
      y: 0,
      transition: {
        x: {
          duration: 0.2,
          ease: EASE_IN_OUT_BACK,
        },
        opacity: {
          delay: 0.4,
        },
      },
    }),
    slideUp: (index: number) => ({
      opacity: index < 2 ? 1 : 0,
      y: index === 0 ? -100 : 75,
    }),
  }

  useEffect(() => {
    ;(async () => {
      animateVariants.start('show')
      await new Promise((resolve) => setTimeout(resolve, 2000))
      animateVariants.start('hidden')
      await new Promise((resolve) => setTimeout(resolve, 1000))
      animateVariants.start('slideUp')
    })()
  }, [])

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <motion.p
        variants={container}
        initial="hidden"
        animate={animateVariants}
        onAnimationComplete={(variant) => {
          if (variant === 'slideUp') {
            setAnimateContent(true)
          }
        }}
        className="w-full text-5xl font-bold text-center md:text-7xl"
      >
        {text.map((letter, index) => (
          <motion.span
            initial={{ y: 0 }}
            className="relative inline-flex "
            key={letter + index}
          >
            <motion.span
              variants={item}
              custom={index}
              key={letter + index}
              className={`relative block  ${
                index >= 2 ? 'bg-transparent' : 'bg-white z-20'
              }`}
            >
              {letter}
            </motion.span>
          </motion.span>
        ))}
      </motion.p>
    </div>
  )
}

export async function getStaticProps() {
  const projects = await client.fetch(`*[_type == "project"]`)
  return {
    props: {
      projects,
    },
  }
}
