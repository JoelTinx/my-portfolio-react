import React from 'react'

import ContentContainer from '../../components/ContentContainer/ContentContainer'

import './Hobbies.scss'

const Hobbies = () => {
  return (
    <ContentContainer>
      <div className="section_title">
        <p>
          HOBBIES
        </p>
      </div>
      <div className="section_content">
        <div className="hobbies">

          <div className="hobby">
            <div className="icon">
              <em className="fas fa-music"></em>
            </div>
            <div>
              Listen music (Pop, Rock, Indie, etc)
            </div>
          </div>
          
          <div className="hobby">
            <div className="icon">
              <em className="fas fa-film"></em>
            </div>
            <div>
              See series and movies
            </div>
          </div>
          
          <div className="hobby">
            <div className="icon">
              <em className="fas fa-book-reader"></em>
            </div>
            <div>
              Read short books
            </div>
          </div>

          <div className="hobby">
            <div className="icon">
              <em className="fas fa-utensils"></em>
            </div>
            <div>
              Eat and taste new dishes
            </div>
          </div>

          <div className="hobby">
            <div className="icon">
              <em className="fas fa-plane"></em>
            </div>
            <div>
              Visit new places (travel)
            </div>
          </div>

        </div>
      </div>
    </ContentContainer>
  )
}

export default Hobbies
