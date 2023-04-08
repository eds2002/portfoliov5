import { useEffect } from 'react'
import Hero from '../components/Hero'
import { motion } from 'framer-motion'
import Works from '../components/Works'
import Lenis from '@studio-freight/lenis'
import { client } from '../utils/sanityClient'
import { Project } from '../interfaces'
import { useProjectsStore } from '../utils/projectsStore'

export default function Home({ projects }: { projects: Project[] }) {
  const setProjects = useProjectsStore((state: any) => state.setProjects)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1,
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
  }, [projects, setProjects])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 1,
      }}
      transition={{
        duration: 0.2,
      }}
      className="overflow-x-hidden"
    >
      <div className="relative ">
        {/* <Header /> */}
        <Hero />
        <Works />
      </div>
      {/* <About />
      <Copyright /> */}
    </motion.div>
  )
}

export async function getServerSideProps() {
  const projects = await client.fetch(`*[_type == "project"]`)
  return {
    props: {
      projects,
      revalidate: 60,
    },
  }
}
