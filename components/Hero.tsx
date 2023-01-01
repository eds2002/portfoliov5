import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import { socials } from '../data/socials'
import { useInView } from '../hooks/useInView'

const Hero: React.FC = () => {
  const componentRef = useRef<HTMLElement>(null)
  useInView(componentRef)

  return (
    <section
      className={`w-full mx-auto  py-28 md:py-32  transition duration-500 ease-[cubic-bezier(.07,.47,.24,.97)] max-w-7xl border-b-4 px-6 border-primary-50`}
      ref={componentRef}
    >
      <div>
        <p className="text-5xl font-extrabold md:text-9xl ">
          <span>Eduardo</span>
        </p>
      </div>
      <div className="flex flex-col w-full md:items-end md:justify-between md:flex-row">
        <div className="mt-8 md:mt-20 xl:mt-56">
          <div className="w-max">
            <Link href="mailto:es23jr@gmail.com">
              <p className="text-lg underline w-max">
                <span>es23jr@gmail.com</span>
              </p>
            </Link>
          </div>
          <div className="flex items-center mt-6 text-2xl font-bold md:text-4xl gap-x-3">
            <div className="w-2 h-2 rounded-full bg-primary-50" />
            <p>
              <span>Front End Developer</span>
            </p>
          </div>
        </div>
        <div className="max-w-xs mt-6 md:mt-0">
          <p>
            <span>
              Based in the United States, <b>New Jersey.</b>
            </span>
          </p>
          <p>
            <span>Let&apos;s get in touch.</span>
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
                <span>{social.name}</span>
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
