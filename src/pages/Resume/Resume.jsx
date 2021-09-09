import React from 'react'

import ContentContainer from '../../components/ContentContainer/ContentContainer'

import './Resume.scss'

const Resume = () => {
  return (
    <ContentContainer>
      <div className="section_title">
        <p>
          WHERE I’VE WORKED
        </p>
      </div>
      <div className="section_content">
        <div className="works">
          <div className="work">
            <h5>Mobile Frontend Developer @ AUNA</h5>
            <p>Jan 2021 - Present</p>
            <div className="techs">
              <span>Ionic</span>
              <span>Angular</span>
              <span>Stencil</span>
              <span>Storybook</span>
              <span>Monorepos NX</span>
            </div>
          </div>
          <div className="work">
            <h5>FullStack Developer @ Datacont S.A.C.</h5>
            <p>Sep 2020 - Dec 2020</p>
            <div className="techs">
              <span>Nodejs</span>
              <span>Expressjs</span>
              <span>Vue.js 2</span>
              <span>MSSQLServer</span>
              <span>Bulma css</span>
              <span>Tailwind css</span>
              <span>Material UI</span>
            </div>
          </div>
          <div className="work">
            <h5>FullStack Developer @ Freelance</h5>
            <p>Feb 2020 - Aug 2020</p>
            <div className="techs">
              <span>Nodejs</span>
              <span>Expressjs</span>
              <span>Laravel</span>
              <span>Angular</span>
              <span>React</span>
              <span>PostgreSql</span>
              <span>Bootstrap 5</span>
            </div>
          </div>
          <div className="work">
            <h5>Systems Analyst Programmer @  CSJ Junín - Poder Judicial</h5>
            <p>Apr 2017 - Feb 2020</p>
            <div className="techs">
              <span>Golang</span>
              <span>Laravel</span>
              <span>Expressjs</span>
              <span>Vue.js 2</span>
              <span>Android/java</span>
              <span>MySQL</span>
              <span>PostgreSql</span>
              <span>Angular.js</span>
              <span>Bootstrap css</span>
            </div>
          </div>
          <div className="work">
            <h5>Systems Analyst Programmer @ Universidad Continental</h5>
            <p>Aug 2016 - Dec 2016</p>
            <div className="techs">
              <span>ASP C# MVC</span>
              <span>Angular.js</span>
              <span>MSSQLServer</span>
              <span>Oracle</span>
              <span>Bootstrap css</span>
            </div>
          </div>
          <div className="work">
            <h5>FullStack Developer @ WankaTix</h5>
            <p>Jan 2014 - Jul 2016</p>
            <div className="techs">
              <span>Nodejs</span>
              <span>Expressjs</span>
              <span>Golang</span>
              <span>MySQL</span>
              <span>PostgreSql</span>
              <span>Bootstrap css</span>
              <span>MongoDB</span>
            </div>
          </div>
          <div className="work">
            <h5>Systems Programmer Assistant @ Caja Municipal de Ahorro y Crédito Huancayo</h5>
            <p>Nov 2012 - Dec 2013</p>
            <div className="techs">
              <span>Fox Pro</span>
              <span>C#</span>
              <span>MSSQLServer</span>
            </div>
          </div>
        </div>
      </div>
    </ContentContainer>
  )
}

export default Resume
