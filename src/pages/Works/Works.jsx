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
              <p>Sopator</p>
            </div>
            <div className="picture">
              <a href="http://sopator2.netlify.app/">
                <img src="/assets/img/sopator.jpg" alt="sopator" loading="lazy" />
              </a>
            </div>
          </div>

          <div className="work">
            <div>
              <p>GoCruz</p>
            </div>
            <div className="picture">
              <a href="http://gocruz.herokuapp.com/">
                <img src="/assets/img/gocruz.jpg" alt="gocruz" loading="lazy" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </ContentContainer>
  )
}

export default Works
