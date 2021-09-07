import React from 'react'

import ContentContainer from '../../components/ContentContainer/ContentContainer'

import './Skills.scss'

const Skills = () => {
  return (
    <ContentContainer>
      <div className="section_title">
        <p>
          SKILLS
        </p>
      </div>
      <div className="section_content">
        <div className="skill">
          <h4>Programming languages</h4>
          <ul>
            <li>JavaScript, TypeScript, Node.js*</li>
            <li>Golang (Go)</li>
            <li>C#</li>
            <li>PHP</li>
            <li>Dart</li>
            <li>HTML5, CSS3</li>
          </ul>
        </div>
        <div className="skill">
          <h4>Frameworks and libraries</h4>
          <ul>
            <li>Express js / Adonis js / Nest js</li>
            <li>Gin / Iris / Echo / Beego / Fiber / Hugo</li>
            <li>Angular.js / Angular 8+</li>
            <li>Vue.js 2+</li>
            <li>React</li>
            <li>Flutter</li>
            <li>Laravel 6+, CodeIgniter</li>
            <li>Bootstrap 3.x / 4.x / 5.x</li>
            <li>Bulma CSS</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>
        <div className="skill">
          <h4>Databases</h4>
          <ul>
            <li>MS SQL Server</li>
            <li>PostgreSQL</li>
            <li>MySQL / MariaDB</li>
            <li>MongoDB</li>
            <li>SQLite</li>
          </ul>
        </div>
      </div>
    </ContentContainer>
  )
}

export default Skills
