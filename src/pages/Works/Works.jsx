import React from 'react'

import ContentContainer from '../../components/ContentContainer/ContentContainer'

import './Works.scss'

const Works = () => {
  return (
    <ContentContainer>
      <div className="section_title">
        <p>
          PORTFOLIO
        </p>
      </div>
      <div className="section_content">
        <div className="projects">

          <div>
            <p>Aplicativo móvil Auna</p>
          </div>

          <div>
            <p>Portal Web CSJJunin</p>
          </div>

          <div>
            <p>Aplicativo móvil CSJJunin</p>
          </div>

          <div>
            <p>Sopator</p>
          </div>

          <div>
            <p>GoCruz</p>
          </div>
      
        </div>
      </div>
    </ContentContainer>
  )
}

export default Works
