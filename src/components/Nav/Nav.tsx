import React from 'react';
import './Nav.css';
import {NavLink} from 'react-router-dom'

export const Nav = () => {
  return (
    <nav>
      <NavLink to="/favorites">Favorites</NavLink> | <NavLink to="/">Home</NavLink>
    </nav>
  )
}