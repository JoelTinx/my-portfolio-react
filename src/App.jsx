import React from 'react'
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import MenuComponent from './components/Menu/Menu'
import AboutPage from './pages/About/About'
import ContactPage from './pages/Contact/Contact'
import HobbiesPage from './pages/Hobbies/Hobbies'
import ResumePage from './pages/Resume/Resume'
import SkillsPage from './pages/Skills/Skills'
import WorksPage from './pages/Works/Works'

import './App.scss'

const App = () => {

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://pe.linkedin.com/in/dennistinoco',
      icon: 'fab fa-linkedin-in',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/JoelTinx',
      icon: 'fab fa-github',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/joeltinx',
      icon: 'fab fa-twitter',
    },
    {
      name: 'YouTube',
      url: 'https://twitter.com/joeltinx',
      icon: 'fab fa-youtube',
    },
  ]

  return (
    <Router>
      <MenuComponent />
      <div className="container">
        <div className="content">
          <div className="content-left">
            <div className="content-top">
              <div className="photo-container">
                <img 
                  src="/assets/img/joeltinx.jpg"
                  alt="Joel Tinx"
                  className="photo"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="content-bottom">
              <p className="title">
                Hi, I'm Dennis Tinoco
              </p>
              <p className="subtitle">
                FullStack Developer
              </p>
              <div className="icons">
                {
                  socialLinks.map((socialLink, index) => (
                    <a 
                      key={`social-${index}`}
                      href={socialLink.url}
                      target="_blank"
                      className="icon"
                    >
                      <em className={socialLink.icon}></em>
                    </a>
                  ))
                }
              </div>
            </div>
          </div>
          <div className="content-right">
            <Switch>
              <Route path="/" exact component={AboutPage} />
              <Route path="/contact" exact component={ ContactPage } />
              <Route path="/hobbies" exact component={ HobbiesPage } />
              <Route path="/resume" exact component={ ResumePage } />
              <Route path="/skills" exact component={ SkillsPage } />
              <Route path="/works" exact component={ WorksPage } />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
