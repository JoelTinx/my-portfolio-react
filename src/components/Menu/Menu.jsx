import React from 'react'

import { NavLink, BrowserRouter as Router } from 'react-router-dom'

import './Menu.scss'

const MenuComponent = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active">About</NavLink>
          <NavLink exact to="/skills" activeClassName="active">Skills</NavLink>
          <NavLink exact to="/resume" activeClassName="active">Resume</NavLink>
          <NavLink exact to="/works" activeClassName="active">Works</NavLink>
          <NavLink exact to="/hobbies" activeClassName="active">Hobbies</NavLink>
          <NavLink exact to="/contact" activeClassName="active">Contact</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default MenuComponent
