import React from 'react';
import './Favorites.css';
import {Favorite} from '../Favorite/Favorite';
import {Joke} from '../../model';

const sadDog = require('../../assets/sad-dog.png')

interface FavoritesProps {
  favs: Joke[];
  deleteFav: (id: string) => void;
}

export const Favorites = ({favs, deleteFav}: FavoritesProps) => {
  const favsList = favs.map(fav => {
    return (
      <Favorite
        key={fav.id}
        id={fav.id}
        joke={fav.joke}
        deleteFav={deleteFav}
      />
    )
  })
  return (
    <section className={favsList.length === 0 ? 'no-favs' : 'fav-box'}>
      {favsList.length === 0 && <h2>You don't have any favorites yet!</h2>}
      {favsList.length === 0 && <img src={sadDog} alt="a sad dog laying down, looking up at you" className="sad-dog" />}
      {favsList}
    </section>
  )
}