import Link from 'next/link'
import React, { useRef } from 'react'
import { socials } from '../data/socials'
import { useInView } from '../hooks/useInView'

const Footer: React.FC = () => {
  const componentRef = useRef<HTMLElement>(null)
  useInView(componentRef)

  return (
    <section
      className="h-screen py-24 bg-primary-50 text-primary-900"
      ref={componentRef}
    >
      <div className="px-6 mx-auto max-w-7xl">
        <p className="text-4xl font-extrabold md:text-6xl">
          <span>Let&apos;s work together.</span>
        </p>
        <Link href="mailto:es23jr@gmail.com">
          <p className="inline-block mt-2 underline">
            <span>es23jr@gmail.com</span>
          </p>
        </Link>
        <p className="max-w-md mt-4 text-base sm:text-lg lg:text-xl">
          <span>
            Interested in working together? Contact me! I&apos;m always looking
            for new positions.
          </span>
        </p>
        {socials.map((social) => (
          <Link
            href={social.link}
            key={social.name}
            rel="noreferrer"
            target="_blank"
          >
            <p className="inline-block mt-6 mr-3 text-sm opacity-60">
              <span>{social.name}</span>
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Footer
