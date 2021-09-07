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

function App() {

  return (
    <Router>
      <MenuComponent />

      <div className="container">

        <div className="content">
          <div className="content-left">
            <div className="content-top">
              <div className="photo-container">
                <img src="/assets/img/joeltinx.jpg" alt="Joel Tinx" className="photo"/>
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
                <a href="https://pe.linkedin.com/in/dennistinoco" target="_blank">
                  <em className="fab fa-linkedin-in"></em>
                </a>
                <a href="https://github.com/JoelTinx" target="_blank">
                  <em className="fab fa-github"></em>
                </a>
                <a href="https://twitter.com/joeltinx" target="_blank">
                  <em className="fab fa-twitter"></em>
                </a>
                <a href="https://twitter.com/joeltinx" target="_blank">
                  <em className="fab fa-youtube"></em>
                </a>
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
