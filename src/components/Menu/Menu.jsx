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
        </li>
        <li>
          <CustomNavLink to="/skills" >Skills</CustomNavLink>
          </li>
        <li>
          <CustomNavLink to="/resume" >Resume</CustomNavLink>
          </li>
        <li>
          <CustomNavLink to="/works" >Works</CustomNavLink>
          </li>
        <li>
          <CustomNavLink to="/hobbies" >Hobbies</CustomNavLink>
          </li>
        <li>
          <CustomNavLink to="/contact" >Contact</CustomNavLink>
          </li>
      </ul>
    </nav>
  )
}

export default MenuComponent
