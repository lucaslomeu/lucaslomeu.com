import Head from 'next/head'
import About from '../components/About'
import Blog from '../components/Blog'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Contact from '../components/Contact'

export default function Home () {
  return (
    <div style={{ scrollBehavior: 'smooth' }}>
      <Head>
        <title>Lucas Lomeu - Frontend Developer</title>
        <meta name='description' content='Lucas Lomeu - Frontend Developer' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <div className='w-full text-justify mt-28'>
        <div className='max-w-[768px] w-full mx-auto p-2 flex justify-center items-left flex-col gap-y-12 divide-y divide-neutral-800'>
          <About />
          <Experience />
          <Projects />
          <Blog />
          <Contact />
        </div>
      </div>
    </div>
  )
}
