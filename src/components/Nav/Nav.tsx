import { NavLink } from 'react-router-dom';
import './Nav.css';

const logo = require('../../assets/logo.png');

export const Nav = () => {
  return (
    <nav className='nav-bar'>
      <img 
        className='logo'
        src={logo} 
        alt='DadJokes4Devs Header Logo'/>
      <span className='link-box'>
        <NavLink className='inactive home' exact to='/'>Home</NavLink> <NavLink className='inactive favorites' to='/favorites'>Favs</NavLink>
      </span>
    </nav>
  );
};