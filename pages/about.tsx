import Lenis from '@studio-freight/lenis'
import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useEffect, useRef } from 'react'
import MagneticButton from '../components/elements/MagneticButton'
import { ChevronDownIcon } from '@sanity/icons'
import { BiChevronDown } from 'react-icons/bi'

export default function AboutPage() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(1.5, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
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
  return (
    <motion.main>
      <motion.div
        initial={{ y: '25%' }}
        animate={{ y: 0 }}
        transition={{ duration: 2, ease: [0.45, 0, 0, 1] }}
        className="w-full h-full "
      >
        <AboutMe />
        <Tools />
      </motion.div>
    </motion.main>
  )
}

function Tools() {
  const title = 'Steps I take to build a website'
  const steps = [
    {
      title: 'Design',
      desc: 'I use Figma to create wireframes and mockups for the website. With the help of AI, we can also brainstorm logos and branding.',
    },
    {
      title: 'Development',
      desc: 'Depending on your needs, my primary tech stack remains React, Next.js, and Tailwind CSS. I also use Sanity CMS for easy content management.',
    },
    {
      title: '',
      desc: '',
      // title: 'Research',
      // desc: "Research, research, research. I always start by researching the client's business and their competitors. I also research the latest trends in web design and development.",
    },
  ]
  return (
    <section className="py-24 bg-neutral-100" id="tools">
      <div className="w-full h-full px-6 mx-auto max-w-7xl">
        <h2 className="max-w-3xl text-2xl font-medium sm:text-3xl md:text-4xl">
          {title.split('').map((letter, index) => (
            <motion.span
              initial={{ y: 0 }}
              className="relative inline-flex py-1 -mb-3 overflow-hidden "
              key={letter + index}
            >
              <motion.span
                initial={{ y: '100%' }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.01,
                  duration: 1,
                  ease: [0.45, 0, 0, 1],
                }}
                className="relative block"
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            </motion.span>
          ))}
        </h2>
        <div className="flex items-start justify-between mt-16">
          {steps.map((step) => (
            <div className="max-w-xs " key={step.title}>
              <h3 className="text-lg font-semibold ">
                {step.title.split('').map((letter, index) => (
                  <motion.span
                    initial={{ y: 0 }}
                    className="relative inline-flex py-1 -mb-3 overflow-hidden "
                    key={letter + index}
                  >
                    <motion.span
                      initial={{ y: '100%' }}
                      whileInView={{ y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.01,
                        duration: 1,
                        ease: [0.45, 0, 0, 1],
                      }}
                      className="relative block"
                    >
                      {letter === ' ' ? '\u00A0' : letter}
                    </motion.span>
                  </motion.span>
                ))}
              </h3>
              <p className="text-base">
                {step.desc.split(' ').map((letter, index) => (
                  <motion.span
                    initial={{ y: 0 }}
                    className="relative inline-flex py-1 -mb-3 overflow-hidden "
                    key={letter + index}
                  >
                    <motion.span
                      initial={{ y: '100%' }}
                      whileInView={{ y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.025,
                        duration: 1,
                        ease: [0.45, 0, 0, 1],
                      }}
                      className="relative block"
                    >
                      {letter}
                      &nbsp;
                    </motion.span>
                  </motion.span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AboutMe() {
  const aboutme =
    'A dev based in New Jersey who loves to build things with code.'
  const desc1 =
    'My passion for web design and development started back in 2020 when I took a college course in web design. Since then I have made it my goal to create fast, beautiful, and responsive modern websites. '
  const desc2 =
    'Fast forward today, I am always learning and creating with powerful technologies like React, Next.js, and Tailwind CSS. I love creating full stack applications and aim to keep improving in this field.'

  const handleClick = () => {
    document.querySelector('#tools')?.scrollIntoView({ behavior: 'smooth' })
  }

  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['100%', '-100%'])

  return (
    <section
      ref={containerRef}
      className="relative flex items-center justify-start h-full px-6 py-24 mx-auto max-w-7xl"
    >
      <div className="flex md:flex-row flex-col md:items-center md:justify-center md:h-[80vh] relative">
        <p className="max-w-5xl text-4xl font-medium lg:text-5xl xl:text-6xl">
          {aboutme.split(' ').map((letter, index) => (
            <motion.span
              initial={{ y: 0 }}
              className="relative inline-flex py-1 -mb-3 overflow-hidden "
              key={letter + index}
            >
              <motion.span
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{
                  delay: index * 0.04,
                  duration: 1,
                  ease: [0.45, 0, 0, 1],
                }}
                className="relative block"
              >
                {letter}
                &nbsp;
              </motion.span>
            </motion.span>
          ))}
        </p>
        <div className="flex flex-col gap-12 pt-12 md:items-center md:absolute md:bottom-0 md:left-0 md:flex-row md:pt-0">
          <p className="block max-w-sm text-base">
            {desc1.split(' ').map((letter, index) => (
              <motion.span
                initial={{ y: 0 }}
                className="relative inline-flex py-1 -mb-3 overflow-hidden"
                key={letter + index}
              >
                <motion.span
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  transition={{
                    delay: index * 0.04,
                    duration: 1,
                    ease: [0.45, 0, 0, 1],
                  }}
                  className="relative block"
                >
                  {letter}
                  &nbsp;
                </motion.span>
              </motion.span>
            ))}
          </p>
          <motion.div
            className="w-0.5 bg-black rounded-full h-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: [0.45, 0, 0, 1],
            }}
          />
          <p className="block max-w-sm text-base">
            {desc2.split(' ').map((letter, index) => (
              <motion.span
                initial={{ y: 0 }}
                className="relative inline-flex py-1 -mb-3 overflow-hidden"
                key={letter + index}
              >
                <motion.span
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  transition={{
                    delay: index * 0.04,
                    duration: 1,
                    ease: [0.45, 0, 0, 1],
                  }}
                  className="relative block"
                >
                  {letter}
                  &nbsp;
                </motion.span>
              </motion.span>
            ))}
          </p>
        </div>
      </div>
      <motion.div style={{ y }} className="absolute right-6">
        <MagneticButton
          onClick={handleClick}
          className="flex items-center justify-center w-24 h-24 bg-black rounded-full"
        >
          <BiChevronDown className="text-6xl text-white" />
        </MagneticButton>
      </motion.div>
    </section>
  )
}
