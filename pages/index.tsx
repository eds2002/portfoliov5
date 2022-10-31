import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Hero from '../components/Hero'
import Works from '../components/Works'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Eduardo Sanchez</title>
        <meta name = 'description' content='Eduardo Sanchez is a front end developer who creates wonderful user experiences through the web.'/>
      </Head>
      <Hero/>
      <Works/>
      <About/>
    </>
  )
}

export default Home
