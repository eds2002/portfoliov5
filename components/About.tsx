import Link from 'next/link'
import { useRef } from 'react'
import { socials } from '../data/socials'
import { useInView } from '../hooks/useInView'

const About: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null)
  useInView(containerRef)
  return (
    <section
      className="py-24 bg-primary-50 text-primary-900"
      ref={containerRef}
    >
      <div className="px-6 mx-auto max-w-7xl ">
        <p className="text-4xl font-extrabold md:text-6xl">
          <span>About me</span>
        </p>
        <p className="max-w-md mt-4 text-base text-opacity-50">
          <span>
            I am a front end developer based in New Jersey. I love creating
            things for the web using react. As a developer, my main focus is to
            create a wonderful user experience both for mobile and desktop and
            is my main goal when starting a new job or project.
          </span>
        </p>
        <p className="mt-10 text-xl">
          <span>I have experience using:</span>
        </p>
        <div className="grid max-w-xl grid-cols-2 grid-rows-3 mt-2 text-opacity-50">
          <p>
            <span>Javascript ES6</span>
          </p>
          <p>
            <span>Typescript</span>
          </p>
          <p>
            <span>React</span>
          </p>
          <p>
            <span>Node</span>
          </p>
          <p>
            <span>Express</span>
          </p>
          <p>
            <span>Postgress SQL</span>
          </p>
          <p>
            <span>MySQL</span>
          </p>
          <p>
            <span>Tailwind</span>
          </p>
        </div>
        <p className="mt-16 text-2xl font-extrabold md:text-4xl">
          <span>Let&apos;s get in touch</span>
        </p>
        <Link href="mailto:es23jr@gmail.com">
          <p className="inline-block mt-6 text-base underline ">
            <span>es23jr@gmail.com</span>
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
                <span>{social.name}</span>
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
