import React from 'react';

import './Info.scss';
import PersonGif from '../../assets/images/lucas.gif';

import { FaLinkedinIn } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';

const Info = () => {
  const handleClick = (url) => {
    window.open(url);
  };

  return (
    <div className="container">
      <div className="info-img">
        <img src={PersonGif} alt="Lucas Avatar" />
      </div>
      <div className="info-content">
        <h1 className="title-info">
          Olá, sou <span className="title-name">Lucas Lomeu</span>
        </h1>
        <div className="text-info">
          Desenvolvedor Frontend e entusiasta da tecnologia.
        </div>
        <div className="links-info">
          <div
            className="social-link"
            onClick={() => handleClick('https://github.com/lucaslomeu')}
          >
            <FiGithub />
          </div>
          <div
            className="social-link"
            onClick={() =>
              handleClick('https://www.linkedin.com/in/lucaslomeu/')
            }
          >
            <FaLinkedinIn />
          </div>
          <div
            className="social-link"
            onClick={() => handleClick('mailto: lucaslomeugomes@gmail.com')}
          >
            <MdOutlineEmail />
          </div>
          <div
            className="social-link"
            onClick={() => handleClick('https://wa.me/5533999321998')}
          >
            <FaWhatsapp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
