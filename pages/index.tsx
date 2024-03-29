import type { NextPage } from 'next'
import Head from 'next/head'
import { About, Contact, Footer, Hero, Navbar, Projects } from '../components/Sections'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ben Hoeg</title>
        <meta name="description" content="Ben Hoeg is a fullstack software developer." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      {/* <main> */}
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
      {/* </main> */}
    </>
  )
}

export default Home
