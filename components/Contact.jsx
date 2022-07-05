import React, { useEffect, useState } from 'react'
import moment from 'moment'

const Contact = () => {
  const [articles, setArticles] = useState()

  useEffect(() => {
    fetch('https://dev.to/api/articles?username=lucaslomeu')
      .then(res => res.json())
      .then(res => setArticles(res))
  }, [])

  return (
    <div className='container'>
      <h1>Contato</h1>
    </div>
  )
}

export default Contact
