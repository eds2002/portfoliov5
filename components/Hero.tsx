import React from 'react'
import { socials } from '../data/socials'


const Hero:React.FC = () => {
  return (
    <section className = {`w-full mx-auto bg-background py-28 md:py-32  transition duration-500 ease-[cubic-bezier(.07,.47,.24,.97)] max-w-7xl border-b-4 px-6 border-black`}>
      <div>
        <h1 className = "text-5xl font-extrabold text-onBackground md:text-9xl ">Eduardo</h1>
      </div>
      <div className = "flex flex-col w-full md:items-end md:justify-between md:flex-row">
        <div className = "mt-8 md:mt-20 xl:mt-56">
          <a className = "text-lg underline text-onBackground" href = "mailto:es23jr@gmail.com">es23jr@gmail.com</a>
          <div className = "flex items-center mt-6 text-2xl font-bold text-onBackground md:text-4xl gap-x-3"><div className = "w-2 h-2 rounded-full bg-onBackground"/> <p>Front End Developer</p></div>
        </div>
        <div className = "max-w-xs mt-6 text-onBackground md:mt-0">
          <p>Based in the United States, <b>New Jersey.</b></p>
          <p >Let&apos;s get in touch.</p>
          {socials.map((social)=>(
          <a 
            href = {social.link} 
            key = {social.name}
            rel="noreferrer"
            target = "_blank"
            className = "hidden mr-3 text-sm text-onBackground md:inline-block opacity-60"
          >{social.name}</a>
        ))}
        </div>
      </div>
    </section>
  )
}

export default Hero