import React from 'react'

import ContentContainer from '../../components/ContentContainer/ContentContainer'

import './About.scss'

const About = () => {

  return (
    <ContentContainer>
      <div className="section_title">
        <p>
          ABOUT ME
        </p>
      </div>
      <div className="section_content">
        <div>
          <p>
          I am a professional with several years of experience developing software and wide domain of different programming languages such as: Golang, JavaScript, Node.js, PHP, C#, java, c++, fox pro, in addition to knowledge of design and database development using: MsSQL Server, MySQL, PostgreSQL, MongoDB, SQLite.
          </p>
        </div>
        <div className="topic">
          <h4>Profession:</h4>
          <p>Systems Engineer</p>
        </div>
        <div className="topic">
          <h4>From:</h4>
          <p>Perú</p>
        </div>
      </div>
    </ContentContainer>
  )
}

export default About
