import React from 'react';
import './Nav.css';
import {NavLink} from 'react-router-dom'

const logo = require('../../assets/logo.png')

export const Nav = () => {
  return (
    <nav className='nav-bar'>
      <img 
        className='logo'
        src={logo} 
        alt='DadJokes4Devs Header Logo'/>
      <span className='link-box'>
        <NavLink className='inactive' exact to="/">Home</NavLink> <NavLink className='inactive' to="/favorites">Favs</NavLink>
      </span>
    </nav>
  )
}