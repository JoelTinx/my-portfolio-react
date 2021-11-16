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
            <div className="picture">
              <a href="http://csjjunin.gob.pe/" target="_blank">
                <img src="/assets/img/web_corte_junin.jpg" alt="web corte junin" loading="lazy" />
              </a>
            </div>
            <div className="work__container">
              <p>Website CSJJunin</p>
            </div>
          </div>

          <div className="work">
            <div className="picture">
              <a href="https://play.google.com/store/apps/details?id=pe.gob.csjjunin.app.cortejunin" target="_blank">
                <img src="/assets/img/app_corte_junin.jpg" alt="app corte junin" loading="lazy" />
              </a>
            </div>
            <div className="work__container">
              <p>Application CSJJunin</p>
            </div>
          </div>

          <div className="work">
            <div className="picture">
              <a href="https://appgallery.huawei.com/app/C102043701" target="_blank">
                <img src="/assets/img/imc_calculator.jpg" alt="imc calculator" loading="lazy" />
              </a>
            </div>
            <div className="work__container">
              <p>IMC Calculator (AppGallery)</p>
            </div>
          </div>

          <div className="work">
            <div className="picture">
              <a href="http://sopator2.netlify.app/" target="_blank">
                <img src="/assets/img/sopator.jpg" alt="sopator 2" loading="lazy" />
              </a>
            </div>
            <div className="work__container">
              <p>Sopator</p>
            </div>
          </div>

          <div className="work">
            <div className="picture">
              <a href="http://gocruz.herokuapp.com/" target="_blank">
                <img src="/assets/img/gocruz.jpg" alt="gocruz" loading="lazy" />
              </a>
            </div>
            <div className="work__container">
              <p>Go Cruz</p>
            </div>
          </div>

        </div>
      </div>
    </ContentContainer>
  )
}

export default Works
