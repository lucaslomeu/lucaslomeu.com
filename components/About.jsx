import React from 'react'

const About = () => {
  return (
    <div className='w-full h-screen text-left'>
      <div className='max-w-[968px] w-full h-full mx-auto p-2 flex justify-center items-left flex-col gap-y-6'>
        <div className='flex flex-col gap-y-4'>
          <p className='text-2xl text-neutral-200 font-bold tracking-wide'>
            Olá, sou Lucas Lomeu.
          </p>
          <p className='text-base text-neutral-200'>
            Desenvolvedor frontend, bacharel em Engenharia Civil. Atualmente
            atuando como desenvoledor frontend na Proft, sendo responsável por
            todos os projetos relacionados a frontend na empresa, utilizando
            ReactJS, ReactNative e Electron.
          </p>
          <p className='text-base text-neutral-200'>
            Atualmente aprimorando meus conhecimentos em ReactJS para
            proporcionar belas aplicações que possam fazer com que o usuário
            tenha excelentes experiências web.
          </p>
        </div>
        <div className='flex gap-x-5'>
          <div className='btn-social'>Github</div>
          <div className='btn-social'>LinkedIn</div>
          <div className='btn-social'>Email</div>
        </div>
      </div>
    </div>
  )
}

export default About
