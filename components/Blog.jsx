import React, { useEffect, useState } from 'react'
import moment from 'moment'

const Blog = () => {
  const [articles, setArticles] = useState()

  useEffect(() => {
    fetch('https://dev.to/api/articles?username=lucaslomeu')
      .then(res => res.json())
      .then(res => setArticles(res))
  }, [])

  return (
    <div className='container'>
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
