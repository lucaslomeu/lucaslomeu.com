import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import './Blog.scss';

const Blog = () => {
  const handleClick = (url) => {
    window.open(url);
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="blog">
          <div className="blog-content">
            <div
              className="blog-card"
              onClick={() =>
                handleClick(
                  'https://dev.to/lucaslomeu/criando-todolist-com-reactjs-1k88',
                )
              }
            >
              <div className="article-title">Criando TodoList com ReactJs</div>
              <div className="article-date">
                Publicado em 16 de Novembro de 2021
              </div>
              <div className="article-content">
                Nesse tutorial iremos desenvolver um "TodoList" em ReactJs da
                maneira mais simples possível, sendo assim, não iremos focar em
                estilização do mesmo. Recomendo que tenha noção básica de
                JavaScript.
              </div>
              <div className="article-tags">
                <div className="tag">#react</div>
                <div className="tag">#javascript</div>
                <div className="tag">#braziliandevs</div>
                <div className="tag">#wedev</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
