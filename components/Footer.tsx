import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { container, item } from '../constants/animationVariants'
import { socials } from '../data/socials'

const Footer: React.FC = () => {
  return (
    <motion.section
      className="py-24 bg-primary-50 text-primary-900"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <div className="px-6 mx-auto max-w-7xl">
        <p className="text-4xl font-extrabold md:text-6xl">
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
        <p className="max-w-md mt-4 text-base sm:text-lg lg:text-xl">
          <motion.span
            variants={item}
            whileInView="show"
            viewport={{ once: true }}
            className="block"
          >
            Interested in working together? Contact me! I&apos;m currently
            looking for new positions.
          </motion.span>
        </p>
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
      </div>
    </motion.section>
  )
}

export default Footer
