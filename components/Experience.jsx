import React, { useRef, useEffect } from 'react'
import { useRouter } from 'next/router'
// Context
import { useAuth } from '../AppContext'

const Experience = () => {
  const { menuIsOpen } = useAuth()

  const { asPath } = useRouter()

  const ref = {
    experiencia: useRef(null)
  }

  useEffect(() => {
    const urlHash = asPath.split('#')[1]

    if (
      urlHash &&
      typeof ref[urlHash] !== 'undefined' &&
      ref[urlHash].current
    ) {
      window.scrollTo({
        top:
          ref[urlHash].current.offsetTop -
          (menuIsOpen ? 230 : menuIsOpen ? 230 : 70),
        behavior: 'smooth'
      })
    }
  }, [asPath])

  return (
    <div className='container' ref={ref.experiencia}>
      <h1>Experiência</h1>
      <div className='content'>
        <div className='header-container'>
          <h2>Desenvolvedor Frontend</h2>
          <h3>18/02 - Atualmente</h3>
        </div>
        <h3>Proft</h3>
        <p className='text'>
          Desenvolvimento de novas features e manutenção de código,
          principalmente com ReactJS, porém também atuando com Electron e React
          Native. Utilização de Styled Components ou MaterialUI para estilização
          e git para versionamento de código.
        </p>
      </div>
    </div>
  )
}

export default Experience
