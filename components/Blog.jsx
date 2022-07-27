import React, { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router'
import moment from 'moment'

// Context
import { useAuth } from '../AppContext'

const Blog = () => {
  const { menuIsOpen } = useAuth()

  const [articles, setArticles] = useState()

  useEffect(() => {
    fetch('https://dev.to/api/articles?username=lucaslomeu')
      .then(res => res.json())
      .then(res => setArticles(res))
  }, [])

  const { asPath } = useRouter()

  const ref = {
    sobre: useRef(null),
    experiencia: useRef(null),
    projetos: useRef(null),
    blog: useRef(null)
  }

  useEffect(() => {
    const urlHash = asPath.split('#')[1]

    if (
      urlHash &&
      typeof ref[urlHash] !== 'undefined' &&
      ref[urlHash].current
    ) {
      window.scrollTo({
        top: ref[urlHash].current.offsetTop - (menuIsOpen ? 230 : 70),
        behavior: 'smooth'
      })
    }
  }, [asPath])

  return (
    <div className='container' ref={ref.blog}>
      <h1>Blog</h1>
      {articles &&
        articles.map(item => (
          <div key={item.id} className='content'>
            <a target='_blank' href={item.url} rel='noopener noreferrer'>
              <div className='header-container'>
                <h2>{item.title}</h2>
                <div className='flex flex-row gap-x-2'>
                  <h3>
                    {moment(item.published_at)
                      .format('DD-MM-YY')
                      .split('-')
                      .join('/')}
                  </h3>
                </div>
              </div>
              <div className='subHeader-container'>
                <h3>{item.tags.split(',').join(' ')}</h3>
              </div>
              <div className='text'>{item.description}</div>
            </a>
          </div>
        ))}
    </div>
  )
}

export default Blog
