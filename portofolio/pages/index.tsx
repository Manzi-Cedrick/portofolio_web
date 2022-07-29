import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Manzi Cedrick</title>
        <link rel="icon" href="/assets/logo.svg" />
      </Head>
      <main>
        <Navbar/>
        <Hero/>
        <Skills/>
        <Projects/>
      </main>
      <footer className="flex h-24  items-center justify-center border-t">
        <Link
          className="flex items-center justify-center gap-2"
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Developed with by
          {/* <Image src="/assets/logo.svg" alt="Vercel Logo" width={72} height={16} /> */}
        </Link>
      </footer> 
    </div>          
  )
}

export default Home
