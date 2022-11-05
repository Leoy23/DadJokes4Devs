import { NavLink } from 'react-router-dom';
import './NoFavorites.css';

const sadDog = require('../../assets/sad-dog.gif')

export const NoFavorites = () => {
  return (
    <article className='no-favorites'>
      <h2 className='no-fav-text'>You don't have any favorites yet!</h2>
      <img 
        src={sadDog}
        alt={`Dug from Disney's Up is wearing a cone of shame and looks up at you, shamefully`}
        className='sad-dog'
      />
      <h3 className='no-fav-text'>You should probably go <NavLink className='inactive' exact to='/'>home</NavLink> and add some favorites...</h3>
    </article>
  )
}