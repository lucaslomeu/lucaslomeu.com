import React, { useState } from 'react'
import Link from 'next/link'

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='sticky top-0 w-full py-8 h-10 bg-neutral-900 z-10 backdrop-filter backdrop-blur-md bg-opacity-60'>
      <div
        className={
          !isOpen &&
          'flex items-center justify-between w-[768px] h-full mx-auto md:max-w-5xl'
        }
      >
        <div className='text-gray-500'>Logo</div>
        <ul className='hidden sm:flex gap-x-5'>
          <Link href='#'>
            <div className='link-menu'>Sobre</div>
          </Link>
          <Link href='#'>
            <div className='link-menu'>Projetos</div>
          </Link>
          <Link href='#'>
            <div className='link-menu'>Blog</div>
          </Link>
          <Link href='#'>
            <div className='link-menu'>Contato</div>
          </Link>
        </ul>
        <div onClick={() => setIsOpen(!isOpen)} className='sm:hidden'>
          <AiOutlineMenu size={20} color='white' />
        </div>

        {isOpen && (
          <div className='fixed top-0 w-full h-full bg-white'>
            <ul>
              <Link href='#'>
                <div className='text-black'>Sobre</div>
              </Link>
              <Link href='#'>
                <div className='text-black'>Projetos</div>
              </Link>
              <Link href='#'>
                <div className='text-black'>Blog</div>
              </Link>
              <Link href='#'>
                <div className='text-black'>Contato</div>
              </Link>
            </ul>
            <div onClick={() => setIsOpen(!isOpen)}>
              <AiOutlineClose size={20} color='black' />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
