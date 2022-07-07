import React from 'react'

import { AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'

const Footer = () => {
  return (
    <div className='flex flex-row max-w-[768px] w-full justify-between items-center py-6'>
      <div className='text-neutral-50 text-xs'>
        © Lucas Lomeu - Todos os direitos reservados.
      </div>
      <div className='flex flex-row items-center gap-x-6'>
        <a
          href='https://github.com/lucaslomeu'
          target='_blank'
          rel='noopener noreferrer'
        >
          <AiOutlineGithub
            size={20}
            className='text-neutral-50 hover:text-indigo-600 duration-500'
          />
        </a>
        <a
          href='https://www.linkedin.com/in/lucaslomeu/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <AiFillLinkedin
            size={20}
            className='text-neutral-50 hover:text-indigo-600 duration-500'
          />
        </a>
        <a
          href='mailto:lucaslomeugomes@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <MdEmail
            size={20}
            className='text-neutral-50 hover:text-indigo-600 duration-500'
          />
        </a>
      </div>
    </div>
  )
}

export default Footer
