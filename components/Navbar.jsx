import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

// Context
import { useAuth } from '../AppContext'

// Icons
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
  const { menuIsOpen, setMenuIsOpen } = useAuth()

  return (
    <div
      className={`sticky top-0 w-full flex flex-col justify-start items-center bg-neutral-900 z-10 backdrop-filter backdrop-blur-md bg-opacity-60 px-14 ${
        menuIsOpen ? 'h-100 gap-y-4 pt-10 pb-5' : 'py-10 h-10'
      }`}
    >
      <div
        className={`flex items-center justify-between mx-auto ${
          menuIsOpen ? 'flex-col h-100 gap-y-4' : 'max-w-[768px] w-full h-full'
        }`}
      >
        <Image
          src='/logoWhite.png'
          width={menuIsOpen ? 40 : 25}
          height={menuIsOpen ? 40 : 25}
          alt='Logo'
        />
        <ul
          className={
            menuIsOpen
              ? 'flex flex-col gap-y-2 items-center'
              : 'hidden md:flex gap-x-5'
          }
        >
          <Link href='/' smooth={true} duration={500} offset={50}>
            <a className='link-menu'>Sobre</a>
          </Link>
          <Link href='#experiencia' smooth={true} duration={500} offset={50}>
            <a className='link-menu'>Experiência</a>
          </Link>
          <Link href='#projetos' smooth={true} duration={500} offset={50}>
            <a className='link-menu'>Projetos</a>
          </Link>
          <Link href='#blog' smooth={true} duration={500} offset={50}>
            <a className='link-menu'>Blog</a>
          </Link>
        </ul>
        <div
          onClick={() => setMenuIsOpen(!menuIsOpen)}
          className={menuIsOpen ? 'absolute right-14' : 'md:hidden'}
        >
          {menuIsOpen ? (
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
