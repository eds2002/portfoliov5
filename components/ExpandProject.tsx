import { useScroll, useTransform, motion, MotionValue } from 'framer-motion'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useRef } from 'react'
import slugify from '../utils/slugify'
import Image from 'next/image'
import { container, item } from '../constants/animationVariants'
import Footer from './Footer'
import MagneticButton from './elements/MagneticButton'
import { BsArrowRightShort } from 'react-icons/bs'
import { BiChevronLeft } from 'react-icons/bi'
import { ProjectsContext } from '../context/ProjectsProvider'
import { ImageInterface, Project } from '../interfaces'
import { urlFor } from '../utils/urlFor'
import Lenis from '@studio-freight/lenis'

const ExpandProject = ({
  project,
  setTransition,
}: {
  project: string
  setTransition: (val: boolean) => void
}) => {
  const { scrollYProgress } = useScroll()

  const height = useTransform(scrollYProgress, [0.5, 1], ['500%', '0%'])

  useEffect(() => {
    const lenis = new Lenis()
    setTransition(false)
    lenis.stop()
    // Transition covers up the page
    lenis.scrollTo(0, { immediate: true })
    // When the page transition ends after a short time, free the scroll again
    lenis.start()
    window.scrollTo(0, 0)
  }, [setTransition])

  return (
    <>
      <div className="relative" id="anchor">
        <div className="relative z-10 pb-24">
          <ProjectBody project={project} />
        </div>
        <CircleBottom height={height} />
      </div>
      <Footer />
    </>
  )
}

const ProjectBody = ({ project }: { project: string }) => {
  const { projects } = useContext(ProjectsContext)
  return (
    <div>
      {projects.map((prj) => (
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          key={prj.projectName}
        >
          {slugify(prj.projectName!) === project && (
            <>
              <ProjectOverview prj={prj} />
              <div className="flex flex-col items-center justify-center max-w-5xl px-4 mx-auto">
                {prj.projectImages?.map((image) => (
                  <ImageContainer image={image} key={image._key} />
                ))}
              </div>
            </>
          )}
        </motion.div>
      ))}
    </div>
  )
}

const ImageContainer = ({ image }: { image: ImageInterface }) => {
  const containerRef = useRef(null)
  return (
    <div key={image._key} ref={containerRef}>
      <Images image={image} containerRef={containerRef} />
      <ImageText image={image} containerRef={containerRef} />
    </div>
  )
}

const ImageText = ({
  image,
  containerRef,
}: {
  image: ImageInterface
  containerRef: any
}) => {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['15%', '0%'])

  const heading = image.imageHeading ?? null
  const paragraph = image.imageParagraph ?? null
  return (
    <>
      {heading && paragraph && (
        <div className="grid w-full h-full grid-cols-1 gap-10 py-24 sm:py-36 lg:py-64 md:grid-cols-2 place-items-start">
          <motion.h3 className="w-full text-4xl font-medium text-left lg:text-5xl">
            {heading.split(' ').map((word, index) => (
              <motion.span
                initial={{ y: 0 }}
                className="relative inline-flex overflow-hidden"
                key={word + index}
              >
                <motion.span
                  initial={{ y: '100%' }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    type: 'spring',
                    delay: index * 0.015,
                  }}
                  className="relative block"
                >
                  {word}
                  &nbsp;
                </motion.span>
              </motion.span>
            ))}
          </motion.h3>
          <motion.div style={{ y }} className="w-full text-left lg:text-lg ">
            {paragraph.map((p) => (
              <p key={p._key} className="relative block pb-4 opacity-80">
                {p.children[0].text.split(' ').map((word, index) => (
                  <motion.span
                    initial={{ y: 0 }}
                    className="relative inline-flex overflow-hidden"
                    key={word + index}
                  >
                    <motion.span
                      initial={{ y: '100%' }}
                      whileInView={{ y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        type: 'spring',
                        delay: index * 0.015,
                        duration: 0,
                      }}
                      className="relative block font-light"
                    >
                      {word}
                      &nbsp;
                    </motion.span>
                  </motion.span>
                ))}
              </p>
            ))}
          </motion.div>
        </div>
      )}
      {heading && !paragraph && (
        <div className="grid w-full h-full grid-cols-1 gap-10 py-24 sm:py-36 lg:py-48 place-items-center">
          <motion.h3 className="text-3xl font-medium text-left lg:w-full lg:text-5xl">
            {heading.split(' ').map((word, index) => (
              <motion.span
                initial={{ y: 0 }}
                className="relative inline-flex overflow-hidden"
                key={word + index}
              >
                <motion.span
                  initial={{ y: '100%' }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: false }}
                  transition={{
                    type: 'spring',
                    delay: index * 0.015,
                  }}
                  className="relative block"
                >
                  {word}
                  &nbsp;
                </motion.span>
              </motion.span>
            ))}
          </motion.h3>
        </div>
      )}
    </>
  )
}

const Images = ({
  image,
  containerRef,
}: {
  image: ImageInterface
  containerRef: any
}) => {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-2%'])
  return (
    <motion.div
      style={{ y }}
      className="relative flex flex-col items-center justify-center w-full h-full gap-10 "
    >
      <Image
        src={urlFor(image.asset._ref).url()}
        width={5000}
        height={5000}
        key={image._key}
        alt={'Project image.'}
        className="object-fill w-full h-full min-w-full min-h-full overflow-hidden rounded-3xl"
      />
    </motion.div>
  )
}

const ProjectOverview = ({ prj }: { prj: Project }) => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-350%'])
  const router = useRouter()
  const handleViewSite = () => {
    window.open(prj.webUrl, '_ blank')
  }
  const handleBackToHome = () => {
    router.push('/')
  }
  return (
    <div className="relative py-24 " ref={containerRef}>
      <div className="relative px-4 py-24 mx-auto max-w-7xl">
        <p className=" text-5xl font-semibold md:text-6xl md:max-w-[70%]">
          {prj.projectDesc?.split(' ').map((word: string, index: number) => (
            <motion.span
              initial={{ y: 0 }}
              className="relative inline-flex overflow-hidden"
              key={word + index}
            >
              <motion.span variants={item} className="relative block">
                {word}
                &nbsp;
              </motion.span>
            </motion.span>
          ))}
        </p>
        <p className="mt-2 text-xl font-semibold lg:text-2xl text-sky-400">
          <motion.span variants={item} className="block">
            {prj.projectName}
          </motion.span>
        </p>
        <div className="flex flex-wrap mt-4">
          {prj.techStack?.map((val: string, index: number) => (
            <div key={val}>
              <p className="flex items-center justify-center max-w-xl overflow-hidden text-sm opacity-70">
                <motion.span variants={item} className="block pr-3" key={val}>
                  {val}
                </motion.span>
              </p>
            </div>
          ))}
        </div>
        <motion.div
          className="absolute bottom-[-10%]  right-4 pt-10 md:pt-0"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 2,
            type: 'spring',
          }}
          style={{ y }}
        >
          <MagneticButton
            onClick={handleViewSite}
            className="h-[125px] w-[125px] sm:h-[125px] lg:w-[150px] lg:h-[150px] rounded-full bg-sky-400 text-sky-900 flex items-center justify-center group flex-row "
          >
            <span className="flex items-center justify-center text-sm font-medium lg:text-base">
              Visit Site
              <BsArrowRightShort className="w-5 h-5 transition duration-300 group-hover:translate-x-2" />
            </span>
          </MagneticButton>
        </motion.div>
      </div>
      <motion.div
        className="absolute top-0 left-0 "
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 2,
          type: 'spring',
        }}
      >
        <div className="scale-[2] hover:scale-100 transition duration-300">
          <MagneticButton
            className="sm:w-[85px] h-[75px] w-[75px] sm:h-[85px] xl:w-[100px] xl:h-[100px] rounded-full border-white border text-white flex items-center justify-center group flex-row "
            onClick={handleBackToHome}
          >
            <span className="flex items-center justify-center text-xl">
              <BiChevronLeft className="w-10 h-10 transition duration-300 group-hover:translate-x-2" />
            </span>
          </MagneticButton>
        </div>
      </motion.div>
    </div>
  )
}

const CircleBottom = ({ height }: { height: MotionValue<string> }) => (
  <div className="absolute bottom-0 top-[unset] translate-y-full w-full circle-container h-[15vh]  select-none pointer-events-none z-[1]">
    <motion.div
      initial={{ height: '500%' }}
      style={{ height }}
      transition={{ duration: 1, ease: [0.45, 0, 0, 1] }}
      className="absolute w-[150%]  block rounded-[50%] transform-gpu bg-primary-850 left-[50%] -translate-x-[50%] -translate-y-[50%] shadow-xl"
    />
  </div>
)

export default ExpandProject
