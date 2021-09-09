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

          <div className="work">
            <div>
              <p>Website CSJJunin</p>
            </div>
            <div className="picture">
              <a href="http://csjjunin.gob.pe/" target="_blank">
                <img src="/assets/img/web_corte_junin.jpg" alt="aweb corte junin" loading="lazy" />
              </a>
            </div>
          </div>

          <div className="work">
            <div>
              <p>Application CSJJunin (Playstore)</p>
            </div>
            <div className="picture">
              <a href="https://play.google.com/store/apps/details?id=pe.gob.csjjunin.app.cortejunin" target="_blank">
                <img src="/assets/img/app_corte_junin.jpg" alt="app corte junin" loading="lazy" />
              </a>
            </div>
          </div>

          <div className="work">
            <div>
              <p>Application IMC Calculator (AppGallery)</p>
            </div>
            <div className="picture">
              <a href="#">
                <img src="/assets/img/imc_calculator.jpg" alt="app corte junin" loading="lazy" />
              </a>
            </div>
          </div>

          <div className="work">
            <div>
              <a className="anchor" href="http://sopator.260mb.net/" target="_blank">
                <p>Sopator</p>
              </a>
            </div>
          </div>

          <div className="work">
            <div>
              <a className="anchor" href="https://github.com/JoelTinx/GoCruz" target="_blank">
                <p>GoCruz</p>
              </a>
            </div>
          </div>
      
        </div>
      </div>
    </ContentContainer>
  )
}

export default Works
