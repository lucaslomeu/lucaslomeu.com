import React from 'react';
import './Info.scss';
import LogoImg from '../../assets/images/lucas.png';

const Info = () => {
  return (
    <div className="info-container">
      <div className="info-img">
        <img src={LogoImg} alt="Lucas Avatar" />
      </div>
      <div className="info-content">
        <h1 className="title-info">Olá, sou Lucas Lomeu</h1>
        <div className="text-info">
          Atualmente professor particular de exatas e estudante de
          desenvolvimento frontend. Estou a procura da minha primeira
          oportunidade na área, possuindo conhecimento em HTML5; CSS; SCSS;
          JavaScript; ReactJs e noções intermediárias de Photoshop.
        </div>
      </div>
    </div>
  );
};

export default Info;
