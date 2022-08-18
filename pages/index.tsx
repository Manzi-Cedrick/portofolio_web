import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { FaBehance, FaGithub, FaInstagram, FaLinkedin, FaDribbble, FaGithubAlt , FaFacebook, FaTwitter, FaHeart } from 'react-icons/fa'
import Contacts from '../components/Contacts'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import { LinksProfile } from '../components/data.types'
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Manzi Cedrick</title>
        <link rel="icon" href="/assets/logo.svg" />
      </Head>
      <main>
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Contacts />
      </main>
      <footer className="flex relative  text-white flex-col min-h-[40vh] bg-[#181515]  items-center justify-center">
        <h1 className='pb-2 text-xl md:text-5xl font-bold'>
          Manzi Cedrick
        </h1>
        <p className="text-[12px] md:text-base">Your can reach me out via following social platforms .</p>
        <div className='flex gap-2 md:gap-4 py-5'>
          <form action="https://www.instagram.com/cedrickmanz01/">
          <button type="submit" className='md:md:p-3 p-2 hover:bg-[#9d53e8]  flex justify-center place-items-center bg-backG text-white rounded-full'>
            <FaInstagram />
          </button>
          </form>
          <form action="https://www.linkedin.com/in/manzi-cedrick-773615228/">
          <button type="submit" className='md:p-3 p-2 hover:bg-[#9d53e8] flex justify-center place-items-center bg-backG text-white rounded-full'>
            <FaLinkedin />
          </button>
          </form>
          
          <form action="https://dribbble.com/Manzi-Cedrick">
          <button type="submit" className='md:p-3 p-2 hover:bg-[#9d53e8] flex justify-center place-items-center bg-backG text-white rounded-full'>
            <FaDribbble />
          </button>
          </form>
          
          <form action="https://github.com/Manzi-Cedrick">
          <button type="submit" className='md:p-3 p-2 hover:bg-[#9d53e8] flex justify-center place-items-center bg-backG text-white rounded-full'>
            <FaGithub />
          </button>
          </form>
          
          <form action="https://www.behance.net/cedrickmanzi">
          <button type="submit" className='md:p-3 p-2 hover:bg-[#9d53e8] flex justify-center place-items-center bg-backG text-white rounded-full'>
            <FaBehance />
          </button>
          </form>
          
          <form action="https://twitter.com/cedrickmanzi3">
          <button type="submit" className='md:p-3 p-2 hover:bg-[#9d53e8] flex justify-center place-items-center bg-backG text-white rounded-full'>
            <FaTwitter />
          </button>
          </form>
          
          <form action="/">
          <button type="submit" className='md:p-3 p-2 hover:bg-[#9d53e8] flex justify-center place-items-center bg-backG text-white rounded-full'>
            <FaFacebook />
          </button>
          </form>
        </div>
        <div className='pt-4 text-center absolute bottom-0'>
        <p>© Copyright Portfolio. All Rights Reserved.</p>
        <Link
          className="flex items-center justify-center gap-2"
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className='text-[12px] flex justify-center gap-2'> Designed with <FaHeart className='text-red-500'/> by <span className='text-backG'>Manzi Cedrick Tech</span></p>
          {/* <Image src="/assets/logo.svg" alt="Vercel Logo" width={72} height={16} /> */}
        </Link>
        </div>
      </footer>
    </div>
  )
}

export default Home
