import React from 'react'
import {socials} from '../data/socials'

const Footer:React.FC = () => {
  return (
    <section className = "py-24 bg-black">
      <div className = "px-6 mx-auto max-w-7xl">
        <h1 className = "text-4xl font-extrabold text-white md:text-6xl">Let&apos;s work together.</h1>
        <a href = "mailto:es23jr@gmail.com" className = "inline-block mt-2 text-white underline">es23jr@gmail.com</a>
        <p className = "max-w-md mt-4 text-base text-white/60 sm:text-lg lg:text-xl">Interested in working together? Contact me! I&apos;m always looking for new positions.</p>
        {socials.map((social)=>(
          <a 
            href = {social.link} 
            key = {social.name}
            rel="noreferrer"
            target = "_blank"
            className = "inline-block mt-6 mr-3 text-sm text-white opacity-60"
          >{social.name}</a>
        ))}
      </div>
    </section>
  )
}

export default Footer