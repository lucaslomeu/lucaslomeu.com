import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className={`sticky top-0 w-full flex flex-col justify-start items-center bg-neutral-900 z-10 backdrop-filter backdrop-blur-md bg-opacity-60 px-14 ${
        isOpen ? 'h-100 gap-y-4 pt-10 pb-5' : 'py-10 h-10'
      }`}
    >
      <div
        className={`flex items-center justify-between mx-auto ${
          isOpen ? 'flex-col h-100 gap-y-4' : 'max-w-[768px] w-full h-full'
        }`}
      >
        <Image
          src='/logoWhite.png'
          width={isOpen ? 40 : 25}
          height={isOpen ? 40 : 25}
          alt='Logo'
        />
        <ul
          className={
            isOpen
              ? 'flex flex-col gap-y-2 items-center'
              : 'hidden md:flex gap-x-5'
          }
        >
          <Link href='#'>
            <div className='link-menu'>Sobre</div>
          </Link>
          <Link href='#'>
            <div className='link-menu'>Experiência</div>
          </Link>
          <Link href='#'>
            <div className='link-menu'>Projetos</div>
          </Link>
          <Link href='#'>
            <div className='link-menu'>Blog</div>
          </Link>
        </ul>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={isOpen ? 'absolute right-14' : 'md:hidden'}
        >
          {isOpen ? (
            <AiOutlineClose size={20} color='white' />
          ) : (
            <AiOutlineMenu size={20} color='white' />
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
