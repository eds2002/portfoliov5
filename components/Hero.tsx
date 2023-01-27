import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import { container, item } from '../constants/animationVariants'
import { socials } from '../data/socials'

const Hero: React.FC = () => {
  return (
    <motion.section
      className={`w-full mx-auto  py-28 md:py-32  transition duration-500 ease-[cubic-bezier(.07,.47,.24,.97)] max-w-7xl border-b-4 px-6 border-primary-800`}
      variants={container}
      initial="hidden"
      animate="show"
    >
      <Name />
      <div className="flex flex-col w-full md:items-end md:justify-between md:flex-row">
        <EmailAndTitle />
        <Socials />
      </div>
    </motion.section>
  )
}

const Name = () => (
  <div>
    <p className="text-5xl font-extrabold md:text-9xl ">
      <motion.span
        variants={item}
        whileInView="show"
        viewport={{ once: true }}
        className="block"
      >
        Eduardo
      </motion.span>
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

const EmailAndTitle = () => (
  <div className="mt-8 md:mt-20 xl:mt-56">
    <div className="w-max">
      <Link href="mailto:es23jr@gmail.com">
        <p className="text-lg underline w-max">
          <motion.span
            variants={item}
            whileInView="show"
            viewport={{ once: true }}
            className="block"
          >
            es23jr@gmail.com
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
          Front End Developer
        </motion.span>
      </p>
    </div>
  </div>
)

export default Hero
