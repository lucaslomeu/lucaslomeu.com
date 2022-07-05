import React from 'react'

const Experience = () => {
  return (
    <div className='container'>
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
      <div className='content'>
        <div className='header-container'>
          <h2>Estagiário de Engenharia Civil</h2>
          <h3>02/20 - 08/20</h3>
        </div>
        <h3>Rede HG</h3>
        <p className='text'>
          Estagiário de Engenharia Civil na construção do posto de gasolina
          “Posto Ferrari” da Rede HG. Tendo como principais atividades:
          orçamento e compra de materiais; relatório de obra; gestão de equipe;
          acompanhamento da execução da obra.
        </p>
      </div>
      <div className='content'>
        <div className='header-container'>
          <h2>Professor particular</h2>
          <h3>07/19 - 12/19</h3>
        </div>
        <h3>Autônomo</h3>
        <p className='text'>
          Professor particular para alunos do ensino fundamental e ensino médio,
          com foco nos conteúdos de matemática; física e química. Sendo as aulas
          de acordo com o que o aluno está aprendendo na escola, reforçando o
          que está sendo ensinado, tirando dúvidas e realizando exercícios para
          fixação.
        </p>
      </div>
    </div>
  )
}

export default Experience
