import React from 'react';
import {NavLink} from 'react-router-dom';
import './BadUrl.css';

const badUrl = require('../../assets/bad-url.gif')

export const BadUrl = () => {
  return (
    <section className="bad-url">
      <h2>Uh oh, that's not a valid URL!</h2>
      <img 
        className="bad-url-img"
        src={badUrl}
        alt="This is fine dog sitting in a fire in his apartment, drinking coffee"
      />
      <h3>This is fine... try going <NavLink className='inactive' exact to="/home">home</NavLink> or a different address.</h3>
    </section>
  )
}