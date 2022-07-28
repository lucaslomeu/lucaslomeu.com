import React from 'react'

const About = () => {
  return (
    <div name='sobre' className='flex flex-col gap-y-4' id='about'>
      <p className='text-2xl text-neutral-200 font-bold tracking-wides'>
        Olá, sou <span className='text-indigo-400'>Lucas Lomeu.</span>
      </p>
      <p className='text'>
        Desenvolvedor frontend, bacharel em Engenharia Civil. Atualmente atuando
        como desenvoledor frontend, sendo responsável por todos os projetos
        relacionados a frontend na empresa, utilizando principalmente ReactJS,
        ReactNative e Electron.
      </p>
      <p className='text'>
        Atualmente aprimorando meus conhecimentos em ReactJS para proporcionar
        belas aplicações que possam fazer com que o usuário tenha excelentes
        experiências web. Além de possuir conhecimento em: StyledComponents;
        SASS; Redux; Custom Hook; Git; Photoshop e Figma.
      </p>
      <div className='flex gap-x-2 md:gap-x-4'>
        <a
          href='https://github.com/lucaslomeu'
          className='btn-social'
          target='_blank'
          rel='noopener noreferrer'
        >
          Github
        </a>
        <a
          href='https://www.linkedin.com/in/lucaslomeu/'
          className='btn-social'
          target='_blank'
          rel='noopener noreferrer'
        >
          LinkedIn
        </a>
        <a
          href='mailto:lucaslomeugomes@gmail.com'
          className='btn-social'
          target='_blank'
          rel='noopener noreferrer'
        >
          Email
        </a>
      </div>
    </div>
  )
}

export default About
