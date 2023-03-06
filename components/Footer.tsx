import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { container, item } from '../constants/animationVariants'
import { socials } from '../data/socials'
import { BiArrowBack } from 'react-icons/bi'
import { useRouter } from 'next/router'
import MagneticButton from './elements/MagneticButton'
import { IoIosArrowUp } from 'react-icons/io'

const paragraph =
  "Interested in working together? Contact me! I'm always on the lookout for new opportunities."

const Footer: React.FC = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['150%', '0%'])
  const router = useRouter()
  const handleBackButton = async () => {
    router.replace('/', undefined, { shallow: true })
  }

  const handleOnClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <motion.section
      className="relative py-24 bg-primary-50 text-primary-900"
      variants={container}
      initial="hidden"
      animate="show"
      ref={containerRef}
    >
      <div className="relative px-6 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center w-full mb-2 font-semibold cursor-pointer gap-x-2"
          onClick={handleBackButton}
        >
          <BiArrowBack className="w-5 h-5" />
          Back to home
        </motion.div>
        <p className="py-1 text-4xl font-extrabold md:text-6xl">
          <motion.span
            variants={item}
            whileInView="show"
            viewport={{ once: true }}
            className="block"
          >
            Let&apos;s work together.
          </motion.span>
        </p>
        <Link href="mailto:es23jr@gmail.com">
          <p className="inline-block mt-2 underline">
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
        <div className="relative block max-w-md">
          <p className="text-base lg:text-lg">
            {paragraph.split(' ').map((word, index) => (
              <motion.span
                className="relative inline-flex overflow-hidden "
                variants={item}
                key={word + index}
                initial={{ y: 0 }}
                transition={{
                  delay: index * 0.1,
                }}
              >
                <motion.span
                  className="relative block "
                  variants={item}
                  whileInView="show"
                  transition={{
                    delay: index * 0.1,
                  }}
                >
                  {word}
                  &nbsp;
                </motion.span>
              </motion.span>
            ))}
          </p>
        </div>
        {socials.map((social) => (
          <Link
            href={social.link}
            key={social.name}
            rel="noreferrer"
            target="_blank"
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
        <motion.div className="absolute right-6 -bottom-[25%]" style={{ y: y }}>
          <MagneticButton
            onClick={handleOnClick}
            className="sm:w-[125px] h-[75px] w-[75px] sm:h-[125px] lg:w-[200px] lg:h-[200px] rounded-full bg-black text-white flex items-center justify-center "
          >
            <IoIosArrowUp className="w-5 h-5 lg:w-10 lg:h-10" />
          </MagneticButton>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Footer
