import React from 'react'

const Projects = () => {
  return (
    <div className='container'>
      <h1>Projetos</h1>
      <div className='content'>
        <div className='header-container'>
          <h2>LomeuShop</h2>
          <div className='flex flex-row gap-x-2'>
            <a
              className='btn-project'
              href='https://github.com/lucaslomeu/shopping-cart'
              target='_blank'
              rel='noopener noreferrer'
            >
              source
            </a>
            <a
              className='btn-project'
              href='https://shopping-cart-teal.vercel.app/'
              target='_blank'
              rel='noopener noreferrer'
            >
              demo
            </a>
          </div>
        </div>
        <div className='subHeader-container'>
          <h3>ReactJS</h3>
          <h3>SASS</h3>
        </div>
        <div className='text'>
          Website desenvolvido durante um teste para uma empresa, tenho como
          objetivo um simples carrinho de compras.
        </div>
      </div>

      <div className='content'>
        <div className='header-container'>
          <h2>CryptoCurrency</h2>
          <div className='flex flex-row gap-x-2'>
            <a
              className='btn-project'
              href='https://github.com/lucaslomeu/cryptoCurrency'
              target='_blank'
              rel='noopener noreferrer'
            >
              source
            </a>
            <a
              className='btn-project'
              href='https://crypto-currency-phi.vercel.app/'
              target='_blank'
              rel='noopener noreferrer'
            >
              demo
            </a>
          </div>
        </div>
        <div className='subHeader-container'>
          <h3>ReactJS</h3>
          <h3>API</h3>
          <h3>Styled Components</h3>
        </div>
        <div className='text'>
          Realizado para estudo de consumo de API, utilizando ReactJS e
          StyledComponents. O projeto foi desenvolvido para aplicação de
          criptomoedas, como o Bitcoin, Ethereum, Litecoin, etc.
        </div>
      </div>

      <div className='content'>
        <div className='header-container'>
          <h2>MovieSearch</h2>
          <div className='flex flex-row gap-x-2'>
            <a
              className='btn-project'
              href='https://github.com/lucaslomeu/movies-search'
              target='_blank'
              rel='noopener noreferrer'
            >
              source
            </a>
            <a
              className='btn-project'
              href='https://movies-search-azure.vercel.app/'
              target='_blank'
              rel='noopener noreferrer'
            >
              demo
            </a>
          </div>
        </div>
        <div className='subHeader-container'>
          <h3>ReactJS</h3>
          <h3>API</h3>
          <h3>SASS</h3>
        </div>
        <div className='text'>
          Foi desenvolvido um site de busca de filmes utilizando a api YTS, onde
          é possível obter informações e até mesmo realizar o download via
          torrent.
        </div>
      </div>

      <div className='content'>
        <div className='header-container'>
          <h2>Álbum de Fotos</h2>
          <div className='flex flex-row gap-x-2'>
            <a
              className='btn-project'
              href='https://github.com/lucaslomeu/photo-album'
              target='_blank'
              rel='noopener noreferrer'
            >
              source
            </a>
            <a
              className='btn-project'
              href='https://photo-album-lucaslomeu.vercel.app/'
              target='_blank'
              rel='noopener noreferrer'
            >
              demo
            </a>
          </div>
        </div>
        <div className='subHeader-container'>
          <h3>ReactJS</h3>
          <h3>API</h3>
          <h3>SASS</h3>
        </div>
        <div className='text'>
          Website desenvolvido para busca de fotos, utilizando a API da Pexel,
          sendo possível realizar o download da foto escolhida em tamanhos
          variados.
        </div>
      </div>

      <div className='content'>
        <div className='header-container'>
          <h2>Corona Stats</h2>
          <div className='flex flex-row gap-x-2'>
            <a
              className='btn-project'
              href='https://github.com/lucaslomeu/CoronaStats'
              target='_blank'
              rel='noopener noreferrer'
            >
              source
            </a>
            <a
              className='btn-project'
              href='https://corona-stats-one.vercel.app/'
              target='_blank'
              rel='noopener noreferrer'
            >
              demo
            </a>
          </div>
        </div>
        <div className='subHeader-container'>
          <h3>ReactJS</h3>
          <h3>API</h3>
          <h3>SASS</h3>
        </div>
        <div className='text'>
          Estudo de consumo de API, consumindo dados de covid-19 nos estados
          Brasileiros.
        </div>
      </div>
    </div>
  )
}

export default Projects
