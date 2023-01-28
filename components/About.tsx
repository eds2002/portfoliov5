import { motion } from 'framer-motion'
import Link from 'next/link'
import { container, item } from '../constants/animationVariants'
import { skills } from '../constants/skills'
import { socials } from '../data/socials'

const About: React.FC = () => {
  return (
    <motion.section
      className="pt-24 pb-10 bg-primary-50 text-primary-900"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <div className="px-6 mx-auto max-w-7xl ">
        <AboutDescription />
        <Experience />
        <Contact />
      </div>
    </motion.section>
  )
}

const AboutDescription = () => (
  <>
    <p className="text-4xl font-extrabold md:text-6xl">
      <motion.span
        variants={item}
        whileInView="show"
        viewport={{ once: true }}
        className="block"
      >
        About me
      </motion.span>
    </p>
    <p className="max-w-md mt-4 text-base text-opacity-50">
      <motion.span
        variants={item}
        whileInView="show"
        viewport={{ once: true }}
        className="block"
      >
        I am a front end developer based in New Jersey. I love creating things
        for the web using react. As a developer, my main focus is to create a
        wonderful user experience both for mobile and desktop and is my main
        goal when starting a new job or project.
      </motion.span>
    </p>
  </>
)

const Contact = () => (
  <>
    <p className="mt-16 text-2xl font-extrabold md:text-4xl">
      <motion.span
        variants={item}
        whileInView="show"
        viewport={{ once: true }}
        className="block"
      >
        Let&apos;s get in touch
      </motion.span>
    </p>
    <Link href="mailto:es23jr@gmail.com">
      <p className="inline-block mt-6 text-base underline ">
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
    <div>
      {socials.map((social) => (
        <Link
          href={social.link}
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-6 mr-3 text-sm opacity-60"
          key={social.name}
        >
          <p className="inline-block mt-6 mr-3 text-sm opacity-60">
            <motion.span
              variants={item}
              whileInView="show"
              viewport={{ once: true }}
              className="block"
            >
              {social.name}
            </motion.span>
          </p>
        </Link>
      ))}
    </div>
  </>
)

const Experience = () => (
  <>
    <p className="mt-10 text-xl">
      <motion.span
        variants={item}
        whileInView="show"
        viewport={{ once: true }}
        className="block"
      >
        I have experience using:
      </motion.span>
    </p>
    <div className="grid max-w-xl grid-cols-2 grid-rows-3 mt-2 text-opacity-50">
      {skills.map((skill: string) => (
        <p key={skill}>
          <motion.span
            variants={item}
            whileInView="show"
            viewport={{ once: true }}
            className="block"
          >
            {skill}
          </motion.span>
        </p>
      ))}
    </div>
  </>
)

export default About
