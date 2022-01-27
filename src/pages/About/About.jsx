import React from 'react';
import Header from '../../components/Header/Header';

import './About.scss';

const About = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="about">
          <div className="about-content">
            <div className="about-text">
              <div className="about-title">Conheça-me</div>
              <div className="paragraph">
                Lucas Lomeu, nascido em 5 de janeiro de 1998 em Governador
                Valadares, Minas Gerais, Brasil, bacharel em Engenharia Civil.
              </div>
              <div className="paragraph">
                Desde adolescência sempre tive imenso prazer em áreas da
                tecnologia, comecei pelo design gráfico em fóruns e isso me
                trouxe até alguns trabalhos como freelancer. Inclusive nesses
                fóruns comecei a estudar delphi.
              </div>
              <div className="paragraph">
                Atualmente professor particular de exatas e estudante de
                desenvolvimento frontend. Possuo conhecimento em HTML5; CSS;
                SCSS; JavaScript; ReactJs e noções intermediárias de Photoshop.
              </div>

              <div className="paragraph">
                Estou aperfeiçoando principalmente minhas habilidades em ReactJs
                e estudando .NET e C#.
              </div>
            </div>
          </div>
          <div className="curriculum">Baixe aqui meu currículo.</div>
        </div>
      </div>
    </>
  );
};

export default About;
