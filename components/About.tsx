import { socials } from "../data/socials"


const About:React.FC = () => {
  return (
    <section className = "py-24 bg-black">
      <div className = "px-6 mx-auto max-w-7xl">
        <h1 className = "text-4xl font-extrabold text-white md:text-6xl">About me</h1>
        <p className = "max-w-md mt-4 text-base text-white/60">I am a front end developer based in New Jersey. I love creating things for the web using react. As a developer, my main focus is to create a wonderful user experience both for mobile and desktop and is my main goal when starting a new job or project.</p>
        <h5 className = "mt-10 text-xl text-white ">I have experience using:</h5>
        <div className = "grid max-w-xl grid-cols-2 grid-rows-3 mt-2 text-white/60">
          <p>Typescript</p>
          <p>React</p>
          <p>Node</p>
          <p>Express</p>
          <p>Postgress SQL</p>
          <p>MySQL</p>
          <p>Tailwind</p>
          <p>Tailwind</p>
        </div>
        <h1 className = "mt-16 text-2xl font-extrabold text-white md:text-4xl">Let&apos;s get in touch</h1>
        <a className = "inline-block mt-6 text-base text-white underline" href = "mailto:es23jr@gmail.com">es23jr@gmail.com</a>
        <div>
          {socials.map((social)=>(
            <a 
              href = {social.link} 
              target = "_blank"
              rel="noreferrer"
              className = "inline-block mt-6 mr-3 text-sm text-white opacity-60"
              key = {social.name}
            >{social.name}</a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About