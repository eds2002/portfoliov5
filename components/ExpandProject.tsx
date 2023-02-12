import { useScroll, useTransform, motion, MotionValue } from 'framer-motion'
import { useRouter } from 'next/router'
import React, { useEffect, useRef } from 'react'
import { projects } from '../constants/projects'
import slugify from '../utils/slugify'
import Image from 'next/image'
import { container, item } from '../constants/animationVariants'
import Footer from './Footer'

const ExpandProject = ({
  project,
  setTransition,
}: {
  project: any
  setTransition: (val: boolean) => void
}) => {
  const ref = useRef<any>(null)
  const { scrollYProgress } = useScroll()

  const height = useTransform(scrollYProgress, [0.5, 1], ['500%', '0%'])

  const findProjectName = projects.filter(
    (prj) => slugify(prj.title) === project
  )[0].title

  useEffect(() => {
    setTransition(false)
  }, [])

  return (
    <>
      <div className="relative">
        <div className="relative z-10">
          <Header />
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
    <div className="px-4 mx-auto max-w-7xl ">
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
              <ProjectButtons prj={prj} />
              <div className="flex flex-col items-center justify-center mt-10">
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
  <div className="relative flex flex-col items-center justify-center w-full h-full gap-10 p-6 mb-10 overflow-hidden bg-primary-800 md:py-12 md:px-32">
    {image.urls.map((url: string) => (
      <div
        key={url}
        className="relative flex flex-col items-center justify-center w-full h-full gap-10 aspect-video"
      >
        <Image
          fill
          quality={100}
          key={url}
          src={url}
          alt={'Project image.'}
          className="object-contain w-full h-full min-w-full min-h-full"
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
      <p className="w-full pt-10 mt-24 mb-2 mr-auto overflow-hidden text-3xl font-bold border-t-4 border-primary-750 sm:text-4xl lg:text-5xl">
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

const ProjectOverview = ({ prj }: { prj: any }) => (
  <div className="mt-24">
    <p className="overflow-hidden text-5xl font-extrabold md:text-9xl">
      <motion.span variants={item} className="block">
        {prj.title}
      </motion.span>
    </p>
    <p className="overflow-hidden text-xl">
      <motion.span variants={item} className="block">
        {prj.responsibility}
      </motion.span>
    </p>
    <p className="mt-10 text-lg lg:text-2xl opacity-70">
      <motion.span variants={item} className="block">
        {prj.longDesc}
      </motion.span>
    </p>
    <p className="relative mt-10 overflow-hidden text-2xl font-bold ">
      <motion.span variants={item} className="block">
        Objective
      </motion.span>
    </p>
    <p className="max-w-xl mt-3 overflow-hidden text-base lg:text-lg opacity-70">
      <motion.span variants={item} className="block">
        {prj.objective}
      </motion.span>
    </p>
    <p className="overflow-hidden text-2xl font-bold mt-7">
      <motion.span variants={item} className="block">
        Technologies
      </motion.span>
    </p>
    <div className="flex flex-wrap ">
      {prj.stack.map((val: string) => (
        <p
          key={val}
          className="max-w-xl overflow-hidden text-base lg:text-lg opacity-70"
        >
          <motion.span variants={item} className="block mr-3 " key={val}>
            {val}
          </motion.span>
        </p>
      ))}
    </div>
  </div>
)

const ProjectButtons = ({ prj }: { prj: any }) => (
  <div className="flex gap-3 mt-10">
    <motion.a
      variants={button}
      href={prj.webLink}
      target="_blank"
      rel="noreferrer"
      className="flex items-center justify-center px-4 py-2 rounded-full text-primary-900 bg-primary-50"
    >
      Visit site
    </motion.a>
    {prj.gitLink !== '' && (
      <motion.a
        variants={button}
        href={prj.gitLink}
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center px-4 py-2 border border-white rounded-full text-primary-50"
      >
        View Repository
      </motion.a>
    )}
  </div>
)

const Header = () => {
  const router = useRouter()
  const handleBackButton = async () => {
    router.replace('/', undefined, { shallow: true })
  }
  return (
    <div className="sticky top-0 z-10 text-primary-50 backdrop-blur-lg">
      <div className="px-4 mx-auto max-w-7xl">
        <motion.p
          variants={button}
          className="py-3 text-sm cursor-pointer pointer-events-auto text-primary-50 w-max"
          onClick={() => handleBackButton()}
        >
          Back to home
        </motion.p>
      </div>
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
