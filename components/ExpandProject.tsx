import { useScroll, useTransform, motion, MotionValue } from 'framer-motion'
import { useRouter } from 'next/router'
import React, { useEffect, useRef } from 'react'
import { projects } from '../constants/projects'
import slugify from '../utils/slugify'
import Image from 'next/image'
import { container, item } from '../constants/animationVariants'
import Footer from './Footer'
import MagneticButton from './elements/MagneticButton'
import { BsArrowRightShort } from 'react-icons/bs'
import { BiChevronLeft } from 'react-icons/bi'

const ExpandProject = ({
  project,
  setTransition,
}: {
  project: any
  setTransition: (val: boolean) => void
}) => {
  const { scrollYProgress } = useScroll()

  const height = useTransform(scrollYProgress, [0.5, 1], ['500%', '0%'])

  useEffect(() => {
    setTransition(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <>
      <div className="relative">
        <div className="relative z-10">
          <ProjectBody project={project} />
        </div>
        <CircleBottom height={height} />
      </div>
      <Footer />
    </>
  )
}

const ProjectBody = ({ project }: { project: string }) => {
  return (
    <div className="">
      {projects.map((prj) => (
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          key={prj.title}
        >
          {slugify(prj.title) === project && (
            <>
              <ProjectOverview prj={prj} />
              <div className="flex flex-col items-center justify-center max-w-5xl px-4 mx-auto">
                {prj?.deskImages?.map((image) => (
                  <>
                    <ImageHeading heading={image.heading} />
                    <ImageParagraph paragraph={image.paragraph} />
                    <Images image={image} />
                  </>
                ))}
              </div>
            </>
          )}
        </motion.div>
      ))}
    </div>
  )
}

const Images = ({ image }: { image: any }) => (
  <div className="relative flex flex-col items-center justify-center w-full h-full gap-10 ">
    {image.urls.map((url: string) => (
      <div
        key={url}
        className="relative flex flex-col items-center justify-center w-full h-full gap-10 mb-6 overflow-hidden aspect-video rounded-3xl"
      >
        <Image
          fill
          quality={100}
          key={url}
          src={url}
          alt={'Project image.'}
          className="object-fill w-full h-full min-w-full min-h-full overflow-hidden rounded-3xl"
        />
      </div>
    ))}
  </div>
)

const ImageParagraph = ({ paragraph }: { paragraph: string }) => (
  <>
    {paragraph != '' && (
      <p className="max-w-2xl mt-6 mb-10 mr-auto overflow-hidden sm:text-lg lg:text-xl">
        <motion.span
          variants={item}
          whileInView="show"
          viewport={{ once: true }}
          className="block"
        >
          {paragraph}
        </motion.span>
      </p>
    )}
  </>
)

const ImageHeading = ({ heading }: { heading: any }) => (
  <>
    {heading != '' && (
      <p className="md:w-[60%] pt-10  mb-2 mr-auto overflow-hidden text-3xl font-bold sm:text-4xl lg:text-5xl">
        <motion.span
          variants={item}
          whileInView="show"
          viewport={{ once: true }}
          className="block"
        >
          {heading}
        </motion.span>
      </p>
    )}
  </>
)

const ProjectOverview = ({ prj }: { prj: any }) => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-350%'])
  const router = useRouter()
  const handleViewSite = () => {
    window.open(prj.webLink, '_ blank')
  }
  const handleBackToHome = () => {
    router.push('/')
  }
  return (
    <div className="relative py-24 " ref={containerRef}>
      <div className="relative px-4 py-24 mx-auto max-w-7xl">
        <p className=" text-5xl font-semibold md:text-6xl md:max-w-[70%]">
          {prj.longDesc.split(' ').map((word: string, index: number) => (
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
            {prj.title}
          </motion.span>
        </p>
        <div className="flex flex-wrap mt-4">
          {prj.stack.map((val: string, index: number) => (
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
            className="sm:w-[125px] h-[75px] w-[75px] sm:h-[125px] lg:w-[100px] lg:h-[100px] rounded-full border-white border text-white flex items-center justify-center group flex-row "
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

const button = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
}

const visibility = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
}
