import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import React, { useRef } from 'react'
import { container, item } from '../constants/animationVariants'
import { socials } from '../data/socials'
import MagneticButton from './elements/MagneticButton'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { useRouter } from 'next/router'

const Hero: React.FC = () => {
  const router = useRouter()
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['-25%', '-150%'])
  const handleOnClick = () => {
    router.push('#works', undefined, { shallow: true, scroll: true })
  }

  const intro = 'Hi, my name is'
  const paragraph = `I'm a software engineer with 3 years of specializing in building
  exceptional digital experiences.`
  return (
    <motion.section
      ref={containerRef}
      className={`w-full mx-auto  min-h-[90vh] flex items-start justify-center flex-col  transition duration-500 ease-[cubic-bezier(.07,.47,.24,.97)] max-w-7xl  px-6 relative`}
      variants={container}
      initial="hidden"
      animate="show"
    >
      <p className="mb-4 text-lg opacity-70">
        {intro.split(' ').map((letter, index) => (
          <motion.span
            initial={{ y: 0 }}
            className="relative inline-flex overflow-hidden"
            key={letter + index}
          >
            <motion.span
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{
                type: 'spring',
                delay: index * 0.01,
                duration: 0.4,
              }}
              className="relative block mr-0.5 md:mr-1"
            >
              {letter}
            </motion.span>
          </motion.span>
        ))}
      </p>
      <Name name="Eduardo." />
      <Job title="A Front End Developer." />
      <p className="max-w-sm mt-4 text-lg xl:text-lg">
        {paragraph.split(' ').map((letter, index) => (
          <motion.span
            initial={{ y: 0 }}
            className="relative inline-flex overflow-hidden"
            key={letter + index}
          >
            <motion.span
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{
                type: 'spring',
                delay: index * 0.01,
                duration: 0.4,
              }}
              className="relative block mr-1"
            >
              {letter}
            </motion.span>
          </motion.span>
        ))}
      </p>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.5,
          bounce: 0.3,
          type: 'spring',
        }}
        className="absolute right-6 -bottom-[0%]"
        style={{ y: y }}
      >
        <MagneticButton
          onClick={handleOnClick}
          className="sm:w-[125px] h-[75px] w-[75px] sm:h-[125px] lg:w-[200px] lg:h-[200px] rounded-full bg-black text-white flex items-center justify-center "
        >
          <IoIosArrowDown className="w-5 h-5 lg:w-10 lg:h-10" />
        </MagneticButton>
      </motion.div>
    </motion.section>
  )
}

const Job = ({ title }: { title: string }) => (
  <p className="text-5xl font-extrabold lg:text-7xl md:text-6xl opacity-70">
    {title.split(' ').map((letter, index) => (
      <motion.span
        initial={{ y: 0 }}
        className="relative inline-flex overflow-hidden"
        key={letter + index}
      >
        <motion.span
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          transition={{
            type: 'spring',
            delay: index * 0.01,
            duration: 0.4,
          }}
          className="relative block mr-1 md:mr-2"
        >
          {letter}
        </motion.span>
      </motion.span>
    ))}
  </p>
)

const Name = ({ name }: { name: string }) => (
  <div>
    <p className="text-5xl font-extrabold md:text-9xl ">
      {name.split('').map((letter, index) => (
        <motion.span
          initial={{ y: 0 }}
          className="relative inline-flex overflow-hidden"
          key={letter + index}
        >
          <motion.span
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{
              type: 'spring',
              delay: index * 0.05,
              duration: 0.4,
            }}
            className="relative block"
          >
            {letter}
          </motion.span>
        </motion.span>
      ))}
    </p>
  </div>
)

const Socials = () => (
  <div className="max-w-xs mt-6 md:mt-0">
    <p>
      <motion.span
        variants={item}
        whileInView="show"
        viewport={{ once: true }}
        className="block"
      >
        Based in the United States, <b>New Jersey.</b>
      </motion.span>
    </p>
    <p>
      <motion.span
        variants={item}
        whileInView="show"
        viewport={{ once: true }}
        className="block"
      >
        Let&apos;s get in touch.
      </motion.span>
    </p>
    {socials.map((social) => (
      <Link
        key={social.name}
        href={social.link}
        rel="noreferrer"
        target={'_blank'}
      >
        <p
          key={social.name}
          className="hidden mr-3 text-sm md:inline-block opacity-60"
        >
          <motion.span
            variants={item}
            whileInView="show"
            viewport={{ once: false }}
            className="block"
          >
            {social.name}
          </motion.span>
        </p>
      </Link>
    ))}
  </div>
)

const EmailAndTitle = ({
  email,
  jobTitle,
}: {
  email: string
  jobTitle: string
}) => (
  <div className="mt-8 md:mt-20 xl:mt-56">
    <div className="w-max">
      <Link href={`mailto:${email}`}>
        <p className="text-lg underline w-max">
          <motion.span
            variants={item}
            whileInView="show"
            viewport={{ once: true }}
            className="block"
          >
            {email}
          </motion.span>
        </p>
      </Link>
    </div>
    <div className="flex items-center mt-6 text-2xl font-bold md:text-4xl gap-x-3">
      <p>
        <motion.span
          variants={item}
          whileInView="show"
          viewport={{ once: true }}
          className="block"
        >
          {jobTitle}
        </motion.span>
      </p>
    </div>
  </div>
)

export default Hero
