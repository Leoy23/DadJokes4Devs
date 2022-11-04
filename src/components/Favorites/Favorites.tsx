import React from 'react';
import './Favorites.css';
import {Favorite} from '../Favorite/Favorite';
import {Joke} from '../../model';

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
    <section className='fav-box'>
      {favsList.length === 0 && <h2>You don't have any favorites!</h2>}
      {favsList}
    </section>
  )
}