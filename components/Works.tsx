import React, { useContext } from 'react'
import { useRouter } from 'next/router'
import slugify from '../utils/slugify'
import { motion } from 'framer-motion'
import { container, item } from '../constants/animationVariants'
import { ProjectsContext } from '../context/ProjectsProvider'
import { Project } from '../interfaces'

const Works: React.FC = () => {
  return (
    <section className={`py-16 relative z-[2] transition `}>
      <div className="px-6 mx-auto max-w-7xl">
        <Projects />
      </div>
    </section>
  )
}

const Projects = () => {
  const { projects } = useContext(ProjectsContext)
  const router = useRouter()
  const handleProjectClick = (title: string) => {
    router.push({ query: `tab=${encodeURI(slugify(title))}` }, undefined, {
      scroll: false,
      shallow: true,
    })
  }
  return (
    <>
      {projects.map((project, index: number) => (
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className={`flex lg:flex-row flex-col items-center justify-center py-10`}
          key={project.projectName}
        >
          <div
            onClick={() => handleProjectClick(project.projectName!)}
            className="flex flex-col items-start justify-center flex-1 w-full text-primary-50 md:justify-between md:flex-row md:items-center group"
          >
            <div className="w-full  group-hover:translate-x-[1%] transition  py-4 cursor-pointer">
              <ProjectTitle
                title={project.projectName!}
                handleProjectClick={handleProjectClick}
              />
              <Underline />
              <ProjectStack project={project} />
            </div>
            <ShortDescription shortDesc={project?.shortDesc ?? 'Freelance'} />
          </div>
        </motion.div>
      ))}
    </>
  )
}

const Underline = () => (
  <div className="w-full h-px my-2 rounded-full md:hidden bg-primary-600" />
)

const ProjectTitle = ({
  title,
  handleProjectClick,
}: {
  title: string
  handleProjectClick: (title: string) => void
}) => {
  return (
    <p
      className="text-3xl font-bold transition cursor-pointer md:text-7xl xl:text-8xl group-hover:text-blue-400"
      onClick={() => handleProjectClick(title)}
    >
      <motion.span
        variants={item}
        whileInView="show"
        viewport={{ once: true }}
        className="block"
      >
        {title}
      </motion.span>
    </p>
  )
}

const ShortDescription = ({ shortDesc }: { shortDesc: string }) => (
  <div className="whitespace-nowrap group-hover:translate-x-[1%] transition  group-hover:text-blue-400">
    <p className="hidden mt-3 text-base opacity-80 md:max-w-7xl md:block">
      <motion.span
        variants={item}
        whileInView="show"
        viewport={{ once: true }}
        className="block"
      >
        {shortDesc}
      </motion.span>
    </p>
  </div>
)

const ProjectStack = ({ project }: { project: Project }) => (
  <div className="flex transition gap-x-1 md:hidden group-hover:opacity-70 group-hover:text-blue-400">
    {project.techStack?.map((val: string, index: number) => (
      <React.Fragment key={val}>
        {index < 3 && (
          <p className="opacity-80 ">
            <motion.span
              variants={item}
              whileInView="show"
              viewport={{ once: true }}
              className="block"
            >
              {val},
            </motion.span>
          </p>
        )}
      </React.Fragment>
    ))}
    <p className="opacity-80">
      <motion.span
        variants={item}
        whileInView="show"
        viewport={{ once: true }}
        className="block"
      >
        & {project.techStack && project.techStack.length - 3} more
      </motion.span>
    </p>
  </div>
)

export default Works
