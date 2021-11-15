import React from 'react'

import { NavLink } from 'react-router-dom'

import './Menu.scss'

const CustomNavLink = ({ to, children, ...props }) => {
  return (
    <NavLink
      {...props}
      to={to}
      className={({ isActive }) => `${isActive ? 'active' : ''}`}
    >
      { children }
    </NavLink>
  )
}

const MenuComponent = () => {
  return (
    <nav>
      <ul>
        <li>
          <CustomNavLink to="/" >About</CustomNavLink>
          <CustomNavLink to="/skills" >Skills</CustomNavLink>
          <CustomNavLink to="/resume" >Resume</CustomNavLink>
          <CustomNavLink to="/works" >Works</CustomNavLink>
          <CustomNavLink to="/hobbies" >Hobbies</CustomNavLink>
          <CustomNavLink to="/contact" >Contact</CustomNavLink>
        </li>
      </ul>
    </nav>
  )
}

export default MenuComponent
