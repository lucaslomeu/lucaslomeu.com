import React, { useState, useRef, useEffect } from 'react'
import Head from 'next/head'
import About from '../components/About'
import Blog from '../components/Blog'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Footer from '../components/Footer'

export default function Home () {
  return (
    <div>
      <Head>
        <title>Lucas Lomeu - Frontend Developer</title>
        <meta name='description' content='Lucas Lomeu - Frontend Developer' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />

      <div className='w-full mt-20 px-12 sm:px-24'>
        <div className='max-w-[768px] w-full mx-auto p-2 flex justify-center items-left flex-col gap-y-12 divide-y divide-neutral-800'>
          <About />
          <Experience />
          <Projects />
          <Blog />
          <Footer />
        </div>
      </div>
    </div>
  )
}
